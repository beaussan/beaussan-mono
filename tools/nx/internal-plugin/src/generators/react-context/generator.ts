import {
  formatFiles,
  generateFiles,
  getProjects,
  names,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { ReactContextGeneratorSchema } from './schema';

type NormalizedSchema = ReturnType<typeof normalizeOptions>;

function normalizeOptions(tree: Tree, options: ReactContextGeneratorSchema) {
  const { className } = names(options.name);

  const project = getProjects(tree).get(options.project);
  if (!project) {
    throw new Error(
      `Cannot find the ${options.project} project. Please double check the project name.`
    );
  }

  const { sourceRoot: projectSourceRoot, projectType } = project;

  const contextName = `${className}Context`;

  return {
    ...options,
    fileName: className,
    className,
    projectSourceRoot,
    projectType,
    consumerHookName: `use${contextName}`,
    providerHookName: `use${className}Value`,
    contextName,
    targetDirectory: path.join(projectSourceRoot, 'lib'),
  };
}

function addFiles(tree: Tree, options: NormalizedSchema) {
  const templateOptions = {
    ...names(options.name),
    ...options,
    template: '',
  };
  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    options.targetDirectory,
    templateOptions
  );
}

export default async function (
  tree: Tree,
  options: ReactContextGeneratorSchema
) {
  const normalizedOptions = normalizeOptions(tree, options);
  addFiles(tree, normalizedOptions);
  await formatFiles(tree);
}
