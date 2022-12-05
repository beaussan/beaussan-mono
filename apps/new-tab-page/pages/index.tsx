import { SessionAuth } from 'supertokens-auth-react/recipe/session';
import React from 'react';
import Head from 'next/head';
import SessionReact from 'supertokens-auth-react/recipe/session';
import SuperTokensReact from 'supertokens-auth-react';
import { useSessionContext } from 'supertokens-auth-react/recipe/session';
import {
  useRoles,
  useHasuraClaimsFromSession,
} from '@beaussan/shared/utils/supertokens/react';
import { ListBookmarks } from '@beaussan/dash/feature/bookmark-list';

function ProtectedPage() {
  const session = useSessionContext();
  const roles = useRoles();
  const hasuraSession = useHasuraClaimsFromSession();

  async function logoutClicked() {
    await SessionReact.signOut();
    SuperTokensReact.redirectToAuth();
  }

  async function fetchUserData() {
    const res = await fetch('/api/user');
    if (res.status === 200) {
      const json = await res.json();
      alert(JSON.stringify(json));
    }
  }

  if (session.loading === true) {
    return null;
  }

  return (
    <div>
      <Head>
        <title>SuperTokens 💫</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <ListBookmarks />
        <p>You are authenticated with SuperTokens!</p>
        <p>UserId: {session.userId}</p>
        Access token payload:{' '}
        <pre>{JSON.stringify(session.accessTokenPayload, null, 2)}</pre>
        <p>
          Roles: <pre>{JSON.stringify(roles, null, 2)}</pre>
        </p>
        <p>
          Hasura claims: <pre>{JSON.stringify(hasuraSession, null, 2)}</pre>
        </p>
        <div
          style={{
            display: 'flex',
            height: '70px',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingLeft: '75px',
            paddingRight: '75px',
          }}
        >
          <div
            onClick={logoutClicked}
            style={{
              display: 'flex',
              width: '116px',
              height: '42px',
              backgroundColor: '#000000',
              borderRadius: '10px',
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 'bold',
            }}
          >
            SIGN OUT
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            height: '70px',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingLeft: '75px',
            paddingRight: '75px',
          }}
        >
          <div
            onClick={fetchUserData}
            style={{
              display: 'flex',
              width: '150px',
              height: '42px',
              backgroundColor: 'rgb(247 54 54)',
              borderRadius: '10px',
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 'bold',
            }}
          >
            FETCH USER API
          </div>
        </div>
      </main>
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
