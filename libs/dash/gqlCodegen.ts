import { CodegenConfig } from '@graphql-codegen/cli';

const mainGqlTypeRoot =
  'libs/dash/data/hasura-codegen-types/src/lib/graphqlTypes.ts';
const mainGqlSchemaRoot =
  'libs/dash/data/hasura-codegen-types/src/lib/graphql.schema.graphql';

const libTypes = '~@beaussan/dash/data/hasura-codegen-types';

// See `scalars` option on https://www.the-guild.dev/graphql/codegen/plugins/typescript/typescript
const scalars = {
  uuid: 'string',
  timestamptz: 'string',
};

const sharedConfig = {
  scalars,
};

export const codegen: Record<
  'main' | 'backend' | 'frontend',
  (basePath: string) => CodegenConfig
> = {
  main: (basePath: string) => ({
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
      [mainGqlTypeRoot]: {
        plugins: ['typescript'],
        config: {
          ...sharedConfig,
        },
      },
      'libs/dash/data/hasura-codegen-types/src/lib/graphql.schema.json': {
        plugins: ['introspection'],
      },
      [mainGqlSchemaRoot]: {
        plugins: ['schema-ast'],
      },
    },
  }),
  backend: (basePath: string) => ({
    schema: mainGqlSchemaRoot,
    documents: `${basePath}/src/lib/**/*.gql`,
    generates: {
      [`${basePath}/src/lib/sdk.ts`]: {
        preset: 'near-operation-file',
        presetConfig: {
          baseTypesPath: libTypes,
        },
        plugins: [
          'typescript-operations',
          'typescript-graphql-request',
          'typescript-msw',
        ],
        config: {
          ...sharedConfig,
          link: {
            name: 'hasura',
            endpoint: 'http://localhost:8090/v1/graphql',
          },
        },
      },
    },
  }),
  frontend: (basePath: string) => ({
    schema: mainGqlSchemaRoot,
    documents: [`${basePath}/src/**/*.graphql`, `${basePath}/src/**/*.gql`],
    generates: {
      urql: {
        preset: 'near-operation-file',
        presetConfig: {
          extension: '.generated.ts',
          baseTypesPath: libTypes,
        },
        plugins: ['typescript-operations', 'typescript-urql', 'typescript-msw'],
        config: {
          ...sharedConfig,
        },
      },
    },
  }),
};
