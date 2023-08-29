import React, { PropsWithChildren, ReactNode, useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { LoadingFullScreen } from '../layouts/LoadingFullScreen';
import { useRouter } from 'next/router';
import { getNavLayout } from './NavBar';

interface WithRoleProps {
  roles: string[];
  redirectTo?: string;
}

export const WithRole = ({
  children,
  roles,
  redirectTo,
}: PropsWithChildren<WithRoleProps>) => {
  const { userRole } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (userRole && !roles.includes(userRole)) {
      console.log('[WithRole] redirect', { userRole });
      router.push(redirectTo ?? '..');
    }
  }, [userRole]);

  if (!userRole) {
    return <LoadingFullScreen debugName="RouteWithRule no user role" />;
  }
  if (!roles.includes(userRole)) {
    return <LoadingFullScreen debugName="RouteWithRule user with no role" />;
  }

  return <>{children}</>;
};
const getLayout = (extraProps: WithRoleProps) => (page: ReactNode) =>
  getNavLayout(<WithRole {...extraProps}>{page}</WithRole>);
export const getLayoutRoleStudent = getLayout({ roles: ['student'] });
export const getLayoutRoleTeacher = getLayout({ roles: ['teacher'] });

export default WithRole;
