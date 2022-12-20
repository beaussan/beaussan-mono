import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import SuperTokensReact, { SuperTokensWrapper } from 'supertokens-auth-react';
import { Provider as UrqlProvider } from 'urql';

import { frontendConfig } from '../config/frontendConfig';
import React, { useEffect, useState } from 'react';
import Session, {
  useSessionContext,
} from 'supertokens-auth-react/recipe/session';
import {
  createAnonymousClient,
  createAuthClient,
} from '@beaussan/dash/data/urql-client';

const BASE_URL = process.env.NEXT_PUBLIC_HASURA_URL;
const BASE_HTTP_METHOD =
  process.env.NEXT_PUBLIC_HASURA_IS_HTTPS === 'yes' ? 'https' : 'http';

// const WS_BASE_URL = `wss://${BASE_URL}`;
const HTTP_BASE_URL = `${BASE_HTTP_METHOD}://${BASE_URL}`;
const ENDPOINT = '/v1/graphql';
// const WS_URL = `${WS_BASE_URL}${ENDPOINT}`;
export const HTTP_URL = `${HTTP_BASE_URL}${ENDPOINT}`;

if (typeof window !== 'undefined') {
  // we only want to call this init function on the frontend, so we check typeof window !== 'undefined'
  SuperTokensReact.init(frontendConfig());
}

function ClientProvider(props: React.PropsWithChildren) {
  const session = useSessionContext();

  const [urqlClient, setUrqlClient] = useState(
    createAnonymousClient({ graphqlEndpoint: HTTP_URL })
  );
  const [isAnonymousClient, setIsAnonymousClient] = useState(true);

  console.log('ClientProvider', { session });

  useEffect(() => {
    const hasNoToken = session.loading || !session.doesSessionExist;
    if (!hasNoToken && isAnonymousClient) {
      console.log('Creating auth token');
      setUrqlClient(createAuthClient({ graphqlEndpoint: HTTP_URL }));
      setIsAnonymousClient(false);
    }
    if (hasNoToken && !isAnonymousClient) {
      console.log('Creating anonymous token');
      setUrqlClient(createAnonymousClient({ graphqlEndpoint: HTTP_URL }));
      setIsAnonymousClient(true);
    }
  }, [isAnonymousClient, session]);

  return <UrqlProvider value={urqlClient}>{props.children}</UrqlProvider>;
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
        <ClientProvider>
          <Head>
            <title>Welcome to new-tab-page!</title>
          </Head>
          <main className="app">
            <Component {...pageProps} />
          </main>
        </ClientProvider>
      </SuperTokensWrapper>
    </>
  );
}

export default CustomApp;
