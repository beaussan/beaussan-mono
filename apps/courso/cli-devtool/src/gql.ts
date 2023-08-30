import { z } from 'zod';
import { GraphQLClient } from 'graphql-request';
import { getSdk } from './generated/graphql';

export const envConfig = z
  .object({
    HASURA_ENDPOINT: z.string().url(),
    HASURA_ADMIN_SECRET: z.string(),
  })
  .parse(process.env);

const gqlClient = new GraphQLClient(envConfig.HASURA_ENDPOINT, {
  headers: { 'x-hasura-admin-secret': envConfig.HASURA_ADMIN_SECRET },
});

export const gqlSdk = getSdk(gqlClient);
