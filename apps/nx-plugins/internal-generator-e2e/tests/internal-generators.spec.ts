import {
  checkFilesExist,
  ensureNxProject,
  runNxCommandAsync,
  uniq,
} from '@nrwl/nx-plugin/testing';

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

  describe('react-library', () => {
    it('should create a project in the right folder given a scope and type', async () => {
      const project = uniq('react-library');
      await runNxCommandAsync(
        `generate @beaussan/internal-generator:react-library ${project} --scope=shared --type=utils `
      );
      expect(() =>
        checkFilesExist(`libs/shared/utils/${project}/src/index.ts`)
      ).not.toThrow();
    }, 120000);
  });

  describe('ts-library', () => {
    it('should create a project in the right folder given a scope and type', async () => {
      const project = uniq('ts-library');
      await runNxCommandAsync(
        `generate @beaussan/internal-generator:ts-library ${project} --scope=shared --type=utils `
      );
      expect(() =>
        checkFilesExist(`libs/shared/utils/${project}/src/index.ts`)
      ).not.toThrow();
    }, 120000);
  });

  afterAll(() => {
    // `nx reset` kills the daemon, and performs
    // some work which can help clean up e2e leftovers
    runNxCommandAsync('reset');
  });
});
