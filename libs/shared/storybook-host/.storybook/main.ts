import { rootMain } from '../../../../.storybook/main';
import type { StorybookConfig, Options } from '@storybook/core-common';
import type { UserConfig } from 'vite';
const config: StorybookConfig & {
  viteFinal: (
    config: UserConfig,
    ctx: { configType: 'PRODUCTION' | 'DEVELOPPEMENT' }
  ) => PromiseLike<UserConfig>;
} = {
  staticDirs: ['../../../../tools/msw'],
  ...rootMain,
  core: { ...rootMain.core, builder: '@storybook/builder-vite' },
  stories: [
    ...rootMain.stories,
    '../../**/*.stories.mdx',
    '../../**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...(rootMain.addons || [])],
  async viteFinal(config, { configType }) {
    // Needed only for development mode: `npm run storybook`
    config.optimizeDeps =
      configType === 'PRODUCTION'
        ? config.optimizeDeps
        : {
            ...(config.optimizeDeps || {}),
            include: [
              ...(config?.optimizeDeps?.include || []),
              // Fix: `@storybook/addon-interactions` exports is not defined or `jest-mock` does not provide an export named 'fn'
              'jest-mock',
              // Optional, but prevents error flashing in the Storybook component preview iframe:
              // Fix: failed to fetch dynamically import module, avoid cache miss for dependencies on the first load
              '@storybook/components',
              '@storybook/store',
              // Add all addons that imported in the `preview.js` or `preview.ts` file and used in exported constants
              '@storybook/addon-links',
              '@storybook/theming',
            ],
          };
    // ...
    return config;
  },
};
module.exports = config;
