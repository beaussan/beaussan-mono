import { getServerRecipes } from '@beaussan/shared/utils/supertokens/node';
import { appInfo } from './appInfo';
import { TypeInput } from 'supertokens-node/types';
import { ServerClient } from 'postmark';
import { gqlClient } from '../lib/gqlClient';
import {
  CreateUserOnLoginMutation,
  CreateUserOnLoginMutationVariables,
  getSdk,
} from '../lib/createUserOnLogin.generated';

// TODO make a proper postmark client
const mailClient = new ServerClient(process.env.POSTMARK_API_TOKEN!);

export const backendConfig = (): TypeInput => {
  return {
    framework: 'express',
    supertokens: {
      // https://try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
      connectionURI: process.env.SUPERTOKEN_CONNEXION_URI!,
      // apiKey: <API_KEY(if configured)>,
    },
    appInfo,
    recipeList: getServerRecipes({
      defaultRole: 'user',
      postSignUp: async (user) => {
        const sdk = getSdk(gqlClient);

        await sdk.createUserOnLogin({
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
        doNotSendMail: process.env.NODE_ENV === 'development',
      },
      providers: {
        github: {
          clientId: process.env.GITHUB_AUTH_CLIENT_ID,
          clientSecret: process.env.GITHUB_AUTH_CLIENT_SECRET,
        },
      },
      dashboardAPiKey: process.env.SUPERTOKEN_DASHBOARD_API_KEY,
    }),
    isInServerlessEnv: true,
  };
};
