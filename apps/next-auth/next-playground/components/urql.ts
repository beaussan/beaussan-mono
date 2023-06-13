import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
} from 'urql';
import { devtoolsExchange } from '@urql/devtools';
import { makeOperation } from '@urql/core';

import { authExchange } from '@urql/exchange-auth';
import { getSession } from 'next-auth/react';

const BASE_URL = process.env.NEXT_PUBLIC_HASURA_URL!;

export const HTTP_URL = BASE_URL;

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
      dedupExchange,
      cacheExchange,
      authExchange<{ token: string }>({
        getAuth: async (params) => {
          const session = await getSession();
          const maybeToken = session?.token;
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
