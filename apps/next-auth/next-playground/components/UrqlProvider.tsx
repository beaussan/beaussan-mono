import React, { useEffect, useState } from 'react';
import { createAnonymousClient, createAuthClient } from './urql';
import { Provider as UrqlProvider } from 'urql';
import { useSession } from 'next-auth/react';

export function UrqlClientProvider(props: React.PropsWithChildren) {
  const { status, data } = useSession();

  const [urqlClient, setUrqlClient] = useState(createAnonymousClient());
  const [isAnonymousClient, setIsAnonymousClient] = useState(true);

  console.log('ClientProvider', { status, data });

  useEffect(() => {
    if (status === 'authenticated' && isAnonymousClient) {
      console.log('Creating auth token');
      setUrqlClient(createAuthClient());
      setIsAnonymousClient(false);
      return;
    }
    if (!isAnonymousClient && status !== 'authenticated') {
      console.log('Creating anonymous token');
      setUrqlClient(createAnonymousClient());
      setIsAnonymousClient(true);
    }
  }, [isAnonymousClient, status, data]);

  return <UrqlProvider value={urqlClient}>{props.children}</UrqlProvider>;
}
