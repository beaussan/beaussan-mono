import { rootMain } from '../../../../.storybook/main';
import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  ...rootMain,
  stories: [
    ...rootMain.stories,
    '../../**/*.stories.mdx',
    '../../**/*.stories.@(js|jsx|ts|tsx)',
  ],

  staticDirs: ['../../../../tools/msw'],
  addons: [...(rootMain.addons || []), '@nrwl/react/plugins/storybook'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: (viteConfig, options) => {
    return mergeConfig(viteConfig, {
      plugins: [
        viteTsConfigPaths({
          root: '../../../../',
        }),
      ],
    });
  },
};

export default config;
