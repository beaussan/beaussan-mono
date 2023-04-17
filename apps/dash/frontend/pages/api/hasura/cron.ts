import { NextApiRequest, NextApiResponse } from 'next';
import { z, ZodError, ZodSchema } from 'zod';
import { traefikSyncDb } from '@beaussan/dash/feature/traefik-sync-db';
import { gqlSdk } from '../../../lib/gqlClient';
import { fromZodError } from 'zod-validation-error';
import { env } from '../../../lib/env';
import { Middleware, use } from 'next-api-route-middleware';

if (env.NODE_ENV === 'development') {
  import('../../../lib/msw');
}

const tokenVerificationMiddleware = (token: string): Middleware => {
  return async (req, res, next) => {
    const tokenFromRequest = req.headers['token'];
    if (!tokenFromRequest || tokenFromRequest !== token) {
      throw new Error('token not found');
    } else {
      await next();
    }
  };
};

const allowMethods = (allowedMethods: string[]): Middleware => {
  return async function (req, res, next) {
    if (allowedMethods.includes(req.method!) || req.method == 'OPTIONS') {
      await next();
    } else {
      res.status(405).send({ message: 'Method not allowed.' });
    }
  };
};

export const captureErrors: Middleware = async (req, res, next) => {
  try {
    await next();
  } catch (err) {
    console.error(err);
    try {
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
        if (err !== null && typeof err === 'object' && 'message' in err) {
          res.status(400).json({
            message: err.message,
            code: '500',
          });
        }
        res.status(400).json({
          code: '500',
        });
      }
    } catch (e) {
      console.log('VERY BAD !!!!!!!!!!!!!!!!!!!!!!');
      console.error(e);
      res.status(400).json({
        code: '500',
      });
    }
  }
};

const validateZodBody = (schema: ZodSchema): Middleware => {
  return async function (req, res, next) {
    console.log(req.body);
    console.log(req.method);
    const result = schema.safeParse(req.body);
    if (result.success) {
      await next();
      return;
    } else {
      throw result.error;
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

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = payloadSchema.parse(req.body);
  if (body.name === 'traefikFetcher') {
    const returnValue = await traefikSyncDb(gqlSdk, env.TRAEFIK_BASE_URL);

    if (returnValue.status === 'ok') {
      res.status(200).json(returnValue);
      return;
    }
    res.status(500).json(returnValue);
    return;
  }
  throw new Error('Something went wrong.');
};

export default use(
  captureErrors,
  tokenVerificationMiddleware(cronToken),
  allowMethods(['POST']),
  validateZodBody(payloadSchema),
  handler
);
