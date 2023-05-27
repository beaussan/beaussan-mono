import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import SuperTokensReact, { SuperTokensWrapper } from 'supertokens-auth-react';

import { frontendConfig } from '../config/frontendConfig';
import React, { useEffect, useState } from 'react';
import Session from 'supertokens-auth-react/recipe/session';
import { UrqlSupertokensProvider } from '@beaussan/shared/data/supertokens-urql-client';
import { clientEnvs } from '@beaussan/baby-watch/data/env-config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Toaster } from 'react-hot-toast';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const HTTP_URL = clientEnvs.NEXT_PUBLIC_HASURA_GRAPHQL_HTTP_URL;

if (typeof window !== 'undefined') {
  // we only want to call this init function on the frontend, so we check typeof window !== 'undefined'
  SuperTokensReact.init(frontendConfig());
}

function CustomApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          cacheTime: 1000 * 60 * 60 * 24, // 24 hours
        },
      },
    })
  );
  useEffect(() => {
    async function doRefresh() {
      if (pageProps.fromSupertokens === 'needs-refresh') {
        console.log('Needs refresh !');
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
            <Head>
              <title>Baby watch</title>
              <link rel="icon" href="/favicon_3.png" />
            </Head>
            <main className="app">
              <Component {...pageProps} />
            </main>
            <Toaster position="top-right" />
          </UrqlSupertokensProvider>
        </SuperTokensWrapper>
      </QueryClientProvider>
    </>
  );
}

export default CustomApp;
