import {
  ProjectConfiguration,
  readProjectConfiguration,
  updateProjectConfiguration,
  Tree,
} from '@nrwl/devkit';

export function addEslintJsonCheck(
  tree: Tree,
  projectName: string,
  projectRoot: string
) {
  const projectDef = readProjectConfiguration(tree, projectName);
  if (!projectDef.targets.lint) {
    throw new Error('No lint target found');
  }

  const newDef: ProjectConfiguration = {
    ...projectDef,
    targets: {
      ...projectDef.targets,
      lint: {
        ...projectDef.targets.lint,
        options: {
          ...projectDef.targets.lint.options,
          lintFilePatterns: [
            ...projectDef.targets.lint.options.lintFilePatterns,
            `${projectRoot}/**/*.json`,
          ],
        },
      },
    },
  };

  updateProjectConfiguration(tree, projectName, newDef);
}
