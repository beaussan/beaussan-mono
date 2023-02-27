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

function modifyEslintRuleOptions(
  eslintRc: Linter.BaseConfig,
  ruleName: string,
  newOptions: (oldValue: Record<string, any>) => Record<string, any>
): Linter.BaseConfig {
  return {
    ...eslintRc,
    overrides: eslintRc.overrides.map((overide) => {
      return {
        ...overide,
        rules: Object.fromEntries(
          Object.entries(overide.rules).map(([rule, data]) => {
            if (rule !== ruleName) {
              return [rule, data];
            }
            return [rule, [data[0], newOptions(data[1])]];
          })
        ),
      };
    }),
  };
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
  const newBoundaryMap = generateFullDepConstraint(tagGropus, tagDefs);
  existingEslintConfig = modifyEslintRuleOptions(
    existingEslintConfig,
    '@nrwl/nx/enforce-module-boundaries',
    (options) => ({
      ...options,
      depConstraints: newBoundaryMap,
    })
  );
  const newTagLinterConfig = getNewTagLinterConfig(tagGropus);

  existingEslintConfig = modifyEslintRuleOptions(
    existingEslintConfig,
    '@nrwl/nx/workspace/allowed-project-tags',
    (options) => ({
      ...options,
      tags: newTagLinterConfig,
    })
  );
  writeJson(tree, '.eslintrc.json', existingEslintConfig);
}
