import { Preview } from '@storybook/react';
import { Provider as UrqlProvider } from 'urql';
import { createAnonymousClient } from '@beaussan/shared/data/next-auth-urql-hasura';
import { ToastProvider } from 'react-toast-notifications';
import { clientEnvs } from '@beaussan/courso/data/env-config';

export const urqlDecorator: Preview['decorators'] = (fn, c) => (
  <UrqlProvider
    value={createAnonymousClient({
      graphqlEndpoint: clientEnvs.NEXT_PUBLIC_HASURA_GRAPHQL_HTTP_URL,
    })}
  >
    <ToastProvider>
      <>{fn(c)}</>
    </ToastProvider>
  </UrqlProvider>
);
