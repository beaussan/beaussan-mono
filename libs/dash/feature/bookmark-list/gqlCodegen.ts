import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'libs/dash/types/hasura-codegen-types/src/lib/graphql.schema.graphql',
  documents: [
    'libs/dash/feature/bookmark-list/src/**/*.graphql',
    'libs/dash/feature/bookmark-list/src/**/*.gql',
  ],
  generates: {
    urql: {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: '~@beaussan/dash/types/hasura-codegen-types',
      },
      plugins: ['typescript-operations', 'typescript-urql', 'typescript-msw'],
    },
  },
};

export default config;
