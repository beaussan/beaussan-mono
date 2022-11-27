import {
  formatFiles,
  getProjects,
  readJson,
  writeJson,
  Tree,
} from '@nrwl/devkit';
import * as path from 'path';
import {
  TagScope,
  tagScopeList,
  TagType,
  tagTypeList,
} from '../../utils/consts';

interface SimplifiedGeneratorJson {
  generators: Record<string, { schema: string }>;
}

export interface SimplifiedSchemaJson {
  properties?: {
    scope?: {
      'x-prompt': {
        items: TagScope[];
      };
    };
    type?: {
      'x-prompt': {
        items: TagType[];
      };
    };
  };
}

export function getBasePathGenerators(tree: Tree) {
  return getProjects(tree).get('internal-generator').root;
}

export function getListOfSchemaFiles(tree: Tree, basePath: string) {
  const schemaLists = readJson<SimplifiedGeneratorJson>(
    tree,
    path.join(basePath, 'generators.json')
  );
  return Object.values(schemaLists.generators)
    .map((it) => it.schema)
    .map((it) => path.join(basePath, it));
}

export function updateSchemaFile(
  tree: Tree,
  filePath: string,
  tags: TagType[],
  scope: TagScope[]
) {
  const schemaFile = readJson<SimplifiedSchemaJson>(tree, filePath);
  let isEdited = false;
  if (schemaFile?.properties?.type?.['x-prompt']?.items) {
    isEdited = true;
    schemaFile.properties.type['x-prompt'].items = tags;
  }
  if (schemaFile?.properties?.scope?.['x-prompt']?.items) {
    isEdited = true;
    schemaFile.properties.scope['x-prompt'].items = scope;
  }

  if (isEdited) {
    writeJson(tree, filePath, schemaFile);
  }
}

export default async function (tree: Tree) {
  const basePath = getBasePathGenerators(tree);
  const listOfSchemas = getListOfSchemaFiles(tree, basePath);
  for (const schemaPath of listOfSchemas) {
    updateSchemaFile(
      tree,
      schemaPath,
      tagTypeList as unknown as TagType[],
      tagScopeList as unknown as TagScope[]
    );
  }
  await formatFiles(tree);
}
