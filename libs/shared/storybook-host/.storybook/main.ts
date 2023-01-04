import { rootMain } from '../../../../.storybook/main';
import type { StorybookConfig } from '@storybook/react-webpack5';
const config: StorybookConfig = {
  staticDirs: ['../../../../tools/msw'],
  ...rootMain,
  core: { ...rootMain.core },
  stories: [
    ...rootMain.stories,
    '../../**/*.stories.mdx',
    '../../**/*.stories.@(js|jsx|ts|tsx)',
  ],
  framework: '@storybook/react-webpack5',
  addons: [...(rootMain.addons || []), '@nrwl/react/plugins/storybook'],
  webpackFinal: async (config, options) => {
    // apply any global webpack configs that might have been specified in .storybook/main.ts
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, options);
    }
    // add your own webpack tweaks if needed
    return config;
  },
};
module.exports = config;
