import { rootMain } from '../../../../.storybook/main';
import type { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
  staticDirs: ['../../../../tools/msw'],
  ...rootMain,
  core: { ...rootMain.core },
  framework: '@storybook/react-vite',
  stories: [
    ...rootMain.stories,
    '../../**/*.stories.mdx',
    '../../**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...(rootMain.addons || [])],
};
module.exports = config;
