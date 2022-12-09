import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { Tree, readProjectConfiguration } from '@nrwl/devkit';

import generator from './generator';
import { ReactLibraryGeneratorSchema } from './schema';

describe('react-library generator', () => {
  let appTree: Tree;
  const options: ReactLibraryGeneratorSchema = {
    name: 'test',
    type: 'utils',
    scope: 'shared',
  };

  beforeEach(() => {
    appTree = createTreeWithEmptyWorkspace({ layout: 'apps-libs' });
  });

  it('should run successfully', async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, 'shared-utils-test');
    expect(config).toBeDefined();
  });

  it('should generate a test-setup file', async () => {
    await generator(appTree, options);
    expect(appTree.listChanges().map((item) => item.path)).toContain(
      'libs/shared/utils/test/src/test-setup.ts'
    );
  });

  it('should add the tsconfig changes required for setup files', async () => {
    await generator(appTree, options);
    const tsconfig = appTree
      .read('libs/shared/utils/test/jest.config.ts')
      .toString();

    expect(tsconfig).toContain('setupFilesAfterEnv');
  });
});
