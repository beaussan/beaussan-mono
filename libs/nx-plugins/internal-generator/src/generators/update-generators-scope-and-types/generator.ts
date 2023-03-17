import {
  formatFiles,
  getProjects,
  readJson,
  writeJson,
  Tree,
} from '@nrwl/devkit';
import * as path from 'path';
import { eslintScopeUpdater } from './eslintScopeUpdater';
import { markdownGenerator } from './markdownGenerator';
import {
  libGeneratorScopeThatCanBeGenerated,
  libGeneratorTypeThatCanBeGenerated,
  ScopeTagsList,
  TagDefNew,
  tagDefs,
  TypeTagsList,
} from '../../TagConsts';

interface SimplifiedGeneratorJson {
  generators: Record<string, { schema: string }>;
}

export interface SimplifiedSchemaJson {
  properties?: Record<
    string,
    | {
        'x-mono-internal-source': 'scope' | 'type';
        'x-prompt': {
          items: { value: string; label: string }[];
        };
      }
    | { 'x-mono-internal-source': never }
  >;
}

export function getBasePathGenerators(tree: Tree): string | undefined {
  try {
    getProjects(tree).get('nx-plugins-internal-generator').root;
  } catch (e) {
    return undefined;
  }
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
  tags: TypeTagsList[],
  scope: ScopeTagsList[],
  tagDefs: TagDefNew<any>
) {
  const schemaFile = readJson<SimplifiedSchemaJson>(tree, filePath);
  let isEdited = false;

  if (!schemaFile?.properties) {
    return;
  }
  schemaFile.properties = Object.fromEntries(
    Object.entries(schemaFile.properties).map(([key, value]) => {
      if (!value['x-mono-internal-source']) {
        return [key, value];
      }
      const internalSource = value['x-mono-internal-source'];
      if (internalSource === 'scope') {
        isEdited = true;
        return [
          key,
          {
            ...value,
            'x-prompt': {
              ...value['x-prompt'],
              items: [
                scope.map((scop) => ({
                  value: scop,
                  label: `${scop} - ${tagDefs.scope[scop].description}`,
                })),
              ],
            },
          },
        ];
      }
      if (internalSource === 'type') {
        isEdited = true;
        return [
          key,
          {
            ...value,
            'x-prompt': {
              ...value['x-prompt'],

              items: [
                tags.map((tag) => ({
                  value: tag,
                  label: `${tag} - ${tagDefs.type[tag].description}`,
                })),
              ],
            },
          },
        ];
      }
      return [key, value];
    })
  );

  if (isEdited) {
    writeJson(tree, filePath, schemaFile);
  }
}

export default async function (tree: Tree) {
  const basePath = getBasePathGenerators(tree);
  if (basePath) {
    const listOfSchemas = getListOfSchemaFiles(tree, basePath);
    for (const schemaPath of listOfSchemas) {
      updateSchemaFile(
        tree,
        schemaPath,
        libGeneratorTypeThatCanBeGenerated,
        libGeneratorScopeThatCanBeGenerated,
        tagDefs
      );
    }
  }
  await eslintScopeUpdater(tree);
  await markdownGenerator(tree);
  await formatFiles(tree);
}
