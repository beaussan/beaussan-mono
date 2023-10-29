import {
  KnipConfigPlugin,
  withLibraryMapper,
  withMapOverExecutorByName,
  withMapOverTargetsByName,
} from './KnipPluginApi';
import { readJsonFile } from '@nx/devkit';
import * as path from 'path';
import { tryReadJsonFile } from './utils';

export const withGraphqlCodegen = () =>
  withMapOverTargetsByName({
    targetName: 'codegen',
    mapperFn: ({ executor, project, targetContent }) => {
      const rawCommand = targetContent.options?.command;
      if (!rawCommand && typeof rawCommand !== 'string') {
        return undefined;
      }
      if (!rawCommand.includes('graphql-codegen')) {
        return undefined;
      }
      const configFile = rawCommand.match(/--config\s(\S+)/);
      const match = configFile[1];
      if (!match) {
        return undefined;
      }
      return {
        'graphql-codegen': {
          config: [match],
        },
      };
    },
  });

export const withCustomNxPlugins = ({
  pluginNames,
}: {
  pluginNames: string[];
}) =>
  withLibraryMapper({
    filter: (project) => pluginNames.includes(project.name),
    mapperFn: ({ project, rootFolder }) => {
      const sourceRoot = project.data.sourceRoot;
      const entry = [`${sourceRoot}/index.ts`];

      const maybeExecutorsJson = tryReadJsonFile(
        path.join(rootFolder, 'executors.json')
      );
      if (maybeExecutorsJson) {
        entry.push(
          ...Object.values(maybeExecutorsJson?.executors)
            .map((it: any) => it?.implementation)
            .filter((value) => !!value)
            .map((value) => value + '.ts')
            .map((value) => path.resolve(rootFolder, value))
            .map((value) => path.relative(process.cwd(), value))
        );
      }

      const maybeGeneratorsJson = tryReadJsonFile(
        path.join(rootFolder, 'generators.json')
      );
      if (maybeGeneratorsJson) {
        entry.push(
          ...Object.values(maybeGeneratorsJson?.generators)
            .map((it: any) => it?.factory)
            .filter((value) => !!value)
            .map((value) => value + '.ts')
            .map((value) => path.resolve(rootFolder, value))
            .map((value) => path.relative(process.cwd(), value))
        );
      }

      return {
        entry: entry,
      };
    },
  });

export const withEsbuildApps = () =>
  withMapOverExecutorByName({
    executorName: '@nx/esbuild:esbuild',
    mapperFn: ({ targetContent, project }) => {
      if (project.type !== 'app') {
        return undefined;
      }
      const main = targetContent.options?.main;
      if (!main) {
        return undefined;
      }
      return {
        entry: [main],
      };
    },
  });

export const withNextJs = () =>
  withMapOverExecutorByName({
    executorName: '@nx/next:build',
    mapperFn: ({ rootFolder, project }) => {
      if (project.type !== 'app') {
        return undefined;
      }
      return {
        next: {
          entry: [
            `${rootFolder}/next.config.{js,ts,cjs,mjs}`,
            `${rootFolder}/index.d.ts`,
            `${rootFolder}/next-env.d.ts`,
            `${rootFolder}/middleware.{js,ts}`,
            `${rootFolder}/app/**/route.{js,ts}`,
            `${rootFolder}/app/**/{error,layout,loading,not-found,page,template}.{js,jsx,ts,tsx}`,
            `${rootFolder}/instrumentation.{js,ts}`,
            `${rootFolder}/app/{manifest,sitemap,robots}.{js,ts}`,
            `${rootFolder}/app/**/{icon,apple-icon}.{js,ts,tsx}`,
            `${rootFolder}/app/**/{opengraph,twitter}-image.{js,ts,tsx}`,
            `${rootFolder}/pages/**/*.{js,jsx,ts,tsx}`,
            `${rootFolder}/src/middleware.{js,ts}`,
            `${rootFolder}/src/app/**/route.{js,ts}`,
            `${rootFolder}/src/app/**/{error,layout,loading,not-found,page,template}.{js,jsx,ts,tsx}`,
            `${rootFolder}/src/instrumentation.{js,ts}`,
            `${rootFolder}/src/app/{manifest,sitemap,robots}.{js,ts}`,
            `${rootFolder}/src/app/**/{icon,apple-icon}.{js,ts,tsx}`,
            `${rootFolder}/src/app/**/{opengraph,twitter}-image.{js,ts,tsx}`,
            `${rootFolder}/src/pages/**/*.{js,jsx,ts,tsx}`,
          ],
        },
      };
    },
  });

export const withCypress = () =>
  withMapOverExecutorByName({
    executorName: '@nx/cypress:cypress',
    mapperFn: ({ targetContent, project }) => {
      const config = targetContent.options.cypressConfig;
      return {
        cypress: {
          config: [config],
          entry: [`${project.data.sourceRoot}/**/*.{js,ts,mjs,cjs}`],
        },
      };
    },
  });
export const withNxTsPaths =
  (path = 'tsconfig.base.json'): KnipConfigPlugin =>
  ({}) => {
    const tsConfig = readJsonFile(path);

    return {
      paths: tsConfig.compilerOptions.paths,
    };
  };

export const withNxStandards =
  (): KnipConfigPlugin =>
  ({}) => {
    return {
      project: ['**/*.{ts,js,tsx,jsx}'],
      eslint: {
        config: ['**/.eslintrc.{json,js}', '.eslintrc.{json,js}'],
      },
      vite: {
        config: ['**/vite.config.{ts,js}'],
      },
      tailwind: {
        config: ['**/tailwind.config.{js,cjs,mjs,ts}'],
      },
      postcss: {
        config: ['**/postcss.config.js', '**/postcss.config.json'],
      },
      babel: {
        config: [
          '**/babel.config.json',
          '**/babel.config.js',
          '**/.babelrc.json',
          '**/.babelrc.js',
          '**/.babelrc',
        ],
      },
      storybook: {
        config: ['**/.storybook/{main,test-runner}.{js,ts}'],
        entry: [
          '**/.storybook/{manager,preview}.{js,jsx,ts,tsx}',
          '**/*.stories.{js,jsx,ts,tsx}',
        ],
        project: [
          '.storybook/**/*.{js,jsx,ts,tsx}',
          '**/.storybook/**/*.{js,jsx,ts,tsx}',
        ],
      },
    };
  };
