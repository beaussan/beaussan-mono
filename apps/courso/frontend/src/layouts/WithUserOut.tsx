import React, { PropsWithChildren, ReactNode, useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useCurrentUser } from '../hooks/useCurrentUser';
import { LoadingFullScreen } from '../layouts/LoadingFullScreen';
import { useRouter } from 'next/router';
import { routes } from '../routGetters';

export const WithUserOut = ({ children }: PropsWithChildren) => {
  const { authStatus } = useAuthContext();
  const { loading: userLoading, user } = useCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if (authStatus === 'in' || user) {
      console.log('[WithUserOut] redirect', { authStatus, user });
      router.push(routes.appRoot());
    }
  }, [authStatus, router]);

  if (authStatus === 'loading' || userLoading) {
    return <LoadingFullScreen debugName="RouteWithAuth loading" />;
  }

  if (authStatus === 'in') {
    return (
      <LoadingFullScreen debugName="RouteWithAuth loading until redirect kicks in" />
    );
  }

  return <>{children}</>;
};
export const getOutLayout = (page: ReactNode) => (
  <WithUserOut>{page}</WithUserOut>
);

export default WithUserOut;
