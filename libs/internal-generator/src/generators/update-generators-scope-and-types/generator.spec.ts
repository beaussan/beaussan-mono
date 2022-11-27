import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { Tree, writeJson, readJson } from '@nrwl/devkit';

import {
  getListOfSchemaFiles,
  SimplifiedSchemaJson,
  updateSchemaFile,
} from './generator';

describe('update-generators-scope-and-types generator', () => {
  let appTree: Tree;

  beforeEach(() => {
    appTree = createTreeWithEmptyWorkspace();
  });

  describe('getListOfSchemaFiles', () => {
    it('should correctly list all of schemas.json', () => {
      writeJson(appTree, 'lib/generators.json', {
        $schema: 'http://json-schema.org/schema',
        name: 'internal-generator',
        version: '0.0.1',
        generators: {
          'react-library': {
            factory: './src/generators/react-library/generator',
            schema: './src/generators/react-library/schema.json',
            description: 'A react library generator',
          },
          'update-generators-scope-and-types': {
            factory:
              './src/generators/update-generators-scope-and-types/generator',
            schema:
              './src/generators/update-generators-scope-and-types/schema.json',
            description:
              'Update internal generators from the new scope and types',
          },
        },
      });
      expect(getListOfSchemaFiles(appTree, 'lib')).toMatchInlineSnapshot(`
        Array [
          "lib/src/generators/react-library/schema.json",
          "lib/src/generators/update-generators-scope-and-types/schema.json",
        ]
      `);
    });
  });

  describe('updateSchemaFile', () => {
    it('should do nothing if type or scope is not present', () => {
      const input: SimplifiedSchemaJson = {
        properties: {},
      };
      writeJson<SimplifiedSchemaJson>(appTree, 'test.json', input);

      updateSchemaFile(appTree, 'test.json', [], []);

      const readFile = readJson(appTree, 'test.json');

      expect(readFile).toEqual(input);
    });

    it('should do nothing if there is no properties not present', () => {
      const input: SimplifiedSchemaJson = {};
      writeJson<SimplifiedSchemaJson>(appTree, 'test.json', input);

      updateSchemaFile(appTree, 'test.json', [], []);

      const readFile = readJson(appTree, 'test.json');

      expect(readFile).toEqual(input);
    });

    it('should update the scope if they are present', () => {
      const input: SimplifiedSchemaJson = {
        properties: {
          scope: {
            'x-prompt': {
              items: ['toto' as never],
            },
          },
        },
      };
      writeJson<SimplifiedSchemaJson>(appTree, 'test.json', input);

      updateSchemaFile(appTree, 'test.json', [], ['shared', 'landing-page']);

      const readFile = readJson(appTree, 'test.json');

      expect(readFile).toEqual({
        properties: {
          scope: {
            'x-prompt': {
              items: ['shared', 'landing-page'],
            },
          },
        },
      });
    });

    it('should update the types if they are present', () => {
      const input: SimplifiedSchemaJson = {
        properties: {
          type: {
            'x-prompt': {
              items: ['toto' as never],
            },
          },
        },
      };
      writeJson<SimplifiedSchemaJson>(appTree, 'test.json', input);

      updateSchemaFile(appTree, 'test.json', ['util'], []);

      const readFile = readJson(appTree, 'test.json');

      expect(readFile).toEqual({
        properties: {
          type: {
            'x-prompt': {
              items: ['util'],
            },
          },
        },
      });
    });

    it('should update both if both are present', () => {
      const input: SimplifiedSchemaJson = {
        properties: {
          type: {
            'x-prompt': {
              items: ['toto' as never],
            },
          },
          scope: {
            'x-prompt': {
              items: ['toto' as never],
            },
          },
        },
      };
      writeJson<SimplifiedSchemaJson>(appTree, 'test.json', input);

      updateSchemaFile(appTree, 'test.json', ['util'], ['shared']);

      const readFile = readJson(appTree, 'test.json');

      expect(readFile).toEqual({
        properties: {
          type: {
            'x-prompt': {
              items: ['util'],
            },
          },
          scope: {
            'x-prompt': {
              items: ['shared'],
            },
          },
        },
      });
    });
  });
});
