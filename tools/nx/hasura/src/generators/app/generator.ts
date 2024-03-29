import {
  addDependenciesToPackageJson,
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  getWorkspaceLayout,
  names,
  offsetFromRoot,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { v4 as uuid } from 'uuid';
import { AppGeneratorSchema } from './schema';
import { runTasksInSerial } from '@nx/devkit';
import { HASURA_VERSION } from './versions';

interface NormalizedSchema extends AppGeneratorSchema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  parsedTags: string[];
}

function normalizeOptions(
  tree: Tree,
  options: AppGeneratorSchema
): NormalizedSchema {
  const name = names(options.name).fileName;
  const projectDirectory = options.directory
    ? `${names(options.directory).fileName}/${name}`
    : name;
  const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
  const projectRoot = `${getWorkspaceLayout(tree).appsDir}/${projectDirectory}`;
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
    webhookToken: uuid(),
    actionToken: uuid(),
    adminSecret: uuid(),
    hasuraVersion: HASURA_VERSION,
  };
  generateFiles(
    tree,
    path.join(__dirname, 'files', 'hasura-metadata-v3'),
    options.projectRoot,
    templateOptions
  );
  generateFiles(
    tree,
    path.join(__dirname, 'files', 'configs'),
    options.projectRoot,
    templateOptions
  );
}

export default async function (tree: Tree, options: AppGeneratorSchema) {
  const normalizedOptions = normalizeOptions(tree, options);

  const baseHasuraCliCommand = `hasura --skip-update-check --project ${normalizedOptions.projectRoot} `;
  addProjectConfiguration(tree, normalizedOptions.projectName, {
    root: normalizedOptions.projectRoot,
    projectType: 'application',
    sourceRoot: `${normalizedOptions.projectRoot}/src`,
    targets: {
      serve: {
        executor: 'nx:run-script',
        dependsOn: ['metadata-apply'],
        options: {
          script: baseHasuraCliCommand + ' console',
        },
      },
      'migrate-db': {
        executor: 'nx:run-script',
        dependsOn: ['docker-compose-up'],
        options: {
          script:
            baseHasuraCliCommand + ' migrate apply --database-name default',
        },
      },
      'metadata-apply': {
        executor: 'nx:run-script',
        dependsOn: ['migrate-db'],
        options: {
          script: baseHasuraCliCommand + ' metadata apply',
        },
      },
    },
    tags: normalizedOptions.parsedTags,
  });
  addFiles(tree, normalizedOptions);
  await formatFiles(tree);

  return runTasksInSerial(
    addDependenciesToPackageJson(tree, {}, { 'hasura-cli': HASURA_VERSION })
  );
}
