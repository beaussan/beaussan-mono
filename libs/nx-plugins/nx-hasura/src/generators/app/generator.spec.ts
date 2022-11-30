import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { Tree, readProjectConfiguration } from '@nrwl/devkit';

import generator from './generator';
import { AppGeneratorSchema } from './schema';

describe('app generator', () => {
  let appTree: Tree;
  const options: AppGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    appTree = createTreeWithEmptyWorkspace();
  });

  it.todo('should generate the hasura config file');

  it.todo('should generate .env with example secrets');

  it.todo('should generate.env.example with dummy secrets');

  it.todo(
    'should generate a docker compose with docker having a name that match the app'
  );

  it('should run successfully', async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, 'test');
    expect(config).toBeDefined();

    expect(appTree.listChanges().map((it) => it.path)).toMatchInlineSnapshot(`
      Array [
        ".prettierrc",
        "package.json",
        "nx.json",
        "tsconfig.base.json",
        "apps/test/project.json",
        "apps/test/config.yaml",
        "apps/test/metadata/actions.graphql",
        "apps/test/metadata/actions.yaml",
        "apps/test/metadata/allow_list.yaml",
        "apps/test/metadata/cron_triggers.yaml",
        "apps/test/metadata/databases/databases.yaml",
        "apps/test/metadata/databases/default/tables/tables.yaml",
        "apps/test/metadata/query_collections.yaml",
        "apps/test/metadata/remote_schemas.yaml",
        "apps/test/metadata/version.yaml",
        "apps/test/.env.example",
        "apps/test/.env",
        "apps/test/Dockerfile",
        "apps/test/docker-compose.yml",
      ]
    `);
  });
});
