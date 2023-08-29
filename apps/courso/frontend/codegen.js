// require('dotenv').config({ path: '.env.local' });

module.exports = {
  schema: [
    {
      [`${process.env.HASURA_URL}/v1/graphql`]: {
        headers: {
          'x-hasura-admin-secret': process.env.HASURA_ADMIN,
        },
      },
    },
  ],
  overwrite: true,
  generates: {
    'apps/courso/frontend/graphql.schema.json': {
      plugins: ['introspection'],
    },
    'apps/courso/frontend/graphql.schema.graphql': {
      plugins: ['schema-ast'],
    },
    'apps/courso/frontend/src/generated/graphql.ts': {
      documents: [
        'apps/courso/frontend/src/**/*.tsx',
        'apps/courso/frontend/src/**/*.ts',
        'apps/courso/frontend/src/**/*.graphql',
      ],
      plugins: ['typescript', 'typescript-operations', 'typescript-urql'],
      config: {
        skipTypename: false,
        withHooks: true,
      },
    },
    'apps/courso/frontend/lib/generated/graphql.ts': {
      documents: ['apps/courso/frontend/lib/**/*.graphql'],
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      config: {
        skipTypename: false,
        withHooks: true,
      },
    },
  },
};
