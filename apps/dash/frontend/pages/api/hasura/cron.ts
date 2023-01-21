import nc, { ErrorHandler, RequestHandler } from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import { z, ZodError } from 'zod';
import { traefikSyncDb } from '@beaussan/dash/feature/traefik-sync-db';
import { gqlSdk } from '../../../lib/gqlClient';
import { fromZodError } from 'zod-validation-error';
import { env } from '../../../lib/env';

if (env.NODE_ENV === 'development') {
  import('../../../lib/msw');
}

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

const cronToken = env.HASURA_AUTH_TOKEN_CRON;

const payloadSchema = z.object({
  id: z.string().uuid(),
  name: z.enum(['traefikFetcher']),
  payload: z.any(),
  scheduled_time: z.string(),
});

const getOnError =
  (): ErrorHandler<NextApiRequest, NextApiResponse> =>
  (err, req, res, next) => {
    console.log('Error handler triggered', err);
    if (err instanceof ZodError) {
      console.log('Error ZodError found', err);
      res.status(400).json({
        message: fromZodError(err).message,
        code: JSON.stringify(err.errors),
      });
    } else {
      console.error(
        'Error while executing function, returning 400 with hasura codes',
        err
      );
      console.error(err);
      res.status(400).json({
        message: err.message,
        code: '500',
      });
    }
  };

const cronHandler = nc<NextApiRequest, NextApiResponse>({
  onError: getOnError(),
})
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
    const body = payloadSchema.parse(req.body);
    if (body.name === 'traefikFetcher') {
      const returnValue = await traefikSyncDb(gqlSdk, env.TRAEFIK_BASE_URL);

      if (returnValue.status === 'ok') {
        res.status(200).json(returnValue);
        return;
      }
      res.status(500).json(returnValue);
    }
    throw new Error('Something went wrong.');
  });

export default cronHandler;
