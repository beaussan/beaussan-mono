import {
  SessionAuth,
  useSessionContext,
} from 'supertokens-auth-react/recipe/session';
import { useLogout } from '@beaussan/shared/utils/supertokens/react';
import React from 'react';

export function ProtectedPage() {
  const session = useSessionContext();
  const logout = useLogout();

  if (session.loading === true) {
    return null;
  }

  return (
    <div>
      Hello world <div className="bg-blue-500">I m blue</div>
      <button onClick={logout}>Logout</button>
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
