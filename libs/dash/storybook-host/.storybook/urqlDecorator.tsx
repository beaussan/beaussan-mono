import { Decorator } from '@storybook/react';
import { Provider as UrqlProvider } from 'urql';
import { createAnonymousClient } from '@beaussan/shared/data/next-auth-urql-hasura';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const urqlDecorator: Decorator = (fn, c) => (
  <UrqlProvider value={createAnonymousClient({ graphqlEndpoint: '/graphql' })}>
    <>{fn(c)}</>
  </UrqlProvider>
);

export const queryClientProvider: Decorator = (fn, c) => (
  <QueryClientProvider client={new QueryClient()}>
    <>{fn(c)}</>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
