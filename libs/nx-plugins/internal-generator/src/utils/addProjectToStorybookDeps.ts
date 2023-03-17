import {
  Tree,
  readProjectConfiguration,
  updateProjectConfiguration,
} from '@nrwl/devkit';
import { FullOptions } from './normalizedOptions';
import { tagDefs } from '../TagConsts';

export function addProjectToStorybookDeps(tree: Tree, options: FullOptions) {
  if (
    !tagDefs.type[options.type].meta.libraryGenerator.shouldGenerateStorybook
  ) {
    return;
  }
  if (options.type === 'storybook') {
    return;
  }

  const storybookName = `${options.scope}-storybook-host`;

  try {
    const config = readProjectConfiguration(tree, storybookName);
    config.implicitDependencies = [
      ...config.implicitDependencies,
      options.projectName,
    ];
    updateProjectConfiguration(tree, storybookName, config);
  } catch (e) {
    // No storybook found
    return;
  }
}
