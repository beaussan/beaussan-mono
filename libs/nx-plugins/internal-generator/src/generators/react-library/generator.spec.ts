import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { Tree, readProjectConfiguration } from '@nrwl/devkit';

import generator from './generator';
import { ReactLibraryGeneratorSchema } from './schema';
import { ValidationError } from 'zod-validation-error';
import storybookGenerator from '../storybook/generator';

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

  it('should add itself to the dep array of storybook if present', async () => {
    await storybookGenerator(appTree, { scope: 'shared' });
    await generator(appTree, { scope: 'shared', type: 'ui', name: 'button' });
    await generator(appTree, {
      scope: 'shared',
      type: 'feature',
      name: 'button',
    });
    await generator(appTree, { scope: 'shared', type: 'data', name: 'button' });
    await generator(appTree, {
      scope: 'shared',
      type: 'utils',
      name: 'button',
    });
    const config = readProjectConfiguration(appTree, 'shared-storybook-host');
    expect(config.implicitDependencies).toContain('shared-ui-button');
    expect(config.implicitDependencies).toContain('shared-feature-button');
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
});
