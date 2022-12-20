import { DecoratorFunction } from '@storybook/addons';
import { Provider as UrqlProvider } from 'urql';
import { createAnonymousClient } from '@beaussan/dash/data/urql-client';

export const urqlDecorator: DecoratorFunction = (fn, c) => (
  <UrqlProvider value={createAnonymousClient({ graphqlEndpoint: '/graphql' })}>
    <>{fn(c)}</>
  </UrqlProvider>
);
