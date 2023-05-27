import {
  formatFiles,
  generateFiles,
  getProjects,
  offsetFromRoot,
  Tree,
  updateProjectConfiguration,
} from '@nx/devkit';
import * as path from 'path';
import { SetupGraphqlCodegenGeneratorSchema } from './schema';

type NormalizedSchema = ReturnType<typeof normalizeOptions>;

function normalizeOptions(
  tree: Tree,
  options: SetupGraphqlCodegenGeneratorSchema
) {
  const project = getProjects(tree).get(options.project);
  if (!project) {
    throw new Error(
      `Cannot find the ${options.project} project. Please double check the project name.`
    );
  }

  const { sourceRoot: projectSourceRoot, projectType } = project;

  return {
    ...options,
    projectSourceRoot,
    projectType,
    projectRoot: project.root,
    targetDirectory: path.join(projectSourceRoot, 'lib'),
  };
}

function addFiles(tree: Tree, options: NormalizedSchema) {
  const templateOptions = {
    ...options,
    offsetFromRoot: offsetFromRoot(options.projectRoot),
    template: '',
  };
  generateFiles(
    tree,
    path.join(__dirname, 'files', options.generationType),
    options.projectRoot,
    templateOptions
  );
}

function addCodegenTarget(tree: Tree, options: NormalizedSchema) {
  const projectConfig = getProjects(tree).get(options.project);
  if (!projectConfig) {
    throw new Error(
      `Cannot find the ${options.project} project. Please double check the project name.`
    );
  }

  const newProject = {
    ...projectConfig,
    targets: {
      ...projectConfig.targets,
      codegen: {
        executor: 'nx:run-commands',
        options: {
          command: `yarn graphql-codegen --config ${options.projectRoot}/gqlCodegen.ts`,
        },
        configurations: {
          default: {},
          watch: {
            command: `yarn graphql-codegen --config ${options.projectRoot}/gqlCodegen.ts --watch`,
          },
        },
      },
    },
  };

  updateProjectConfiguration(tree, options.project, newProject);
}

export default async function (
  tree: Tree,
  options: SetupGraphqlCodegenGeneratorSchema
) {
  const normalizedOptions = normalizeOptions(tree, options);
  addFiles(tree, normalizedOptions);
  addCodegenTarget(tree, normalizedOptions);
  await formatFiles(tree);
}
