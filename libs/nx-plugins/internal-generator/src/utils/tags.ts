import { ScopeTagsList, tagGropus, TypeTagsList } from '../TagConsts';

export function getTagStringFromScopeAndType(
  scope: ScopeTagsList,
  type: TypeTagsList
) {
  return `${tagGropus.scope.prefix}${scope},${tagGropus.type.prefix}${type}`;
}
export function getDirectoryFromScopeAndType(
  scope: ScopeTagsList,
  type: TypeTagsList
) {
  if (type === 'storybook') {
    return scope;
  }
  return `${scope}/${type}`;
}
