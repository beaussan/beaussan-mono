import React from 'react';
import Head from 'next/head';
import { ListBookmarks } from '@beaussan/dash/feature/bookmark-list';
import { UserSettingDialog } from '@beaussan/dash/feature/user-settings';
import { TaskPanel } from '@beaussan/dash/feature/tasks-panel';
import { useSession, signIn, signOut } from 'next-auth/react';

function ProtectedPage() {
  return (
    <div>
      <Head>
        <title>Dashy dash</title>
        <link rel="icon" href="/favicon_3.png" />
      </Head>
      <div className="grid grid-rows-[1fr_auto] h-screen">
        <main className="grid gap-4 py-2 px-4 grid-cols-2 bg-gradient-to-bl overflow-y-auto from-orange-300 via-cyan-400 to-yellow-400 overflow-hidden">
          <div>
            <ListBookmarks />
          </div>
          <div>
            <TaskPanel />
          </div>
        </main>
        <footer className="flex justify-between py-2 px-8 h-12 items-center bg-gradient-to-r from-cyan-300 to-blue-500">
          <div>
            <UserSettingDialog />
          </div>
          <div>
            Made with ❤️, by{' '}
            <a href="https://twitter.com/beaussan" className="underline">
              @beaussan
            </a>
          </div>
          <div>
            <button
              className="bg-blue-800 hover:bg-black text-white px-2 py-1 rounded-md text-s"
              onClick={() => signOut()}
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
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated') {
    return (
      <p>
        Access Denied
        <button
          className="bg-blue-800 hover:bg-black text-white px-2 py-1 rounded-md text-s"
          onClick={() => signIn()}
        >
          Sign In
        </button>
      </p>
    );
  }
  return <ProtectedPage></ProtectedPage>;
}

export default Index;
