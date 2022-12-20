import { formatFiles, Tree } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/js';
import { TsLibraryGeneratorSchema } from './schema';
import { Linter } from '@nrwl/linter';
import { addEslintJsonCheck } from '../../utils/addEslintJsonCheck';
import { normalizeOptions } from '../../utils/normalizedOptions';

export default async function (tree: Tree, options: TsLibraryGeneratorSchema) {
  const normalizedOptions = normalizeOptions(tree, options);
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
  addEslintJsonCheck(tree, normalizedOptions);
  await formatFiles(tree);
}
