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
import { addEslintJsonCheck } from '../../utils/eslintUtils';
import {
  FullOptions,
  NormalizedOptions,
  normalizeOptions,
} from '../../utils/normalizedOptions';
import { addProjectToStorybookDeps } from '../../utils/addProjectToStorybookDeps';
import { libraryGenerator } from '@nrwl/js';
import { tsquery } from '@phenomnomnominal/tsquery';

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

function modifyVitestConfig(tree: Tree, options: FullOptions) {
  const vitePath = path.join(options.projectRoot, 'vite.config.ts');
  const source = tree.read(vitePath).toString();
  let ast = tsquery.ast(source);
  ast = tsquery.map(
    ast,
    'SourceFile > ExportAssignment > CallExpression  ObjectLiteralExpression > PropertyAssignment > ObjectLiteralExpression',
    (node) => {
      if (!ts.isObjectLiteralExpression(node)) {
        return node;
      }
      const identifier = node.parent.getChildAt(0);
      if (!ts.isIdentifier(identifier)) {
        return node;
      }

      if (identifier.text !== 'test') {
        return node;
      }

      return ts.factory.updateObjectLiteralExpression(node, [
        ...node.properties,
        ts.factory.createPropertyAssignment(
          ts.factory.createIdentifier('setupFiles'),
          ts.factory.createStringLiteral('./src/test-setup.ts.js', true)
        ),
      ]);
    }
  );
  const result = ts.createPrinter().printFile(ast);

  tree.write(vitePath, result);
}

export async function reactLib(
  tree: Tree,
  option: FullOptions,
  { bundler = 'vite' }: { bundler: 'vite' | 'rollup' }
) {
  await reactLibraryGenerator(tree, {
    name: option.name,
    style: 'css',
    unitTestRunner: bundler === 'vite' ? 'vitest' : 'jest',
    skipTsConfig: false,
    skipFormat: false,
    linter: Linter.EsLint,
    tags: option.tags,
    directory: option.directory,
    bundler,
    pascalCaseFiles: true,
    strict: true,
  });
  if (bundler === 'vite') {
    addFiles(tree, option, { sourceSet: 'vitest-test-setup' });
    modifyVitestConfig(tree, option);
  } else if (bundler === 'rollup') {
    addFiles(tree, option, { sourceSet: 'jest-test-setup' });
    modifyJestConfig(tree, option);
  }
}

export async function tsLib(
  tree: Tree,
  options: FullOptions,
  { bundler = 'vite' }: { bundler: 'vite' | 'rollup' }
) {
  await libraryGenerator(tree, {
    name: options.name,
    tags: options.tags,
    directory: options.directory,
    bundler,
    linter: Linter.EsLint,
    unitTestRunner: bundler === 'vite' ? 'vitest' : 'jest',
    config: 'project',
    skipFormat: false,
    skipTsConfig: false,
    strict: true,
    pascalCaseFiles: true,
  });
}

export async function sharedModifications(tree: Tree, options: FullOptions) {
  addEslintJsonCheck(tree, options);
  addProjectToStorybookDeps(tree, options);
  await formatFiles(tree);
}

export default async function (tree: Tree, options: LibraryGeneratorSchema) {
  const normalizedOptions = normalizeOptions(tree, options);

  switch (normalizedOptions.libGenerator) {
    case 'react':
      await reactLib(tree, normalizedOptions, { bundler: 'vite' });
      break;
    case 'ts':
      await tsLib(tree, normalizedOptions, { bundler: 'vite' });
      break;
    default:
      throw new Error(
        `Generator ${normalizedOptions.libGenerator} not supported.`
      );
  }
  await sharedModifications(tree, normalizedOptions);
}
