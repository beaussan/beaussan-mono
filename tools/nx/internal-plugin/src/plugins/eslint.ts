import { CreateNodes } from '@nx/devkit';
import {
  createNodes as eslintCreateNodes,
  EslintPluginOptions,
} from '@nx/eslint/plugin';
import { dirname } from 'path';

const [eslintGlob, eslintSetup] = eslintCreateNodes;

export const createNodes: CreateNodes<EslintPluginOptions> = [
  eslintGlob,
  async (configFilePath, options, context) => {
    // Call the original Nx eslint plugin
    const originalResult = await eslintSetup(configFilePath, options, context);

    // If the object returned is {}, we don't need to do anything
    if (Object.keys(originalResult).length === 0) {
      return originalResult;
    }

    // Extract the inputs from the original result
    const inputs = Object.values(originalResult?.projects)[0].targets[
      options.targetName
    ].inputs;

    // Look for a eslint config in the project root
    const projectRoot = dirname(configFilePath) + '/.eslint';
    const includesProjectRoot = inputs.some(
      (value) => typeof value === 'string' && value.includes(projectRoot)
    );

    // No eslint config found in the root of the project, skipping
    if (!includesProjectRoot) {
      return {};
    }

    // Return original result
    return originalResult;
  },
];
