import {
  cacheExchange,
  createClient,
  dedupExchange,
  errorExchange,
  fetchExchange,
  //  subscriptionExchange,
} from 'urql';
import { devtoolsExchange } from '@urql/devtools';
import { makeOperation } from '@urql/core';

// import { SubscriptionClient } from 'subscriptions-transport-ws';
import { authExchange } from '@urql/exchange-auth';
import Session from 'supertokens-auth-react/recipe/session';

const BASE_URL = process.env.NEXT_PUBLIC_HASURA_URL;
const BASE_HTTP_METHOD =
  process.env.NEXT_PUBLIC_HASURA_IS_HTTPS === 'yes' ? 'https' : 'http';

// const WS_BASE_URL = `wss://${BASE_URL}`;
const HTTP_BASE_URL = `${BASE_HTTP_METHOD}://${BASE_URL}`;
const ENDPOINT = '/v1/graphql';
// const WS_URL = `${WS_BASE_URL}${ENDPOINT}`;
export const HTTP_URL = `${HTTP_BASE_URL}${ENDPOINT}`;

export const createAnonymousClient = () => {
  return createClient({
    url: HTTP_URL,
    suspense: false,
    exchanges: [devtoolsExchange, dedupExchange, cacheExchange, fetchExchange],
  });
};

export const createAuthClient = () => {
  return createClient({
    url: HTTP_URL,
    suspense: false,
    exchanges: [
      devtoolsExchange,
      errorExchange({
        onError: (error) => {
          console.error(error, 'URQL ERROR');
        },
      }),
      dedupExchange,
      cacheExchange,
      authExchange<{ token: string }>({
        getAuth: async (params) => {
          if (!(await Session.doesSessionExist())) {
            return null;
          }

          const jwt = (await Session.getAccessTokenPayloadSecurely()).jwt;
          console.log('[getAuth] new token : ', { jwt });
          if (!jwt) {
            return null;
          }
          return { token: jwt };
        },
        addAuthToOperation: ({ authState, operation }) => {
          if (!authState?.token) {
            return operation;
          }
          const fetchOptions =
            typeof operation.context.fetchOptions === 'function'
              ? operation.context.fetchOptions()
              : operation.context.fetchOptions || {};
          return makeOperation(operation.kind, operation, {
            ...operation.context,
            fetchOptions: {
              ...fetchOptions,
              headers: {
                ...fetchOptions.headers,
                Authorization: `Bearer ${authState.token}`,
              },
            },
          });
        },
        didAuthError: (params) => {
          console.error('didAuthError', params);
          return params.error.message.includes('JWT');
        },
      }),
      fetchExchange,
    ],
  });
};
