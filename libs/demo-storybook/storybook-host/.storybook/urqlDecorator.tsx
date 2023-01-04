import { DecoratorFunction } from '@storybook/addons';
import { Provider as UrqlProvider } from 'urql';
import { createAnonymousClient } from '@beaussan/shared/data/supertokens-urql-client';

export const urqlDecorator: DecoratorFunction = (fn, c) => (
  <UrqlProvider value={createAnonymousClient({ graphqlEndpoint: '/graphql' })}>
    <>{fn(c)}</>
  </UrqlProvider>
);
