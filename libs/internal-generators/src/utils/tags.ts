import { TagScope, TagType } from './consts';

export function getTagStringFromScopeAndType(scope: TagScope, type: TagType) {
  return `scope:${scope},type:${type}`;
}
export function getDirectoryFromScopeAndType(scope: TagScope, type: TagType) {
  return `${scope}/${type}`;
}
