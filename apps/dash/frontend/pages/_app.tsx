import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

import React, { useEffect, useState } from 'react';
import { clientEnvs } from '@beaussan/dash/data/env-config';
import { UserDataProvider } from '@beaussan/dash/data/user';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  Persister,
  persistQueryClient,
} from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { Toaster } from 'react-hot-toast';
import { UrqlNextAuthProvider } from '@beaussan/shared/data/next-auth-urql-hasura';
import { SessionProvider } from 'next-auth/react';

export const HTTP_URL = clientEnvs.NEXT_PUBLIC_HASURA_GRAPHQL_HTTP_URL;

function CustomApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: 1000 * 60 * 60 * 24, // 24 hours
          },
        },
      })
  );
  const [persister, setPersister] = useState<Persister | undefined>(undefined);

  useEffect(() => {
    if (persister) {
      return;
    }
    if (typeof window !== 'undefined') {
      const localStoragePersister = createSyncStoragePersister({
        storage: window.localStorage,
      });

      persistQueryClient({
        queryClient,
        persister: localStoragePersister,
      });
      setPersister(localStoragePersister);
    }
  }, []);

  return (
    <>
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <UrqlNextAuthProvider graphqlEndpoint={HTTP_URL}>
            <UserDataProvider>
              <Head>
                <title>Dashy dash</title>
                <link rel="icon" href="/favicon_3.png" />
              </Head>
              <main className="app">
                <Component {...pageProps} />
              </main>
              <Toaster position="top-right" />
            </UserDataProvider>
          </UrqlNextAuthProvider>
        </QueryClientProvider>
      </SessionProvider>
    </>
  );
}

export default CustomApp;
