import { GraphQLClient } from 'graphql-request';
import { getSdk } from './generated/graphql';
import { getEnvVariable } from './common/getEnv';

const HTTP_BASE_URL = getEnvVariable('HASURA_URL');
const ENDPOINT = '/v1/graphql';

const HTTP_URL = `${HTTP_BASE_URL}${ENDPOINT}`;

const gqlClient = new GraphQLClient(HTTP_URL, {
  headers: { 'x-hasura-admin-secret': getEnvVariable('HASURA_ADMIN') },
});

export const gqlSdk = getSdk(gqlClient);
