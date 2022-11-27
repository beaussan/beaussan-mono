import { tagScopeList, tagTypeList } from './consts';
import {
  getDirectoryFromScopeAndType,
  getTagStringFromScopeAndType,
} from './tags';

describe('getTagStringFromScopeAndType', () => {
  for (const tagType of tagTypeList) {
    for (const tagScope of tagScopeList) {
      it(`should given a ${tagType} type and a ${tagScope} output the correct tags`, () => {
        const result = getTagStringFromScopeAndType(tagScope, tagType);

        expect(result).toContain(`scope:${tagScope}`);
        expect(result).toContain(`type:${tagType}`);
      });
      it(`should given a ${tagType} type and a ${tagScope} only generate two tags`, () => {
        const result = getTagStringFromScopeAndType(tagScope, tagType);

        expect(result.split(',')).toHaveLength(2);
      });
    }
  }
});

describe('getDirectoryFromScopeAndType', () => {
  for (const tagType of tagTypeList) {
    for (const tagScope of tagScopeList) {
      it(`should given a ${tagType} type and a ${tagScope} output the correct directory structure`, () => {
        const result = getDirectoryFromScopeAndType(tagScope, tagType);

        expect(result).toEqual(`${tagScope}/${tagType}`);
      });
    }
  }
});
