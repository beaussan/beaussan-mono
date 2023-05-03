import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration, readJson } from '@nx/devkit';

import storybookGenerator from './generator';
import reactLibGenerator from '../library/generator';
import { StorybookGeneratorSchema } from './schema';

const projectName = 'shared-storybook-host';

describe('storybook generator', () => {
  let appTree: Tree;
  const options: StorybookGeneratorSchema = { scope: 'shared' };

  beforeEach(() => {
    appTree = createTreeWithEmptyWorkspace({ layout: 'apps-libs' });
  });

  it('should automaticaly add ui & features into storybook deps', async () => {
    await reactLibGenerator(appTree, {
      name: 'lib1',
      scope: 'shared',
      type: 'utils',
    });
    await reactLibGenerator(appTree, {
      name: 'lib2',
      scope: 'shared',
      type: 'data',
    });
    await reactLibGenerator(appTree, {
      name: 'lib3',
      scope: 'shared',
      type: 'ui',
    });
    await reactLibGenerator(appTree, {
      name: 'lib5',
      scope: 'shared',
      type: 'ui',
    });
    await reactLibGenerator(appTree, {
      name: 'lib9',
      scope: 'dash',
      type: 'ui',
    });
    await reactLibGenerator(appTree, {
      name: 'lib4',
      scope: 'shared',
      type: 'feature',
    });
    await storybookGenerator(appTree, options);
    const config = readProjectConfiguration(appTree, projectName);
    expect(config.implicitDependencies).toEqual(
      expect.arrayContaining([
        'shared-feature-lib4',
        'shared-ui-lib3',
        'shared-ui-lib5',
      ])
    );
  });

  it('should run successfully', async () => {
    await storybookGenerator(appTree, options);
    const config = readProjectConfiguration(appTree, projectName);
    expect(config).toBeDefined();
  });

  it('should contains storybook & build-storybook targets', async () => {
    await storybookGenerator(appTree, options);
    const config = readProjectConfiguration(appTree, projectName);

    expect(config.targets.storybook).toBeDefined();
    expect(config.targets.storybook.executor).toEqual(
      '@nx/storybook:storybook'
    );

    expect(config.targets['build-storybook']).toBeDefined();
    expect(config.targets['build-storybook'].executor).toEqual(
      '@nx/storybook:build'
    );
  });

  it('should contains custom test-storybook runner', async () => {
    await storybookGenerator(appTree, options);
    const config = readProjectConfiguration(appTree, projectName);

    expect(config.targets.storybook).toBeDefined();
    expect(config.targets.storybook.executor).toEqual(
      '@nx/storybook:storybook'
    );

    expect(config.targets['test-storybook']).toBeDefined();
    expect(config.targets['test-storybook'].options).toBeDefined();
    expect(config.targets['test-storybook'].options.command).toEqual(
      'test-storybook -c libs/shared/storybook-host/.storybook --url=http://localhost:4400'
    );
    expect(config.targets['test-storybook'].configurations).toBeDefined();
    expect(config.targets['test-storybook'].configurations.ci).toBeDefined();
    expect(config.targets['test-storybook'].configurations.ci.command).toEqual(
      "start-server-and-test 'nx run shared-storybook-host:storybook' 4400 'test-storybook -c libs/shared/storybook-host/.storybook --url=http://localhost:4400'"
    );
  });

  it('should generate a tailwind.css file', async () => {
    await storybookGenerator(appTree, options);

    const tailwindCss = appTree
      .read('libs/shared/storybook-host/.storybook/tailwind.css')
      .toString();
    expect(tailwindCss).toBeDefined();
    expect(tailwindCss).toEqual(
      expect.stringContaining('@tailwind components;')
    );
  });

  it('should generate a postcss.config file', async () => {
    await storybookGenerator(appTree, options);

    const postcssConfig = appTree
      .read('libs/shared/storybook-host/postcss.config.js')
      .toString();
    expect(postcssConfig).toBeDefined();
    expect(postcssConfig).toEqual(expect.stringContaining('tailwindcss'));
  });

  it('should generate a preview.ts file', async () => {
    await storybookGenerator(appTree, options);

    const previewFile = appTree
      .read('libs/shared/storybook-host/.storybook/preview.ts')
      .toString();
    expect(previewFile).toBeDefined();

    expect(previewFile).toEqual(expect.stringContaining('msw-storybook-addon'));
    expect(previewFile).toEqual(
      expect.stringContaining("import './tailwind.css';")
    );
  });

  it('should generate a test-runner.ts file', async () => {
    await storybookGenerator(appTree, options);

    const testRunnerFile = appTree
      .read('libs/shared/storybook-host/.storybook/test-runner.ts')
      .toString();
    expect(testRunnerFile).toBeDefined();
    expect(testRunnerFile).toEqual(expect.stringContaining('axe-playwright'));
  });

  describe('.storybook/main.ts file', () => {
    let storybookFile: string;
    beforeEach(async () => {
      await storybookGenerator(appTree, options);

      storybookFile = appTree
        .read('libs/shared/storybook-host/.storybook/main.ts')
        .toString();
    });

    it('should have msw in static dirs', async () => {
      expect(storybookFile).toEqual(
        expect.stringContaining("'../../../../tools/msw'")
      );
    });

    it('should remove the old src targets for stories', () => {
      expect(storybookFile).not.toEqual(
        expect.stringContaining('../src/lib/**/*.stories.mdx')
      );
      expect(storybookFile).not.toEqual(
        expect.stringContaining('../src/lib/**/*.stories.@(js|jsx|ts|tsx)')
      );
    });

    it('should have the list of stories for the whole parent folder', async () => {
      expect(storybookFile).toEqual(
        expect.stringContaining("'../../**/*.stories.mdx'")
      );
      expect(storybookFile).toEqual(
        expect.stringContaining("'../../**/*.stories.@(js|jsx|ts|tsx)'")
      );
    });
  });

  describe('.storybook/tsconfig.json file', () => {
    let tsconfigStorybookFile: { include: string[] };
    beforeEach(async () => {
      await storybookGenerator(appTree, options);

      tsconfigStorybookFile = readJson(
        appTree,
        'libs/shared/storybook-host/.storybook/tsconfig.json'
      );
    });

    it('should includes tsx in the files to compile', async () => {
      expect(tsconfigStorybookFile.include).toContain('*.tsx');
    });

    for (const ext of ['ts', 'js', 'jsx', 'tsx', 'mdx']) {
      it(`should not have the old ${ext} target in includes`, () => {
        expect(tsconfigStorybookFile.include).not.toContain(
          `../src/**/*.stories.${ext}`
        );
      });
      it(`should include the new ${ext} target in includes`, () => {
        expect(tsconfigStorybookFile.include).toContain(
          `../../**/*.stories.${ext}`
        );
      });
    }
  });
});
