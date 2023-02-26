import { StorybookConfig as WebpackStorybookConfig } from '@storybook/react-webpack5';
import { StorybookConfig as ViteStorybookConfig } from '@storybook/react-vite';

type StorybookConfig = Omit<
  WebpackStorybookConfig,
  'framework' | 'core' | 'stories'
> &
  Pick<ViteStorybookConfig, 'viteFinal'>;

export const rootMain: StorybookConfig = {
  addons: ['@storybook/addon-interactions', '@storybook/addon-a11y'],
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return config;
  // },
};
