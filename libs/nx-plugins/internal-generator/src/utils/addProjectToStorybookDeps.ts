import {
  Tree,
  readProjectConfiguration,
  updateProjectConfiguration,
} from '@nrwl/devkit';
import { FullOptions } from './normalizedOptions';
import { tagThatShouldGoIntoStorybook } from './consts';

export function addProjectToStorybookDeps(tree: Tree, options: FullOptions) {
  if (!tagThatShouldGoIntoStorybook.includes(options.type)) {
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
