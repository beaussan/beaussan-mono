import { AppProps } from 'next/app';
import React, { ReactNode } from 'react';

import { SessionProvider } from 'next-auth/react';
import { CurrentUserProvider } from '../hooks/useCurrentUser';
import '../tailwind.css';
import Head from 'next/head';
import '../fonts/monoid/monoid.css';
import { AuthContextProvider } from '../hooks/useAuthContext';
import { ToastProvider } from 'react-toast-notifications';
import { UrqlNextAuthProvider } from '@beaussan/shared/data/next-auth-urql-hasura';
import { clientEnvs } from '@beaussan/courso/data/env-config';

type getLayoutFn = (input: ReactNode) => ReactNode;

const HTTP_URL = clientEnvs.NEXT_PUBLIC_HASURA_GRAPHQL_HTTP_URL;

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout =
    ((Component as any).getLayout as getLayoutFn) || ((page) => <>{page}</>);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Courso</title>
      </Head>
      <SessionProvider session={pageProps.session}>
        <AuthContextProvider>
          <UrqlNextAuthProvider graphqlEndpoint={HTTP_URL}>
            <CurrentUserProvider>
              <>
                <ToastProvider autoDismiss>
                  {getLayout(<Component {...pageProps} />)}
                </ToastProvider>
              </>
            </CurrentUserProvider>
          </UrqlNextAuthProvider>
        </AuthContextProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
