import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import generator from './generator';
import { LibraryGeneratorSchema } from './schema';
import { ValidationError } from 'zod-validation-error';
import storybookGenerator from '../storybook/generator';

describe('library generator', () => {
  let appTree: Tree;
  const options: LibraryGeneratorSchema = {
    name: 'test',
    type: 'ui',
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
    const config = readProjectConfiguration(appTree, 'shared-ui-test');
    expect(config).toBeDefined();
  });

  it.skip('should add the json lint target successfully', async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, 'shared-ui-test');
    expect(config.targets.lint.options.lintFilePatterns).toContainEqual(
      expect.stringContaining('libs/shared/ui/test/**/*.json')
    );
  });

  it('should generate a test-setup file', async () => {
    await generator(appTree, options);
    expect(appTree.listChanges().map((item) => item.path)).toContain(
      'libs/shared/ui/test/src/test-setup.ts'
    );
  });

  it('should generate a test-setup file for vitest', async () => {
    await generator(appTree, options);
    const vitestTestSetup = appTree
      .read('libs/shared/ui/test/src/test-setup.ts')
      .toString();

    expect(vitestTestSetup).toEqual(
      expect.stringContaining('expect.extend(matchers);')
    );
    expect(vitestTestSetup).toEqual(expect.stringContaining('vitest'));
    expect(vitestTestSetup).toEqual(
      expect.stringContaining('@testing-library')
    );
  });

  it.skip('should add the tsconfig changes required for setup files', async () => {
    await generator(appTree, options);
    const tsconfig = appTree
      .read('libs/shared/ui/test/vite.config.ts')
      .toString();

    expect(tsconfig).toContain('setupFiles');
    expect(tsconfig).toContain('src/test-setup.ts');
  });

  it('should run fail when there is an unknown type', async () => {
    await expect(
      generator(appTree, {
        ...options,
        type: 'Some tag that is not valid' as any,
      })
    ).rejects.toThrowError(ValidationError);
    expect(() =>
      readProjectConfiguration(appTree, 'shared-ui-test')
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
      readProjectConfiguration(appTree, 'shared-ui-test')
    ).toThrowError();
  });
});
