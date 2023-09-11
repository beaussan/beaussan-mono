import { GraphQLClient } from 'graphql-request';
import { getSdk } from './generated/graphql';
import { serverEnv } from './env';

const gqlClient = new GraphQLClient(
  serverEnv.NEXT_PUBLIC_HASURA_GRAPHQL_HTTP_URL,
  {
    headers: { 'x-hasura-admin-secret': serverEnv.HASURA_ADMIN_SECRET },
  }
);

export const gqlSdk = getSdk(gqlClient);
