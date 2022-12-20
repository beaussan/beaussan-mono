import {
  formatFiles,
  generateFiles,
  names,
  offsetFromRoot,
  Tree,
} from '@nrwl/devkit';
import * as path from 'path';
import { ReactLibraryGeneratorSchema } from './schema';
import { libraryGenerator } from '@nrwl/react';
import { Linter } from '@nrwl/linter';
import * as ts from 'typescript';
import { appendJestConfigOption } from '../../utils/ast';
import { addEslintJsonCheck } from '../../utils/addEslintJsonCheck';
import { FullOptions, normalizeOptions } from '../../utils/normalizedOptions';

function addFiles(tree: Tree, options: FullOptions) {
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

export default async function (
  tree: Tree,
  options: ReactLibraryGeneratorSchema
) {
  const normalizedOptions = normalizeOptions(tree, options);

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
  });
  addFiles(tree, normalizedOptions);
  modifyJestConfig(tree, normalizedOptions);
  addEslintJsonCheck(tree, normalizedOptions);
  await formatFiles(tree);
}
