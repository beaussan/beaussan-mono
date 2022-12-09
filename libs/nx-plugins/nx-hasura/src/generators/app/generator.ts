import {
  addDependenciesToPackageJson,
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  getWorkspaceLayout,
  names,
  offsetFromRoot,
  Tree,
} from '@nrwl/devkit';
import * as path from 'path';
import { v4 as uuid } from 'uuid';
import { AppGeneratorSchema } from './schema';
import { runTasksInSerial } from '@nrwl/workspace/src/utilities/run-tasks-in-serial';

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
      'docker-compose:up': {
        executor: 'nx:run-commands',
        options: {
          commands: [
            'docker compose up -d',
            'echo Waiting for Hasura to be up...',
            'sleep 5',
          ],
          cwd: normalizedOptions.projectRoot,
          parallel: false,
        },
      },
      'docker-compose:stop': {
        executor: 'nx:run-commands',
        options: {
          commands: ['docker compose stop'],
          cwd: normalizedOptions.projectRoot,
          parallel: false,
        },
      },
      serve: {
        executor: 'nx:run-script',
        dependsOn: ['metadata-apply'],
        options: {
          script: baseHasuraCliCommand + ' console',
        },
      },
      'migrate-db': {
        executor: 'nx:run-script',
        dependsOn: ['docker-compose:up'],
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
    addDependenciesToPackageJson(tree, {}, { 'hasura-cli': '2.15.1' })
  );
}
