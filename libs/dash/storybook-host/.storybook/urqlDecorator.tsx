import { Decorator } from '@storybook/react';
import { Provider as UrqlProvider } from 'urql';
import { createAnonymousClient } from '@beaussan/shared/data/next-auth-urql-hasura';

export const urqlDecorator: Decorator = (fn, c) => (
  <UrqlProvider value={createAnonymousClient({ graphqlEndpoint: '/graphql' })}>
    <>{fn(c)}</>
  </UrqlProvider>
);
