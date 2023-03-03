import { rootMain } from '../../../../.storybook/main';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  staticDirs: ['../../../../tools/msw'],
  ...rootMain,
  stories: ['../../**/*.stories.mdx', '../../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    ...(rootMain.addons || []),
    '@nrwl/react/plugins/storybook',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'libs/shared/storybook-host/vite.config.ts',
      },
    },
  },
};
export default config;
