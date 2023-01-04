import type { StorybookConfig } from '@storybook/react-webpack5';
export const rootMain: StorybookConfig = {
  stories: [],
  addons: [
    '@storybook/addon-essentials',
    // '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react-webpack5',
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return config;
  // },
};

export const framework = {
  name: '@storybook/react-webpack5',
  options: {},
};
