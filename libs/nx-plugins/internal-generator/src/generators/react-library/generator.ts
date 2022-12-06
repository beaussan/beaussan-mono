import {
  formatFiles,
  generateFiles,
  getWorkspaceLayout,
  names,
  offsetFromRoot,
  Tree,
} from '@nrwl/devkit';
import * as path from 'path';
import { ReactLibraryGeneratorSchema } from './schema';
import { libraryGenerator } from '@nrwl/react/src/generators/library/library';
import { Linter } from '@nrwl/linter';
import * as ts from 'typescript';
import { appendJestConfigOption } from '../../utils/ast';
import {
  getDirectoryFromScopeAndType,
  getTagStringFromScopeAndType,
} from '../../utils/tags';

interface NormalizedSchema extends ReactLibraryGeneratorSchema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  parsedTags: string[];
}

function populateOptions(
  options: ReactLibraryGeneratorSchema
): ReactLibraryGeneratorSchema {
  return {
    ...options,
    tags: getTagStringFromScopeAndType(options.scope, options.type),
    directory: getDirectoryFromScopeAndType(options.scope, options.type),
  };
}

function normalizeOptions(
  tree: Tree,
  options: ReactLibraryGeneratorSchema
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

function modifyJestConfig(tree: Tree, options: NormalizedSchema) {
  const jestPath = path.join(options.projectRoot, 'jest.config.ts');

  appendJestConfigOption(
    tree,
    jestPath,
    ts.factory.createPropertyAssignment(
      ts.factory.createIdentifier('setupFilesAfterEnv'),
      ts.factory.createArrayLiteralExpression([
        ts.factory.createStringLiteral('<rootDir>/src/test-setup.ts'),
      ])
    )
  );
}

export default async function (
  tree: Tree,
  options: ReactLibraryGeneratorSchema
) {
  const normalizedOptions = normalizeOptions(tree, populateOptions(options));

  await libraryGenerator(tree, {
    name: normalizedOptions.name,
    style: 'css',
    unitTestRunner: 'jest',
    skipTsConfig: false,
    skipFormat: false,
    linter: Linter.EsLint,
    tags: normalizedOptions.tags,
    directory: normalizedOptions.directory,
    compiler: 'babel',
    pascalCaseFiles: true,
    strict: true,
    buildable: true,
    bundler: 'vite',
  });
  addFiles(tree, normalizedOptions);
  modifyJestConfig(tree, normalizedOptions);
  await formatFiles(tree);
}
