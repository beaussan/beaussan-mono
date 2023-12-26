import { WorkspaceLinExecutorSchema } from './schema';
import {
  ExecutorContext,
  getProjects,
  ProjectConfiguration,
  readProjectConfiguration,
  Tree,
} from '@nx/devkit';
import { FsTree } from 'nx/src/generators/tree';
import { match } from 'ts-pattern';
import * as chalk from 'chalk';

type RuleResult =
  | { status: 'ok'; reason?: string }
  | { status: 'error' | 'warn'; reason: string };

type Rule = {
  name: string;
  run: (projectConfig: ProjectConfiguration, tree: Tree) => Promise<RuleResult>;
  excludedProject?: string[];
};

type RunOnProject = {
  projectName: string;
  rulesRan: { ruleName: string; result: RuleResult }[];
};

const ruleSet: Rule[] = [
  /*
  {
    name: 'should have a lint target',
    run: async (projectConfig) => {
      if (!projectConfig.targets?.lint) {
        return { status: 'error', reason: 'No lint target found' };
      }
      return { status: 'ok' };
    },
    excludedProject: ['eslint-rules'],
  },
  {
    name: 'should have a json listed in the lint files',
    run: async (projectConfig) => {
      const patterns = projectConfig.targets?.lint?.options
        ?.lintFilePatterns as string[] | undefined;
      if (!patterns) {
        return { status: 'error', reason: 'No target found to lint.' };
      }

      if (
        !patterns.some((pattern) => pattern.match(/(\*\.json)|(\*\.\{.*json)/g))
      ) {
        return {
          status: 'error',
          reason:
            'No pattern to lint json found. Found patterns : ' +
            patterns.toString(),
        };
      }

      return { status: 'ok' };
    },
    excludedProject: ['eslint-rules'],
  },*/
  {
    name: 'should use vitest',
    run: async (projectConfig) => {
      const testExecutor = projectConfig.targets?.test?.executor;
      if (!testExecutor) {
        return { status: 'ok', info: 'no test target found' };
      }
      if (testExecutor !== '@nx/vite:test') {
        return {
          status: 'warn',
          reason: `using ${testExecutor} instead of @nx/vite:test`,
        };
      }
      return { status: 'ok' };
    },
  },
  {
    name: 'if has stories, should be in the implisit dependancies of the scope',
    // Ignored for now, because we are still in the migration process
    excludedProject: ['courso-frontend'],
    run: async (projectConfig, tree) => {
      const { globby } = await (Function(
        'return import("globby")'
      )() as Promise<typeof import('globby')>);
      const paths = await globby('**/*.stories.@(js|jsx|ts|tsx|mdx)', {
        cwd: projectConfig.root,
      });
      if (paths.length === 0) {
        return {
          status: 'ok',
          reason: 'no stories found',
        };
      }
      const scopeTags = projectConfig.tags
        .filter((tag) => tag.startsWith('scope:'))
        .map((tag) => tag.replace('scope:', ''));
      if (scopeTags.length !== 1) {
        return {
          status: 'error',
          reason: 'could not determine the scope for the given project.',
        };
      }
      const scope = scopeTags[0];
      try {
        const storybookProject = readProjectConfiguration(
          tree,
          `${scope}-storybook-host`
        );
        if (!storybookProject) {
          return {
            status: 'error',
            reason: 'could not locate storybook for scope ' + scope,
          };
        }
        if (
          !storybookProject.implicitDependencies.includes(projectConfig.name)
        ) {
          return {
            status: 'error',
            reason:
              'project name is missing from storybook implicit dependencies',
          };
        }
        return {
          status: 'ok',
        };
      } catch (e) {
        return {
          status: 'error',
          reason: 'could not locate storybook for scope ' + scope,
        };
      }
    },
  },
];

function prettyPrint(runOnProject: RunOnProject): void {
  const projectDisplay = `\n==> ${runOnProject.projectName}`;
  if (runOnProject.rulesRan.every((rule) => rule.result.status === 'ok')) {
    console.log(chalk.green(projectDisplay));
  } else if (
    runOnProject.rulesRan.some((rule) => rule.result.status === 'error')
  ) {
    console.log(chalk.red(projectDisplay));
  } else {
    console.log(chalk.yellow(projectDisplay));
  }

  runOnProject.rulesRan.forEach((rule) => {
    const prefix = match(rule.result)
      .with({ status: 'ok' }, () => chalk.bgGreen(' PASS '))
      .with({ status: 'warn' }, () => chalk.bgYellow(' WARN '))
      .with({ status: 'error' }, () => chalk.bgRed(' ERROR '))
      .exhaustive();
    console.log(
      `   ${prefix} ${rule.ruleName} ${
        rule.result.reason ? ` : ${rule.result.reason}` : ''
      }`
    );
  });
}

export default async function runExecutor(
  options: WorkspaceLinExecutorSchema,
  context: ExecutorContext
) {
  console.log(context.root);
  const runResult: RunOnProject[] = [];
  const tree = new FsTree(context.root, true);
  const allProjects = getProjects(tree);
  for (const [name, projectConfig] of allProjects) {
    const rulesRan = await Promise.all(
      ruleSet
        .filter((rule) =>
          rule.excludedProject ? !rule.excludedProject.includes(name) : true
        )
        .map((rule) => {
          return rule.run(projectConfig, tree).then((result) => ({
            ruleName: rule.name,
            result,
          }));
        })
    );
    runResult.push({
      projectName: name,
      rulesRan,
    });
  }

  runResult.forEach((result) => prettyPrint(result));
  if (
    runResult.some((result) =>
      result.rulesRan.some((rule) => rule.result.status === 'error')
    )
  ) {
    const errors = runResult.filter((val) =>
      val.rulesRan.some((it) => it.result.status === 'error')
    );
    console.log('\n \n-----------------\n \nError on projects :\n');
    errors.forEach((project) => prettyPrint(project));
    console.log('\n \n ');
    // We don't fail yet, but we should latter
    // throw new Error('Lint error, failing.');
  }
  return {
    success: true,
  };
}
