import { defineCheck, defineConfig, text } from 'commonality';
import * as recommended from 'commonality-checks-recommended';
import {
  createProjectGraphAsync,
  readProjectsConfigurationFromProjectGraph,
} from '@nx/devkit';

const hasLintExecutor = defineCheck(() => {
  return {
    name: 'should use @nx/eslint:lint for linting',
    level: 'error',
    message: 'some message',
    validate: async (ctx) => {
      const graph = await createProjectGraphAsync({ exitOnError: true });
      const projects = readProjectsConfigurationFromProjectGraph(graph);
      const thisProject = Object.values(projects.projects).find(
        (project) => project.root === ctx.package.relativePath
      );
      if (!thisProject) {
        console.log(ctx.package.relativePath);
        console.log('Project not found');
        return false;
      }
      if (!thisProject.targets.lint) {
        console.log('Project lint found');
        return false;
      }

      return thisProject.targets.lint.executor === '@nx/eslint:lint';
    },
  };
});

export default defineConfig({
  checks: {
    '*': [
      hasLintExecutor(),
      /*
      recommended.hasCodeowner(),
      recommended.hasReadme(),
      recommended.hasMatchingDevPeerVersions(),
      recommended.hasUniqueDependencyTypes(),
      recommended.hasConsistentExternalVersion(),
      recommended.hasSortedDependencies(),
      recommended.hasValidPackageName(),
      recommended.extendsRepositoryField(),

       */
    ],
  },
});
