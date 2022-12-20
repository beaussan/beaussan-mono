import {
  readProjectConfiguration,
  updateProjectConfiguration,
  Tree,
} from '@nrwl/devkit';
import { FullOptions } from './normalizedOptions';

export function addEslintJsonCheck(tree: Tree, options: FullOptions) {
  const projectDef = readProjectConfiguration(tree, options.projectName);
  if (!projectDef.targets.lint) {
    throw new Error('No lint target found');
  }

  projectDef.targets.lint.options.lintFilePatterns.push(
    `${options.projectRoot}/**/*.json`
  );

  updateProjectConfiguration(tree, options.projectName, projectDef);
}
