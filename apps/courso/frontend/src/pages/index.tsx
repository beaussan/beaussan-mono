import { LoadingFullScreen } from '../layouts/LoadingFullScreen';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { routes } from '../routGetters';

function Index() {
  const router = useRouter();
  useEffect(() => {
    router.push(routes.appRoot());
  }, [router]);
  return <LoadingFullScreen debugName="Index" />;
}

export default Index;
