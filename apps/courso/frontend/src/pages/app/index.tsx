import React, { useEffect } from 'react';
import { getNavLayout } from '../../layouts/NavBar';
import { LoadingFullScreen } from '../../layouts/LoadingFullScreen';
import { useRouter } from 'next/router';
import { routes } from '../../routGetters';
import { useAuthContext } from '../../hooks/useAuthContext';

export const App = () => {
  const { userRole } = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    if (userRole === 'teacher') {
      router.push(routes.practice());
    } else {
      router.push(routes.handoff());
    }
  }, [router, userRole]);
  return <LoadingFullScreen debugName="App waiting for redirect" />;
};

App.getLayout = getNavLayout;

export default App;
