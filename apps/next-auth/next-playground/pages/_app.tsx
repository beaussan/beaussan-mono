import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { SessionProvider } from 'next-auth/react';
import { UrqlClientProvider } from '../components/UrqlProvider';

function CustomApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <UrqlClientProvider>
          <Head>
            <title>Welcome to next-auth/next-playground!</title>
          </Head>
          <main className="app">
            <Component {...pageProps} />
          </main>
        </UrqlClientProvider>
      </SessionProvider>
    </>
  );
}

export default CustomApp;
