import React, { PropsWithChildren, ReactNode, useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useCurrentUser } from '../hooks/useCurrentUser';
import { useRouter } from 'next/router';
import { LoadingFullScreen } from '../layouts/LoadingFullScreen';
import { routes } from '../routGetters';

export const WithUserLogged = ({ children }: PropsWithChildren) => {
  const { authStatus } = useAuthContext();
  const { user, loading: userLoading } = useCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if (authStatus === 'out') {
      console.log('[WithUserLogged] OUT, redirect to login');
      router.push(routes.login());
    }
  }, [authStatus, router]);

  if (authStatus === 'loading' || userLoading) {
    return <LoadingFullScreen debugName="RouteWithAuth loading" />;
  }

  if (authStatus === 'out') {
    return <LoadingFullScreen debugName="RouteWithAuth out" />;
  }

  console.log({ user, authStatus, userLoading });
  if (!user) {
    return <LoadingFullScreen debugName="RouteWithAuth no user" />;
  }

  return <>{children}</>;
};
export const getLoggedLayout = (page: ReactNode) => (
  <WithUserLogged>{page}</WithUserLogged>
);

export default WithUserLogged;
