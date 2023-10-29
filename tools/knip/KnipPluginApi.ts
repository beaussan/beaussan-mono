import { KnipConfig } from 'knip';
import { ProjectGraphProjectNode } from 'nx/src/config/project-graph';

import { createProjectGraphAsync } from '@nx/devkit';
import { log, mergeKnipConfigs } from './utils';
import { TargetConfiguration } from 'nx/src/config/workspace-json-project-json';

const DEBUG = false;

type KnipConfigPluginOptions = {
  projects: ProjectGraphProjectNode[];
};

type KnipPluginOutput = KnipConfig | undefined;

export type KnipConfigPlugin = (
  args: KnipConfigPluginOptions
) => KnipPluginOutput;

/** @public */
export type TargetMapperFunction = (args: {
  executor: string;
  project: ProjectGraphProjectNode;
  targetContent: TargetConfiguration;
  rootFolder: string;
}) => KnipPluginOutput;

/** @public */
export type ExecutorMapperFunction = (args: {
  executor: string;
  project: ProjectGraphProjectNode;
  targetContent: TargetConfiguration;
  rootFolder: string;
  targetName: string;
}) => KnipPluginOutput;

/** @public */
export type FullLibraryMapperFunction = (args: {
  project: ProjectGraphProjectNode;
  rootFolder: string;
}) => KnipPluginOutput;

export const withLibraryMapper =
  ({
    mapperFn,
    filter = () => true,
  }: {
    mapperFn: FullLibraryMapperFunction;
    filter?: (project: ProjectGraphProjectNode) => boolean;
  }): KnipConfigPlugin =>
  ({ projects }) => {
    return mergeKnipConfigs(
      ...projects
        .filter((project) => filter(project))
        .map((project) => mapperFn({ project, rootFolder: project.data.root }))
        .filter((config) => !!config)
    );
  };

export const withMapOverExecutorByName =
  ({
    executorName,
    mapperFn,
  }: {
    executorName: string;
    mapperFn: ExecutorMapperFunction;
  }): KnipConfigPlugin =>
  ({ projects }) => {
    return mergeKnipConfigs(
      ...projects
        .map((project) =>
          Object.entries(project.data.targets)
            .filter(([_, value]) => value.executor === executorName)
            .map(([targetName, _]) => ({ project, targetName }))
        )
        .filter((data) => !!data)
        .flat()
        .map(({ project, targetName }) =>
          mapperFn({
            executor: project.data.targets[targetName].executor,
            project,
            targetContent: project.data.targets[targetName],
            rootFolder: project.data.root,
            targetName,
          })
        )
        .filter((config) => !!config)
    );
  };

export const withMapOverTargetsByName =
  ({
    targetName,
    mapperFn,
  }: {
    targetName: string;
    mapperFn: TargetMapperFunction;
  }): KnipConfigPlugin =>
  ({ projects }) => {
    return mergeKnipConfigs(
      ...projects
        .filter((project) => project.data.targets[targetName])
        .map((project) =>
          mapperFn({
            executor: project.data.targets[targetName].executor,
            project,
            targetContent: project.data.targets[targetName],
            rootFolder: project.data.root,
          })
        )
        .filter((config) => !!config)
    );
  };

export async function combineNxKnipPlugins(
  ...plugins: KnipConfigPlugin[]
): Promise<KnipConfig> {
  const graph = await createProjectGraphAsync();
  const pluginOption: KnipConfigPluginOptions = {
    projects: Object.values(graph.nodes),
  };
  const pluginOutputs: KnipConfig[] = [];
  for (let plugin of plugins) {
    const output = plugin(pluginOption);
    if (output) {
      pluginOutputs.push(output);
    }
  }

  const finalConfig = mergeKnipConfigs(...pluginOutputs);

  if (DEBUG) {
    console.log('---------');
    log(finalConfig);
    console.log('---------');
  }

  return finalConfig;
}
