import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  getWorkspaceLayout,
  names,
  offsetFromRoot,
  Tree,
} from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/js';
import { TsLibraryGeneratorSchema } from './schema';
import {
  getDirectoryFromScopeAndType,
  getTagStringFromScopeAndType,
} from '../../utils/tags';
import { Linter } from '@nrwl/linter';

interface NormalizedSchema extends TsLibraryGeneratorSchema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  parsedTags: string[];
}

function populateOptions(
  options: TsLibraryGeneratorSchema
): TsLibraryGeneratorSchema {
  return {
    ...options,
    tags: getTagStringFromScopeAndType(options.scope, options.type),
    directory: getDirectoryFromScopeAndType(options.scope, options.type),
  };
}
function normalizeOptions(
  tree: Tree,
  options: TsLibraryGeneratorSchema
): NormalizedSchema {
  const name = names(options.name).fileName;
  const projectDirectory = options.directory
    ? `${names(options.directory).fileName}/${name}`
    : name;
  const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
  const projectRoot = `${getWorkspaceLayout(tree).libsDir}/${projectDirectory}`;
  const parsedTags = options.tags
    ? options.tags.split(',').map((s) => s.trim())
    : [];

  return {
    ...options,
    projectName,
    projectRoot,
    projectDirectory,
    parsedTags,
  };
}

export default async function (tree: Tree, options: TsLibraryGeneratorSchema) {
  const normalizedOptions = normalizeOptions(tree, populateOptions(options));
  await libraryGenerator(tree, {
    name: normalizedOptions.name,
    tags: normalizedOptions.tags,
    directory: normalizedOptions.directory,
    testEnvironment: normalizedOptions.testEnvironment,
    publishable: normalizedOptions.publishable,
    linter: Linter.EsLint,
    unitTestRunner: 'jest',
    config: 'project',
    compiler: 'tsc',
    buildable: true,
    skipFormat: false,
    skipTsConfig: false,
    strict: true,
    pascalCaseFiles: true,
  });
  await formatFiles(tree);
}