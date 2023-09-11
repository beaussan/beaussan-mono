// require('dotenv').config({ path: '.env.local' });

module.exports = {
  schema: [
    {
      [`${process.env.HASURA_ENDPOINT}`]: {
        headers: {
          'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
        },
      },
    },
  ],
  overwrite: true,
  generates: {
    'apps/courso/cli-devtool/src/generated/graphql.ts': {
      documents: ['apps/courso/cli-devtool/src/**/*.graphql'],
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
