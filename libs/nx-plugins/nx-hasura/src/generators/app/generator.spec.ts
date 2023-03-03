import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { Tree, readProjectConfiguration } from '@nrwl/devkit';

import generator from './generator';
import { AppGeneratorSchema } from './schema';

describe('app generator', () => {
  let appTree: Tree;
  const options: AppGeneratorSchema = { name: 'test-app' };

  beforeEach(() => {
    appTree = createTreeWithEmptyWorkspace({ layout: 'apps-libs' });
  });

  it.todo('should generate the hasura config file');

  it.todo('should generate .env with example secrets');

  it.todo('should generate.env.example with dummy secrets');

  it.todo(
    'should generate a docker compose with docker having a name that match the app'
  );

  it('should run successfully', async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, 'test-app');
    expect(config).toBeDefined();

    expect(appTree.listChanges().map((it) => it.path)).toMatchInlineSnapshot(`
      [
        ".prettierrc",
        "package.json",
        "nx.json",
        "tsconfig.base.json",
        "apps/.gitignore",
        "libs/.gitignore",
        "apps/test-app/project.json",
        "apps/test-app/config.yaml",
        "apps/test-app/metadata/actions.graphql",
        "apps/test-app/metadata/actions.yaml",
        "apps/test-app/metadata/allow_list.yaml",
        "apps/test-app/metadata/cron_triggers.yaml",
        "apps/test-app/metadata/databases/databases.yaml",
        "apps/test-app/metadata/databases/default/tables/tables.yaml",
        "apps/test-app/metadata/query_collections.yaml",
        "apps/test-app/metadata/remote_schemas.yaml",
        "apps/test-app/metadata/version.yaml",
        "apps/test-app/migrations/default/.gitkeep",
        "apps/test-app/.env.example",
        "apps/test-app/.env",
        "apps/test-app/Dockerfile",
        "apps/test-app/docker-compose.yml",
      ]
    `);
  });
});
