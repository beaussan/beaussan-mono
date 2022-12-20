import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'libs/dash/types/hasura-codegen-types/src/lib/graphql.schema.graphql',
  documents: 'libs/dash/data-access/backend-admin-sdk/src/lib/**/*.gql',
  generates: {
    'libs/dash/data-access/backend-admin-sdk/src/lib/sdk.ts': {
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: '~@beaussan/dash/types/hasura-codegen-types',
      },
      plugins: [
        'typescript-operations',
        'typescript-graphql-request',
        'typescript-msw',
      ],
      config: {
        link: {
          name: 'hasura',
          endpoint: 'http://localhost:8090/v1/graphql',
        },
      },
    },
  },
};

export default config;
