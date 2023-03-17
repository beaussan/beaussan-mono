import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { Tree, readProjectConfiguration } from '@nrwl/devkit';

import generator from './generator';
import { SetupGraphqlCodegenGeneratorSchema } from './schema';
import libraryGenerator from '../library/generator';
import { printChanges } from 'nx/src/generators/tree';

describe('setup-graphql-codegen generator', () => {
  let appTree: Tree;
  const options: SetupGraphqlCodegenGeneratorSchema = {
    project: 'shared-data-test',
    generationType: 'server',
  };

  beforeEach(() => {
    appTree = createTreeWithEmptyWorkspace({ layout: 'apps-libs' });
  });

  it('should run successfully for client', async () => {
    await libraryGenerator(appTree, {
      name: 'test',
      type: 'data',
      scope: 'shared',
    });
    await generator(appTree, { ...options, generationType: 'client' });
    const result = appTree
      .read('libs/shared/data/test/gqlCodegen.ts')
      .toString();
    expect(result).toMatchInlineSnapshot(`
      "import { CodegenConfig } from '@graphql-codegen/cli';
      import { codegen } from '../../gqlCodegen';

      const config: CodegenConfig = codegen.frontend(__dirname);

      export default config;
      "
    `);
  });

  it('should run successfully for server', async () => {
    await libraryGenerator(appTree, {
      name: 'test',
      type: 'data',
      scope: 'shared',
    });
    await generator(appTree, { ...options, generationType: 'server' });
    const result = appTree
      .read('libs/shared/data/test/gqlCodegen.ts')
      .toString();

    expect(result).toMatchInlineSnapshot(`
      "import { CodegenConfig } from '@graphql-codegen/cli';
      import { codegen } from '../../gqlCodegen';

      const config: CodegenConfig = codegen.backend(__dirname);

      export default config;
      "
    `);
  });

  it('should include codegen target in project configuration', async () => {
    await libraryGenerator(appTree, {
      name: 'test',
      type: 'data',
      scope: 'shared',
    });
    await generator(appTree, { ...options, generationType: 'server' });
    const projectConfig = readProjectConfiguration(appTree, 'shared-data-test');
    expect(projectConfig.targets['codegen']).toBeDefined();

    expect(projectConfig.targets['codegen']).toMatchInlineSnapshot(`
      {
        "configurations": {
          "default": {},
          "watch": {
            "command": "yarn graphql-codegen --config libs/shared/data/test/gqlCodegen.ts --watch",
          },
        },
        "executor": "nx:run-commands",
        "options": {
          "command": "yarn graphql-codegen --config libs/shared/data/test/gqlCodegen.ts",
        },
      }
    `);
  });
});
