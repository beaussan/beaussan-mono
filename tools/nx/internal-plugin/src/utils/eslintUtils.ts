import {
  readProjectConfiguration,
  updateProjectConfiguration,
  Tree,
} from '@nx/devkit';
import { FullOptions } from './normalizedOptions';
import { Linter } from 'eslint';

export function addEslintJsonCheck(tree: Tree, options: FullOptions) {
  const projectDef = readProjectConfiguration(tree, options.projectName);
  if (!projectDef.targets.lint) {
    throw new Error('No lint target found');
  }

  if (projectDef.targets.lint.options?.lintFilePatterns) {
    projectDef.targets.lint.options.lintFilePatterns.push(
      `${options.projectRoot}/**/*.json`
    );
  }

  updateProjectConfiguration(tree, options.projectName, projectDef);
}

export function modifyEslintRuleOptions(
  eslintRc: Linter.BaseConfig,
  ruleName: string,
  // disabling this since we don't have a full type for the config from the eslint plugin
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
