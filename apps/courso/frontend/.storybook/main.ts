import type { StorybookConfig } from '@storybook/nextjs';

console.log(process.env);

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  staticDirs: ['../../../../tools/msw'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  env: (config) => ({
    ...config,
    ...(process.env as Record<string, string>),
  }),
  webpackFinal: (config) => {
    if (!config.resolve) {
      config.resolve = {};
    }

    // Needed for nodemailer...
    config.resolve.fallback = {
      ...config.resolve.fallback,
      tls: false,
      net: false,
      dns: false,
      child_process: false,
    };

    return config;
  },
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
