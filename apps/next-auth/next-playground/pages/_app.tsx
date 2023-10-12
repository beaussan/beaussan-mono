import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { SessionProvider } from 'next-auth/react';
import { UrqlNextAuthProvider } from '@beaussan/shared/data/next-auth-urql-hasura';

// trigger cache
function CustomApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <UrqlNextAuthProvider
          graphqlEndpoint={process.env.NEXT_PUBLIC_HASURA_URL!}
        >
          <Head>
            <title>Welcome to next-auth/next-playground!</title>
          </Head>
          <main className="app">
            <Component {...pageProps} />
          </main>
        </UrqlNextAuthProvider>
      </SessionProvider>
    </>
  );
}

export default CustomApp;
