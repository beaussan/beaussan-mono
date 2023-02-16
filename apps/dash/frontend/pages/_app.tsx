import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import SuperTokensReact, { SuperTokensWrapper } from 'supertokens-auth-react';

import { frontendConfig } from '../config/frontendConfig';
import React, { useEffect } from 'react';
import Session from 'supertokens-auth-react/recipe/session';
import { UrqlSupertokensProvider } from '@beaussan/shared/data/supertokens-urql-client';
import { clientEnvs } from '@beaussan/dash/data/env-config';
import { UserDataProvider } from '@beaussan/dash/data/user';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { persistQueryClient } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

export const HTTP_URL = clientEnvs.NEXT_PUBLIC_HASURA_GRAPHQL_HTTP_URL;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});
if (typeof window !== 'undefined') {
  // we only want to call this init function on the frontend, so we check typeof window !== 'undefined'
  SuperTokensReact.init(frontendConfig());

  const localStoragePersister = createSyncStoragePersister({
    storage: window.localStorage,
  });
  // const sessionStoragePersister = createSyncStoragePersister({ storage: window.sessionStorage })

  persistQueryClient({
    queryClient,
    persister: localStoragePersister,
  });
}

function CustomApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    async function doRefresh() {
      if (pageProps.fromSupertokens === 'needs-refresh') {
        if (await Session.attemptRefreshingSession()) {
          location.reload();
        } else {
          // user has been logged out
          SuperTokensReact.redirectToAuth();
        }
      }
    }
    doRefresh();
  }, [pageProps.fromSupertokens]);
  if (pageProps.fromSupertokens === 'needs-refresh') {
    return null;
  }
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <SuperTokensWrapper>
          <UrqlSupertokensProvider graphqlEndpoint={HTTP_URL}>
            <UserDataProvider>
              <Head>
                <title>Dashy dash</title>
                <link rel="icon" href="/favicon.png" />
              </Head>
              <main className="app">
                <Component {...pageProps} />
              </main>
            </UserDataProvider>
          </UrqlSupertokensProvider>
        </SuperTokensWrapper>
      </QueryClientProvider>
    </>
  );
}

export default CustomApp;
