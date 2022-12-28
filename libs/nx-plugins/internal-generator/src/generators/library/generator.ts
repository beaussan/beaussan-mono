import {
  formatFiles,
  generateFiles,
  names,
  offsetFromRoot,
  Tree,
} from '@nrwl/devkit';
import * as path from 'path';
import { LibraryGeneratorSchema } from './schema';
import { libraryGenerator as reactLibraryGenerator } from '@nrwl/react';
import { Linter } from '@nrwl/linter';
import * as ts from 'typescript';
import { appendJestConfigOption } from '../../utils/ast';
import { addEslintJsonCheck } from '../../utils/addEslintJsonCheck';
import {
  FullOptions,
  NormalizedOptions,
  normalizeOptions,
} from '../../utils/normalizedOptions';
import { addProjectToStorybookDeps } from '../../utils/addProjectToStorybookDeps';
import { libraryGenerator } from '@nrwl/js';

function addFiles(
  tree: Tree,
  options: FullOptions,
  extra: { sourceSet: string }
) {
  const templateOptions = {
    ...options,
    ...names(options.name),
    offsetFromRoot: offsetFromRoot(options.projectRoot),
    template: '',
  };
  generateFiles(
    tree,
    path.join(__dirname, 'files', extra.sourceSet),
    options.projectRoot,
    templateOptions
  );
}

function modifyJestConfig(tree: Tree, options: FullOptions) {
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

async function reactLib(tree: Tree, option: FullOptions) {
  await reactLibraryGenerator(tree, {
    name: option.name,
    style: 'css',
    unitTestRunner: 'jest',
    skipTsConfig: false,
    skipFormat: false,
    linter: Linter.EsLint,
    tags: option.tags,
    directory: option.directory,
    bundler: 'vite',
    pascalCaseFiles: true,
    strict: true,
  });
  addFiles(tree, option, { sourceSet: 'jest-test-setup' });
  modifyJestConfig(tree, option);
}

async function tsLib(tree: Tree, options: FullOptions) {
  await libraryGenerator(tree, {
    name: options.name,
    tags: options.tags,
    directory: options.directory,
    bundler: 'vite',
    linter: Linter.EsLint,
    unitTestRunner: 'jest',
    config: 'project',
    skipFormat: false,
    skipTsConfig: false,
    strict: true,
    pascalCaseFiles: true,
  });
}

export default async function (tree: Tree, options: LibraryGeneratorSchema) {
  const normalizedOptions = normalizeOptions(tree, options);

  switch (normalizedOptions.libGenerator) {
    case 'react':
      await reactLib(tree, normalizedOptions);
      break;
    case 'ts':
      await tsLib(tree, normalizedOptions);
      break;
    default:
      throw new Error(
        `Generator ${normalizedOptions.libGenerator} not supported.`
      );
  }

  addEslintJsonCheck(tree, normalizedOptions);
  addProjectToStorybookDeps(tree, normalizedOptions);
  await formatFiles(tree);
}
