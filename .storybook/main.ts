import type { StorybookConfig } from '@storybook/core-common';
export const rootMain: StorybookConfig = {
  stories: [],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-a11y']
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return config;
  // },
};

export const framework = '@storybook/react';
export const framework = {
  name: '@storybook/react-webpack5',
  options: {}
};