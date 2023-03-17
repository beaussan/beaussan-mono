import {
  getDirectoryFromScopeAndType,
  getTagStringFromScopeAndType,
} from './tags';
import { tagGropus } from '../TagConsts';

describe('getTagStringFromScopeAndType', () => {
  for (const tagType of tagGropus.type.tags) {
    for (const tagScope of tagGropus.scope.tags) {
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
  for (const tagScope of tagGropus.scope.tags) {
    for (const tagType of tagGropus.type.tags.filter(
      (it) => it !== 'storybook'
    )) {
      it(`should given a ${tagType} type and a ${tagScope} output the correct directory structure`, () => {
        const result = getDirectoryFromScopeAndType(tagScope, tagType);

        expect(result).toEqual(`${tagScope}/${tagType}`);
      });
    }

    it(`should given a storybook type and a ${tagScope} output the correct directory structure`, () => {
      const result = getDirectoryFromScopeAndType(tagScope, 'storybook');

      expect(result).toEqual(`${tagScope}`);
    });
  }
});
