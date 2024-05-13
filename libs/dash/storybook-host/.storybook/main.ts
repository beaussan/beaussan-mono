// eslint-disable-next-line @nx/enforce-module-boundaries
import { rootMain } from '../../../../.storybook/main';
import type { StorybookConfig } from '@storybook/react-vite';
import type { StoriesEntry } from '@storybook/types';

import * as fs from 'fs';
import * as path from 'path';

function getStoriesEntries(): StoriesEntry[] {
  const entries: StoriesEntry[] = [];

  // Crawl back up a level
  const parentDir = path.resolve(__dirname, '..', '..');

  // Folders to search for
  const folderNames = ['data', 'ui', 'utils', 'feature'];

  // Iterate over each folder
  for (const folderName of folderNames) {
    const folderPath = path.join(parentDir, folderName);

    console.log('path: ', folderPath);

    // Check if the folder exists
    if (fs.existsSync(folderPath) && fs.statSync(folderPath).isDirectory()) {
      // Get all subfolders within the folder
      const subfolders = fs.readdirSync(folderPath).filter((file) => {
        const filePath = path.join(folderPath, file);
        return fs.statSync(filePath).isDirectory();
      });

      // Create a StoriesEntry for each subfolder
      for (const subfolder of subfolders) {
        const prefix = `${folderName}/${subfolder}`;

        entries.push({
          // 👇 Sets the directory containing your stories
          directory: '../../' + folderName + '/' + subfolder,
          // 👇 Storybook will load all files that match this glob
          files: '**/*.stories.@(js|jsx|ts|tsx|mdx)',
          // 👇 Used when generating automatic titles for your stories
          titlePrefix: prefix,
        });
      }
    }
  }

  return entries;
}

console.log(getStoriesEntries());

const config: StorybookConfig = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx|mdx)', ...getStoriesEntries()],
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
