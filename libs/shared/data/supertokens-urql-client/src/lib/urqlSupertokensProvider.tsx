import React, { useEffect, useState } from 'react';
import { useSessionContext } from 'supertokens-auth-react/recipe/session';
import { createAnonymousClient, createAuthClient } from './urqlClient';
import { Provider as UrqlProvider } from 'urql/dist/types/context';

export function UrqlSupertokensProvider({
  graphqlEndpoint,
  children,
}: React.PropsWithChildren<{ graphqlEndpoint: string }>) {
  const session = useSessionContext();

  const [urqlClient, setUrqlClient] = useState(
    createAnonymousClient({ graphqlEndpoint })
  );
  const [isAnonymousClient, setIsAnonymousClient] = useState(true);

  // console.log('ClientProvider', { session });

  useEffect(() => {
    const hasNoToken = session.loading || !session.doesSessionExist;
    if (!hasNoToken && isAnonymousClient) {
      // console.log('Creating auth token');
      setUrqlClient(createAuthClient({ graphqlEndpoint }));
      setIsAnonymousClient(false);
    }
    if (hasNoToken && !isAnonymousClient) {
      // console.log('Creating anonymous token');
      setUrqlClient(createAnonymousClient({ graphqlEndpoint }));
      setIsAnonymousClient(true);
    }
  }, [isAnonymousClient, session]);

  return <UrqlProvider value={urqlClient}>{children}</UrqlProvider>;
}
