import React, { useEffect, useState } from 'react';
import { createAnonymousClient, createAuthClient } from './urqlClient';
import { Provider as UrqlProvider } from 'urql';
import { useSession } from 'next-auth/react';

export function UrqlNextAuthProvider({
  graphqlEndpoint,
  children,
}: React.PropsWithChildren<{ graphqlEndpoint: string }>) {
  const { status, data } = useSession();

  const [urqlClient, setUrqlClient] = useState(
    createAnonymousClient({ graphqlEndpoint })
  );
  const [isAnonymousClient, setIsAnonymousClient] = useState(true);

  console.log('ClientProvider', { status, data });

  useEffect(() => {
    if (status === 'authenticated' && isAnonymousClient) {
      console.log('Creating auth token');
      setUrqlClient(createAuthClient({ graphqlEndpoint }));
      setIsAnonymousClient(false);
      return;
    }
    if (!isAnonymousClient && status !== 'authenticated') {
      console.log('Creating anonymous token');
      setUrqlClient(createAnonymousClient({ graphqlEndpoint }));
      setIsAnonymousClient(true);
    }
  }, [isAnonymousClient, status, data]);

  return <UrqlProvider value={urqlClient}>{children}</UrqlProvider>;
}
