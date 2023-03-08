import { readJson, Tree, writeJson } from '@nrwl/devkit';
import {
  ImportMap,
  TagDefNew,
  tagDefs,
  tagGropus,
  TagGroupMap,
} from '../../TagConsts';
import { Entries } from 'type-fest';
import { Linter } from 'eslint';
import { modifyEslintRuleOptions } from '../../utils/eslintUtils';
export function generateDepConstraint(
  typeDef: ImportMap<any>,
  prefix: string,
  sourceTag: string
) {
  return {
    sourceTag: prefix + sourceTag,
    onlyDependOnLibsWithTags: Object.entries(typeDef)
      .filter(([key, value]) => value)
      .map(([key]) => prefix + key),
  };
}

export function generateDepConstraintForGroup(
  group: TagDefNew<any>[string],
  prefix: string
) {
  const entries = Object.entries(group) as Entries<typeof group>;
  return entries.map(([tag, value]) =>
    generateDepConstraint(value.canImport, prefix, tag)
  );
}

export function generateFullDepConstraint<T extends TagGroupMap>(
  tagGroupMap: T,
  tagDefs: TagDefNew<T>
) {
  return Object.entries(tagDefs)
    .map(([group, groupMap]) => {
      return generateDepConstraintForGroup(groupMap, tagGroupMap[group].prefix);
    })
    .flat();
}
export function getNewTagLinterConfig(tagGroupMap: TagGroupMap) {
  return Object.fromEntries(
    Object.entries(tagGroupMap).map(([key, value]) => {
      return [
        key,
        {
          prefix: value.prefix,
          allowMultiplePerProject: value.allowMultiplePerProject,
          enforceAtLeastOne: value.shouldAlwaysBePresent,
          allowedTags: value.tags,
        },
      ];
    })
  );
}

export async function eslintScopeUpdater(tree: Tree) {
  let existingEslintConfig = readJson<Linter.BaseConfig>(
    tree,
    '.eslintrc.json'
  );

  existingEslintConfig = modifyEslintRuleOptions(
    existingEslintConfig,
    '@nrwl/nx/enforce-module-boundaries',
    (options) => ({
      ...options,
      depConstraints: generateFullDepConstraint(tagGropus, tagDefs),
    })
  );

  existingEslintConfig = modifyEslintRuleOptions(
    existingEslintConfig,
    '@nrwl/nx/workspace/allowed-project-tags',
    (options) => ({
      ...options,
      tags: getNewTagLinterConfig(tagGropus),
    })
  );
  writeJson(tree, '.eslintrc.json', existingEslintConfig);
}
