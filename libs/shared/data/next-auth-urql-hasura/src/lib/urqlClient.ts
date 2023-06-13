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

import { authExchange } from '@urql/exchange-auth';
import { getSession } from 'next-auth/react';

export type CreateClientOptions = {
  graphqlEndpoint: string;
};

export const createAnonymousClient = ({
  graphqlEndpoint,
}: CreateClientOptions) => {
  return createClient({
    url: graphqlEndpoint,
    suspense: false,
    exchanges: [devtoolsExchange, dedupExchange, cacheExchange, fetchExchange],
  });
};

export const createAuthClient = ({ graphqlEndpoint }: CreateClientOptions) => {
  return createClient({
    url: graphqlEndpoint,
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
          const session = await getSession();
          const maybeToken = (session as any)?.token;
          console.log('[getAuth] new token : ', { session, maybeToken });
          if (!maybeToken) {
            return null;
          }
          return { token: maybeToken };
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
