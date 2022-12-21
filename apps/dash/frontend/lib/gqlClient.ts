import { GraphQLClient } from 'graphql-request';
import { getSdk } from '@beaussan/dash/data/backend-admin-sdk';
import { env } from './env';

export const gqlClient = new GraphQLClient(
  env.NEXT_PUBLIC_HASURA_GRAPHQL_HTTP_URL,
  {
    headers: { 'x-hasura-admin-secret': env.HASURA_ADMIN_SECRET },
  }
);

export const gqlSdk = getSdk(gqlClient);
