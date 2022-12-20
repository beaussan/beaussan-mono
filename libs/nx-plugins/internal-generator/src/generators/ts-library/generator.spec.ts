import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { Tree, readProjectConfiguration } from '@nrwl/devkit';

import generator from './generator';
import { TsLibraryGeneratorSchema } from './schema';

describe('ts-library generator', () => {
  let appTree: Tree;
  const options: TsLibraryGeneratorSchema = {
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

  it('should add the json lint target successfully', async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, 'shared-utils-test');
    expect(config.targets.lint.options.lintFilePatterns).toContainEqual(
      expect.stringContaining('libs/shared/utils/test/**/*.json')
    );
  });
});
