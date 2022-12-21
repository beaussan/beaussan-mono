import { SessionAuth } from 'supertokens-auth-react/recipe/session';
import React from 'react';
import Head from 'next/head';
import { useSessionContext } from 'supertokens-auth-react/recipe/session';
import { ListBookmarks } from '@beaussan/dash/feature/bookmark-list';
import { useLogout } from '@beaussan/shared/utils/supertokens/react';
import { clientEnvs } from '@beaussan/dash/data/env-config';

console.log(clientEnvs);

function ProtectedPage() {
  const session = useSessionContext();
  const logout = useLogout();

  if (session.loading === true) {
    return null;
  }

  return (
    <div>
      <Head>
        <title>Dashy dash</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-rows-[1fr_auto] h-screen">
        <main className=" flex flex-col bg-gradient-to-bl overflow-y-auto from-orange-300 via-cyan-400 to-yellow-400 overflow-hidden">
          <ListBookmarks />
        </main>
        <footer className="flex justify-between py-2 px-8 h-12 items-center bg-gradient-to-r from-cyan-300 to-blue-500">
          <div />
          <div>
            Made with ❤️, by{' '}
            <a href="https://twitter.com/beaussan" className="underline">
              @beaussan
            </a>
          </div>
          <div>
            <button
              className="bg-blue-800 hover:bg-black text-white px-2 py-1 rounded-md text-s"
              onClick={logout}
            >
              Sign out
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
export function Index() {
  return (
    <SessionAuth>
      <ProtectedPage></ProtectedPage>
    </SessionAuth>
  );
}

export default Index;
