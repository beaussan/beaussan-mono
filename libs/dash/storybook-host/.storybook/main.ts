// eslint-disable-next-line @nx/enforce-module-boundaries
import { rootMain } from '../../../../.storybook/main';
import type { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
  stories: ['../../**/*.stories.mdx', '../../**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../../../../tools/msw'],
  addons: ['@storybook/addon-essentials', ...(rootMain.addons || [])],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'libs/dash/storybook-host/vite.config.ts',
      },
    },
  },
};
export default config;
