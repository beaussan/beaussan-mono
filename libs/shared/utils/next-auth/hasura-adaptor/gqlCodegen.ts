import { CodegenConfig } from '@graphql-codegen/cli';

const scalars = {
  uuid: 'string',
  timestamptz: 'string',
};

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    'http://localhost:8020/v1/graphql': {
      headers: {
        'x-hasura-admin-secret': 'HASURA_ADMIN_SECRET_LOCAL_DEV',
      },
    },
  },
  documents: `${__dirname}/src/lib/*.gql`,
  generates: {
    [`${__dirname}/schema.graphql`]: {
      plugins: ['schema-ast'],
    },
    [`${__dirname}/src/lib/generated/graphql.ts`]: {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      config: {
        scalars,
        preResolveTypes: true,
        skipTypename: false,
        enumsAsTypes: true,
        constEnums: true,
        /*
        preResolveTypes: true,
        skipTypename: false,
        enumsAsTypes: true,
        constEnums: true
 */
      },
    },
  },
};

// const config: CodegenConfig = codegen.backend(__dirname);

export default config;
