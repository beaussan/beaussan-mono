import nc from 'next-connect';
import { createLogger } from '../../../../lib/common/log';
import {
  getOnError,
  getTokenVerificationMiddleware,
} from '../../../../lib/hasura/middleware';
import { NextApiRequest, NextApiResponse } from 'next';
import { HttpsError } from '../../../../lib/common/HttpsError';
import { actionMap } from '../../../../lib/hasura/actions';
import { PayloadRequest } from '../../../../lib/hasura/actions/types';
import { getEnvVariable } from '../../../../lib/common/getEnv';

const logger = createLogger({ component: 'hasura/action-handler' });

export default nc<NextApiRequest, NextApiResponse>({
  onError: getOnError(logger),
})
  .use(
    getTokenVerificationMiddleware(
      logger,
      getEnvVariable('HASURA_ACTION_MASTER_TOKEN')
    )
  )
  .post(async (req, res) => {
    const typedReq = req.body as PayloadRequest<any>;
    const handler = actionMap[typedReq.action.name];
    if (!handler) {
      throw new HttpsError('invalid-argument', 'handler not found');
    }
    logger.info(`Starting action handler ${typedReq.action.name}`);
    logger.debug(`Data for action handler ${typedReq.action.name}`, typedReq);
    const params = typedReq.input;
    const sessionVars = typedReq.session_variables;
    const result = await handler(params, sessionVars);
    logger.debug(`Data from action handler ${typedReq.action.name}`, result);
    return res.status(200).json(result);
  });
