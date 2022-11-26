import {formatFiles, generateFiles, getWorkspaceLayout, names, offsetFromRoot, Tree,} from '@nrwl/devkit';
import * as path from 'path';
import {NextLibraryGeneratorSchema} from './schema';
import {libraryGenerator} from '@nrwl/next/src/generators/library/library'
import {Linter} from "@nrwl/linter";

interface NormalizedSchema extends NextLibraryGeneratorSchema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  parsedTags: string[];
}

function normalizeOptions(tree: Tree, options: NextLibraryGeneratorSchema): NormalizedSchema {
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
      template: ''
    };
    generateFiles(tree, path.join(__dirname, 'files'), options.projectRoot, templateOptions);
}

export default async function (tree: Tree, options: NextLibraryGeneratorSchema) {
  const normalizedOptions = normalizeOptions(tree, options);
  await libraryGenerator(tree, { name: options.name, linter: Linter.EsLint, skipFormat: false, skipTsConfig: false, style: 'css', unitTestRunner: 'jest'});
  /*
  addProjectConfiguration(
    tree,
    normalizedOptions.projectName,
    {
      root: normalizedOptions.projectRoot,
      projectType: 'library',
      sourceRoot: `${normalizedOptions.projectRoot}/src`,
      targets: {
        build: {
          executor: "@beaussan/nx-generators-react:build",
        },
      },
      tags: normalizedOptions.parsedTags,
    }
  );
  */
  addFiles(tree, normalizedOptions);
  await formatFiles(tree);
}
