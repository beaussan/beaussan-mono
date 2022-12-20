import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { Tree, readProjectConfiguration } from '@nrwl/devkit';

import generator from './generator';
import { TsLibraryGeneratorSchema } from './schema';
import { ValidationError } from 'zod-validation-error';

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

  it('should run fail when there is an unknown type', async () => {
    await expect(
      generator(appTree, {
        ...options,
        type: 'Some tag that is not valid' as any,
      })
    ).rejects.toThrowError(ValidationError);
    expect(() =>
      readProjectConfiguration(appTree, 'shared-utils-test')
    ).toThrowError();
  });

  it('should run fail when there is an unknown scope', async () => {
    await expect(
      generator(appTree, {
        ...options,
        scope: 'Some tag that is not valid' as any,
      })
    ).rejects.toThrowError(ValidationError);
    expect(() =>
      readProjectConfiguration(appTree, 'shared-utils-test')
    ).toThrowError();
  });

  it('should add the json lint target successfully', async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, 'shared-utils-test');
    expect(config.targets.lint.options.lintFilePatterns).toContainEqual(
      expect.stringContaining('libs/shared/utils/test/**/*.json')
    );
  });
});
