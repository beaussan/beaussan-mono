import { getServerRecipes } from '@beaussan/shared/utils/supertokens/node';
import { appInfo } from './appInfo';
import { TypeInput } from 'supertokens-node/types';
import { ServerClient } from 'postmark';
import { gqlSdk } from '../lib/gqlClient';
import * as process from 'process';
import { env } from '../lib/env';

// TODO make a proper postmark client
const mailClient = new ServerClient(env.POSTMARK_API_TOKEN!);

export const backendConfig = (): TypeInput => {
  return {
    framework: 'express',
    supertokens: {
      // https://try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
      connectionURI: env.SUPERTOKEN_CONNEXION_URI,
      apiKey: env.SUPERTOKEN_API_KEY,
    },
    appInfo,
    recipeList: getServerRecipes({
      defaultRole: 'user',
      postSignUp: async (user) => {
        await gqlSdk.createUserOnLogin({
          email: user.email,
          id: user.id,
        });
      },
      mail: {
        postmarkClient: mailClient,
        from: 'auth@nbe.io',
        templateName: 'passwordless-login',
        extraTemplateModel: {
          productName: 'New tab page',
        },
        doNotSendMail: env.NODE_ENV === 'development',
      },
      providers: {
        github: {
          clientId: env.GITHUB_AUTH_CLIENT_ID,
          clientSecret: env.GITHUB_AUTH_CLIENT_SECRET,
        },
      },
      dashboardAPiKey: env.SUPERTOKEN_DASHBOARD_API_KEY,
    }),
    isInServerlessEnv: true,
  };
};
