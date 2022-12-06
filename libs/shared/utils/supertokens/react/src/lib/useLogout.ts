import SessionReact from 'supertokens-auth-react/recipe/session';
import SuperTokensReact from 'supertokens-auth-react';

export function useLogout() {
  const logout = async () => {
    await SessionReact.signOut();
    await SuperTokensReact.redirectToAuth();
  };

  return logout;
}
