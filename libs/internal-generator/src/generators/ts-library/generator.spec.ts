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
    appTree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, 'shared-util-test');
    expect(config).toBeDefined();
  });
});
