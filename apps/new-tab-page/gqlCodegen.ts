import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'libs/dash/types/hasura-codegen-types/src/lib/graphql.schema.graphql',
  documents: 'apps/new-tab-page/lib/**/*.graphql',
  generates: {
    urql: {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: '~@beaussan/dash/types/hasura-codegen-types',
      },
      plugins: ['typescript-operations', 'typescript-graphql-request'],
    },
    msw: {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.msw.generated.ts',
        baseTypesPath: '~@beaussan/dash/types/hasura-codegen-types',
      },
      plugins: ['typescript-operations', 'typescript-msw'],
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
