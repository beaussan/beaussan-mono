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
