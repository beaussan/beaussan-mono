import { ErrorHandler, RequestHandler } from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import { Logger } from 'pino';
import { ValidationError } from 'yup';
import { HttpsError } from '../common/HttpsError';

export const getTokenVerificationMiddleware = (
  logger: Logger,
  token: string
): RequestHandler<NextApiRequest, NextApiResponse> => {
  return (req, res, next) => {
    const tokenFromRequest = req.headers.token;
    if (!tokenFromRequest || tokenFromRequest !== token) {
      logger.info(`Invalid token : ${tokenFromRequest}, expected ${token}`);
      throw new HttpsError('invalid-argument', 'token not found');
    } else {
      next();
    }
  };
};

export const getOnError =
  (logger: Logger): ErrorHandler<NextApiRequest, NextApiResponse> =>
  (err, req, res, next) => {
    logger.info('Error handler triggered', err);
    if (err instanceof HttpsError) {
      logger.debug('Error HttpsError found', err);
      const { status, canonicalName } = err.httpErrorCode;
      if (canonicalName === 'INTERNAL') {
        logger.error('Error in function', err);
      }
      res.status(status).json({
        message: err.message,
        code: JSON.stringify(err.toJSON()),
      });
    } else if (err instanceof ValidationError) {
      logger.debug('Error ValidationError found', err);
      res.status(400).json({
        message: err.message,
        code: JSON.stringify(err.errors),
      });
    } else {
      logger.error(
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
