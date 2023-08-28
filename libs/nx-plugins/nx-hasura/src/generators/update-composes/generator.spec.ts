import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { updateComposesGenerator } from './generator';
import { UpdateComposesGeneratorSchema } from './schema';

describe('update-composes generator', () => {
  let tree: Tree;
  const options: UpdateComposesGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await updateComposesGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
