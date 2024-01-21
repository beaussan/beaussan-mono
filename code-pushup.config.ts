import defaultEslintPlugin from '@code-pushup/eslint-plugin';
import type { CoreConfig } from '@code-pushup/models';

const eslintPlugin = defaultEslintPlugin.eslintPlugin;

const eslintConfigFromNxProjects =
  defaultEslintPlugin.eslintConfigFromNxProjects;

const config: CoreConfig = {
  persist: {
    outputDir: '.code-pushup',
    filename: 'report',
    format: ['json', 'md'],
  },

// See setup guide https://github.com/code-pushup/cli/wiki/Code-PushUp-integration-guide-for-Nx-monorepos
  plugins: [await eslintPlugin(await eslintConfigFromNxProjects())],

  categories: [
    {
      slug: 'bug-prevention',
      title: 'Bug prevention',
      refs: [{ type: 'group', plugin: 'eslint', slug: 'problems', weight: 1 }],
    },
    {
      slug: 'code-style',
      title: 'Code style',
      refs: [
        { type: 'group', plugin: 'eslint', slug: 'suggestions', weight: 1 },
      ],
    },
  ],
};

export default config;
