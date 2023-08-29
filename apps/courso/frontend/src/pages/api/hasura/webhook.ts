import nc from 'next-connect';
import { createLogger } from '../../../../lib/common/log';
import {
  getOnError,
  getTokenVerificationMiddleware,
} from '../../../../lib/hasura/middleware';
import { NextApiRequest, NextApiResponse } from 'next';
import { HttpsError } from '../../../../lib/common/HttpsError';
import { webhooksHandler } from '../../../../lib/hasura/webhooks';
import {
  webHookModel,
  WebhookPayload,
} from '../../../../lib/hasura/webhooks/types';

const logger = createLogger({ component: 'hasura/webhook-handler' });

export default nc<NextApiRequest, NextApiResponse>({
  onError: getOnError(logger),
})
  .use(
    getTokenVerificationMiddleware(
      logger,
      process.env.HASURA_WEBHOOK_MASTER_TOKEN as string
    )
  )
  .use((req, res, next) => {
    try {
      webHookModel.validateSync(req.body, { abortEarly: false });
    } catch (e) {
      throw new HttpsError(
        'invalid-argument',
        'body not valid',
        (e as any).errors
      );
    }
    next();
  })
  .post(async (req, res) => {
    const data = req.body as WebhookPayload<any>;

    const handler = webhooksHandler[data.trigger.name];
    if (!handler) {
      throw new HttpsError('invalid-argument', 'handler not found');
    }

    logger.info(`Starting webhook handler ${data.trigger.name}`);
    logger.debug(`Data for webhook ${data.trigger.name}`, data);
    const response = await handler(data);

    res.status(200).json(response ?? data);
  });
