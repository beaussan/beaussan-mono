import nc, { RequestHandler } from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import { z, ZodError } from 'zod';
import { traefikSyncDb } from '@beaussan/dash/feature/traefik-sync-db';
import { gqlSdk } from '../../../lib/gqlClient';
import { fromZodError } from 'zod-validation-error';
import {
  getTraefikRouterMswHandler,
  RouterApiDefinition,
} from '@beaussan/shared/data-access/traefik-read-api';
import { server } from '../../../lib/msw';

const getTokenVerificationMiddleware = (
  token: string
): RequestHandler<NextApiRequest, NextApiResponse> => {
  return (req, res, next) => {
    const tokenFromRequest = req.headers['token'];
    if (!tokenFromRequest || tokenFromRequest !== token) {
      throw new Error('token not found');
    } else {
      next();
    }
  };
};

const mockResult: RouterApiDefinition[] = [
  {
    name: 'AAA',
    rule: 'Host(`AAA.dome.io`)',
    service: 'AAA-service',
    provider: 'AAA',
    entryPoints: [],
    status: 'up',
    using: [],
  },
  {
    name: 'BBB',
    rule: 'Host(`BBB.dome.io`)',
    service: 'BBB-service',
    provider: 'BBB',
    entryPoints: [],
    status: 'up',
    using: [],
  },
];
console.log('TRAEFIK BASE URL', process.env.TRAEFIK_BASE_URL);

server.use(
  getTraefikRouterMswHandler(
    process.env.TRAEFIK_BASE_URL!,
    (req, res, context) => {
      console.log('MOCKING TRAEFIK ENDPOINT');
      return res(context.json(mockResult));
    }
  )
);

const cronToken = process.env.HASURA_AUTH_TOKEN_CRON;
if (!cronToken) {
  throw new Error('HASURA_AUTH_TOKEN_CRON missing');
}

const payloadSchema = z.object({
  id: z.string().uuid(),
  name: z.enum(['traefikFetcher']),
  payload: z.any(),
  scheduled_time: z.string(),
});

const cronHandler = nc<NextApiRequest, NextApiResponse>()
  .use(getTokenVerificationMiddleware(cronToken))
  .use((req, res, next) => {
    console.log(req.body);
    console.log(req.method);
    try {
      payloadSchema.parse(req.body);
      next();
    } catch (e) {
      if (e instanceof ZodError) {
        console.error(fromZodError(e));
      }
      console.error(e);
      throw new Error('Nope.');
    }
  })
  .post(async (req, res) => {
    console.log('INIT POST CALL');
    const body = payloadSchema.parse(req.body);
    console.log('---');
    if (body.name === 'traefikFetcher') {
      console.log('call traefiksync');
      const returnValue = await traefikSyncDb(
        gqlSdk,
        process.env.TRAEFIK_BASE_URL!
      );

      if (returnValue.status === 'ok') {
        res.status(200).json(returnValue);
        return;
      }
      res.status(500).json(returnValue);
    }
    throw new Error('Something went wrong.');
  });

export default cronHandler;
