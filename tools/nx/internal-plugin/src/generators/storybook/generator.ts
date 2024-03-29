import {
  formatFiles,
  readProjectConfiguration,
  Tree,
  updateProjectConfiguration,
  readJson,
  writeJson,
  offsetFromRoot,
  names,
  generateFiles,
  getProjects,
} from '@nx/devkit';
import { setupTailwindGenerator } from '@nx/react';
import { configurationGenerator as storybookConfigurationGenerator } from '@nx/storybook';
import { StorybookGeneratorSchema } from './schema';
import {
  getFoldersFromDirectoryAndName,
  parseTags,
  safeGetScope,
} from '../../utils/normalizedOptions';
import {
  getDirectoryFromScopeAndType,
  getTagStringFromScopeAndType,
} from '../../utils/tags';
import { Linter } from '@nx/eslint';
import * as path from 'path';
import { tweakMainTsStorybookConfig } from './transforms/storybook';
import { reactLib, sharedModifications } from '../library/generator';

export interface NormalizedSchema extends StorybookGeneratorSchema {
  tags: string;
  directory: string;
  name: string;
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  parsedTags: string[];
}

function normalizeOptions(
  tree: Tree,
  options: StorybookGeneratorSchema
): NormalizedSchema {
  const scope = safeGetScope(options.scope);
  const type = 'storybook';
  const name = 'storybook-host';

  const tags = getTagStringFromScopeAndType(scope, type);
  const parsedTags = parseTags(tags);
  const directory = getDirectoryFromScopeAndType(scope, type);

  const folders = getFoldersFromDirectoryAndName(tree, {
    name,
    directory,
  });

  return {
    ...options,
    ...folders,
    name,
    tags,
    parsedTags,
    directory,
  };
}

function addFiles(tree: Tree, options: NormalizedSchema) {
  const templateOptions = {
    ...options,
    ...names(options.name),
    offsetFromRoot: offsetFromRoot(options.projectRoot),
    template: '',
  };
  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    options.projectRoot,
    templateOptions
  );
}
/*
function addFiles(tree: Tree, options: NormalizedSchema) {
  const templateOptions = {
    ...options,
    ...names(options.name),
    offsetFromRoot: offsetFromRoot(options.projectRoot),
    template: '',
  };
  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    options.projectRoot,
    templateOptions
  );
}
 */

async function addStorybookCiTestRunner(tree: Tree, options: NormalizedSchema) {
  const projectJson = await readProjectConfiguration(tree, options.projectName);

  const testTarget = projectJson.targets['test-storybook'];

  testTarget.configurations = {
    ci: {
      command: `start-server-and-test 'nx run ${options.projectName}:storybook' ${projectJson.targets.storybook.options.port} '${testTarget.options.command}'`,
    },
  };
  updateProjectConfiguration(tree, options.projectName, projectJson);
}

interface TsConfigLike {
  include: string[];
}

async function tweakStorybookTsconfig(tree: Tree, options: NormalizedSchema) {
  const pathOfTsconfig = path.join(
    options.projectRoot,
    'tsconfig.storybook.json'
  );

  const currentFile = readJson<TsConfigLike>(tree, pathOfTsconfig);

  currentFile.include = [
    ...currentFile.include.map((it) => {
      if (!it.startsWith('src/**/*.stories.')) {
        return it;
      }
      return it.replace('src/**/*.stories.', '../**/*.stories.');
    }),
    '*.tsx',
  ];

  writeJson(tree, pathOfTsconfig, currentFile);
}

async function setImplicitDependenciesFromExistingLibs(
  tree: Tree,
  options: NormalizedSchema
) {
  const projects = [...getProjects(tree).values()]
    .filter((project) => project.tags)
    .filter(
      (project) =>
        project.tags.includes(`scope:${options.scope}`) &&
        ['type:ui', 'type:feature'].includes(
          project.tags.find((tag) => tag.startsWith('type:'))
        )
    )
    .map((project) => project.name);

  const oldProjectConfig = readProjectConfiguration(tree, options.projectName);

  updateProjectConfiguration(tree, options.projectName, {
    ...oldProjectConfig,
    implicitDependencies: projects,
  });
}

export default async function (tree: Tree, options: StorybookGeneratorSchema) {
  const normalizedOptions = normalizeOptions(tree, options);
  await reactLib(
    tree,
    {
      ...normalizedOptions,
      libGenerator: 'react',
      type: 'storybook',
    },
    { bundler: 'vite' }
  );
  await sharedModifications(tree, {
    ...normalizedOptions,
    libGenerator: 'react',
    type: 'storybook',
  });
  await setupTailwindGenerator(tree, {
    project: normalizedOptions.projectName,
  });
  await storybookConfigurationGenerator(tree, {
    project: normalizedOptions.projectName,
    linter: Linter.EsLint,
    interactionTests: true,
    tsConfiguration: true,
    uiFramework: '@storybook/react-vite',
  });
  await addStorybookCiTestRunner(tree, normalizedOptions);
  await tweakMainTsStorybookConfig(tree, normalizedOptions);
  await tweakStorybookTsconfig(tree, normalizedOptions);
  await addFiles(tree, normalizedOptions);
  await setImplicitDependenciesFromExistingLibs(tree, normalizedOptions);

  await formatFiles(tree);
}
