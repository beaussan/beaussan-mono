import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import SuperTokensReact, { SuperTokensWrapper } from 'supertokens-auth-react';

import { frontendConfig } from '../config/frontendConfig';
import React, { useEffect } from 'react';
import Session from 'supertokens-auth-react/recipe/session';
import { UrqlSupertokensProvider } from '@beaussan/shared/data/supertokens-urql-client';
import { clientEnvs } from '@beaussan/dash/data/env-config';

export const HTTP_URL = clientEnvs.NEXT_PUBLIC_HASURA_GRAPHQL_HTTP_URL;

if (typeof window !== 'undefined') {
  // we only want to call this init function on the frontend, so we check typeof window !== 'undefined'
  SuperTokensReact.init(frontendConfig());
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
      <SuperTokensWrapper>
        <UrqlSupertokensProvider graphqlEndpoint={HTTP_URL}>
          <Head>
            <title>Welcome to new-tab-page!</title>
          </Head>
          <main className="app">
            <Component {...pageProps} />
          </main>
        </UrqlSupertokensProvider>
      </SuperTokensWrapper>
    </>
  );
}

export default CustomApp;
