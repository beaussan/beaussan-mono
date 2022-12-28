import { rootMain } from '../../../../.storybook/main';
import type { StorybookConfig, Options } from '@storybook/core-common';
const config: StorybookConfig = {
  staticDirs: ['../../../../tools/msw'],
  ...rootMain,
  core: { ...rootMain.core, builder: '@storybook/builder-vite' },
  stories: [
    ...rootMain.stories,
    '../../**/*.stories.mdx',
    '../../**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...(rootMain.addons || [])],
};
module.exports = config;
