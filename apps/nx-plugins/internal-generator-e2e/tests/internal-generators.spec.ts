import {
  checkFilesExist,
  readFile,
  ensureNxProject,
  runNxCommandAsync,
  uniq,
} from '@nrwl/nx-plugin/testing';
import { createUtilsForLibTesting } from './utils';

describe('internal-generators e2e', () => {
  // Setting up individual workspaces per
  // test can cause e2e runs to take a long time.
  // For this reason, we recommend each suite only
  // consumes 1 workspace. The tests should each operate
  // on a unique project in the workspace, such that they
  // are not dependant on one another.
  beforeAll(() => {
    ensureNxProject(
      '@beaussan/internal-generator',
      'dist/libs/nx-plugins/internal-generator'
    );
  });

  describe('library', () => {
    it('should create a project in the right folder given a scope and type', async () => {
      const project = uniq('library');
      await runNxCommandAsync(
        `generate @beaussan/internal-generator:library ${project} --scope=shared --type=utils `
      );
      expect(() =>
        checkFilesExist(`libs/shared/utils/${project}/src/index.ts`)
      ).not.toThrow();
    }, 320000);
  });

  describe('storybook', () => {
    it('should create a project in the right folder given a scope and type', async () => {
      await runNxCommandAsync(
        `generate @beaussan/internal-generator:storybook --scope=shared `
      );
      expect(() =>
        checkFilesExist(`libs/shared/storybook-host/.storybook/main.ts`)
      ).not.toThrow();
    }, 320000);
  });

  describe('update-generators-scope-and-types', () => {
    it('should modify the lint files in a correct manner', async () => {
      await runNxCommandAsync(
        `generate @beaussan/internal-generator:update-generators-scope-and-types`
      );

      expect(() => checkFilesExist(`docs/tags.md`)).not.toThrow();
      const docs = readFile(`docs/tags.md`);
      expect(docs).toEqual(expect.stringContaining('scope'));
      expect(docs).toEqual(expect.stringContaining('dash'));
      expect(docs).toEqual(expect.stringContaining('shared'));
      expect(docs).toEqual(expect.stringContaining('type'));
      expect(docs).toEqual(expect.stringContaining('ui'));
      expect(docs).toEqual(expect.stringContaining('utils'));
      expect(docs).toEqual(expect.stringContaining('data'));
      expect(docs).toEqual(expect.stringContaining('feature'));
    }, 320000);

    describe('import checker', () => {
      const scopeList = ['dash', 'nx-plugins', 'shared'] as const;
      const typesList = [
        'utils',
        'ui',
        'data',
        'feature',
        'app',
        'storybook',
        'e2e',
      ] as const;

      for (const scope of scopeList) {
        const type = 'utils';

        const scopeMapData: Record<
          (typeof scopeList)[number],
          { expectedError: (typeof scopeList)[number][] }
        > = {
          dash: { expectedError: ['nx-plugins'] },
          'nx-plugins': { expectedError: ['dash'] },
          shared: { expectedError: ['nx-plugins', 'dash'] },
        };

        it(`should validate the scope imports from ${scope}`, async () => {
          console.log('Testing ' + scope + ':' + type + '...');
          const project = uniq('import-check-scope');
          const {
            addLinesToFile,
            getModuleBoundariesErrorsWithNames,
            createStandardLib,
            generateImportLine,
          } = createUtilsForLibTesting(project);
          await runNxCommandAsync(
            `generate @beaussan/internal-generator:update-generators-scope-and-types`
          );

          await createStandardLib(scope, type);
          const linesToAdd = [];
          for (const subScope of scopeList) {
            if (subScope === scope) {
              await createStandardLib(subScope, type, '-copy');
              linesToAdd.push(generateImportLine(subScope, type, '-copy'));
              continue;
            }
            await createStandardLib(subScope, type);
            linesToAdd.push(generateImportLine(subScope, type));
          }

          addLinesToFile(scope, type, linesToAdd.join('\n'));

          const resultOfLint = await getModuleBoundariesErrorsWithNames(
            scope,
            type
          );
          expect(resultOfLint).toMatchSnapshot(`Import from ${scope}:${type}`);
          expect(resultOfLint.length).toEqual(
            scopeMapData[scope].expectedError.length
          );

          const importErrors = resultOfLint.map((it) => it.split(':')[0]);

          for (const expectedError of scopeMapData[scope].expectedError) {
            expect(
              importErrors.filter((it) => it.includes(expectedError))
            ).toHaveLength(1);
          }
        }, 320000);
      }

      for (const type of typesList) {
        const scope = 'shared';

        const typeMapData: Record<
          (typeof typesList)[number],
          { expectedError: (typeof typesList)[number][] }
        > = {
          data: { expectedError: ['e2e', 'storybook', 'app', 'feature', 'ui'] },
          utils: {
            expectedError: ['data', 'feature', 'e2e', 'storybook', 'ui', 'app'],
          },
          ui: { expectedError: ['e2e', 'storybook', 'app', 'feature', 'data'] },
          app: { expectedError: ['storybook', 'e2e', 'app'] },
          storybook: { expectedError: ['app', 'e2e'] },
          e2e: { expectedError: [] },
          feature: { expectedError: ['app', 'storybook', 'e2e'] },
        };
        it(`should validate the type imports from ${type}`, async () => {
          console.log('Testing ' + scope + ':' + type + '...');
          const project = uniq('import-check-type');
          const {
            addLinesToFile,
            getModuleBoundariesErrorsWithNames,
            createStandardLib,
            generateImportLine,
          } = createUtilsForLibTesting(project);
          await runNxCommandAsync(
            `generate @beaussan/internal-generator:update-generators-scope-and-types`
          );

          await createStandardLib(scope, type);
          const linesToAdd = [];
          for (const subType of typesList) {
            if (subType === type) {
              await createStandardLib(scope, subType, '-copy');
              linesToAdd.push(generateImportLine(scope, subType, '-copy'));
              continue;
            }
            await createStandardLib(scope, subType);
            linesToAdd.push(generateImportLine(scope, subType));
          }
          addLinesToFile(scope, type, linesToAdd.join('\n'));

          const resultOfLint = await getModuleBoundariesErrorsWithNames(
            scope,
            type
          );
          expect(resultOfLint).toMatchSnapshot(`Import from ${scope}:${type}`);
          expect(resultOfLint.length).toEqual(
            typeMapData[type].expectedError.length
          );

          const importErrors = resultOfLint.map((it) => it.split(':')[0]);

          for (const expectedError of typeMapData[type].expectedError) {
            expect(
              importErrors.filter((it) => it.includes(expectedError))
            ).toHaveLength(1);
          }
        }, 320000);
      }
    });
  });
});
