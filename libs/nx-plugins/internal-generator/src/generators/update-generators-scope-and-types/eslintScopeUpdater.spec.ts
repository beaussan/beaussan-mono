import {
  generateDepConstraint,
  generateFullDepConstraint,
} from './eslintScopeUpdater';
import { TagDefNew, TagGroupMap } from '../../TagConsts';

describe('generateDepConstraint', () => {
  it('should show all entries when provided for', () => {
    const result = generateDepConstraint(
      {
        test1: true,
        test2: true,
      },
      'test:',
      'test3'
    );

    expect(result).toEqual({
      sourceTag: 'test:test3',
      onlyDependOnLibsWithTags: ['test:test1', 'test:test2'],
    });
  });
  it('should filter out false values', () => {
    const result = generateDepConstraint(
      {
        test1: true,
        test2: false,
      },
      'test:',
      'test3'
    );

    expect(result).toEqual({
      sourceTag: 'test:test3',
      onlyDependOnLibsWithTags: ['test:test1'],
    });
  });
});

describe('generateFullDepConstraint', () => {
  it('should work with a full map', () => {
    const groupMap = {
      test: {
        prefix: 'my-prefix:',
        description: '',
        tags: ['test1', 'test2'] as const,
      },
      demo: {
        prefix: 'my-demo:',
        tags: ['demo1', 'demo2'] as const,
        description: '',
      },
    } satisfies TagGroupMap;
    const tagDefs = {
      demo: {
        demo1: {
          description: '',
          canImport: {
            demo1: true,
            demo2: true,
          },
        },
        demo2: {
          description: '',
          canImport: {
            demo2: true,
            demo1: false,
          },
        },
      },
      test: {
        test1: {
          canImport: {
            test1: true,
            test2: true,
          },
          description: '',
        },
        test2: {
          canImport: {
            test2: true,
            test1: true,
          },
          description: '',
        },
      },
    } as const satisfies TagDefNew<typeof groupMap>;

    const result = generateFullDepConstraint(groupMap, tagDefs);

    expect(result).toMatchInlineSnapshot(`
      Array [
        Object {
          "onlyDependOnLibsWithTags": Array [
            "my-demo:demo1",
            "my-demo:demo2",
          ],
          "sourceTag": "my-demo:demo1",
        },
        Object {
          "onlyDependOnLibsWithTags": Array [
            "my-demo:demo2",
          ],
          "sourceTag": "my-demo:demo2",
        },
        Object {
          "onlyDependOnLibsWithTags": Array [
            "my-prefix:test1",
            "my-prefix:test2",
          ],
          "sourceTag": "my-prefix:test1",
        },
        Object {
          "onlyDependOnLibsWithTags": Array [
            "my-prefix:test2",
            "my-prefix:test1",
          ],
          "sourceTag": "my-prefix:test2",
        },
      ]
    `);
  });
});
