import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import SuperTokensReact, { SuperTokensWrapper } from 'supertokens-auth-react';

import { frontendConfig } from '../config/frontendConfig';
import { useEffect } from 'react';
import Session from 'supertokens-auth-react/recipe/session';

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
        <Head>
          <title>Welcome to new-tab-page!</title>
        </Head>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </SuperTokensWrapper>
    </>
  );
}

export default CustomApp;
