import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'libs/dash/data/hasura-codegen-types/src/lib/graphql.schema.graphql',
  documents: [
    'libs/dash/feature/bookmark-list/src/**/*.graphql',
    'libs/dash/feature/bookmark-list/src/**/*.gql',
  ],
  generates: {
    urql: {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: '~@beaussan/dash/data/hasura-codegen-types',
      },
      plugins: ['typescript-operations', 'typescript-urql', 'typescript-msw'],
      config: {
        scalars: {
          uuid: 'string',
          timestamptz: 'string',
        },
      },
    },
  },
};

export default config;
