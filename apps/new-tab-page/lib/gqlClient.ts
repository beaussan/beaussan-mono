import { GraphQLClient } from 'graphql-request';

const BASE_URL = process.env.NEXT_PUBLIC_HASURA_URL;
const BASE_HTTP_METHOD =
  process.env.NEXT_PUBLIC_HASURA_IS_HTTPS === 'yes' ? 'https' : 'http';

// const WS_BASE_URL = `wss://${BASE_URL}`;
const HTTP_BASE_URL = `${BASE_HTTP_METHOD}://${BASE_URL}`;
const ENDPOINT = '/v1/graphql';
export const HTTP_URL = `${HTTP_BASE_URL}${ENDPOINT}`;

export const gqlClient = new GraphQLClient(HTTP_URL, {
  headers: { 'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET! },
});
