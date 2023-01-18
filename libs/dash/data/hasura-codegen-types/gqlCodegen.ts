import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [
    {
      'http://localhost:8090/v1/graphql': {
        headers: {
          'x-hasura-admin-secret': 'HASURA_ADMIN_SECRET_LOCAL_DEV',
        },
      },
    },
  ],
  generates: {
    'libs/dash/data/hasura-codegen-types/src/lib/graphqlTypes.ts': {
      plugins: ['typescript'],
      config: {
        // See `scalars` option on https://www.the-guild.dev/graphql/codegen/plugins/typescript/typescript
        scalars: {
          uuid: 'string',
          timestamptz: 'string',
        },
      },
    },
    'libs/dash/data/hasura-codegen-types/src/lib/graphql.schema.json': {
      plugins: ['introspection'],
    },
    'libs/dash/data/hasura-codegen-types/src/lib/graphql.schema.graphql': {
      plugins: ['schema-ast'],
    },
  },
};
export default config;
