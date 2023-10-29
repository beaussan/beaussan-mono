import { KnipConfig } from 'knip';
import mergeWith from 'lodash/mergeWith';
import isArray from 'lodash/isArray';
import * as util from 'node:util';
import { readJsonFile } from '@nx/devkit';

export function mergeKnipConfigs(...configs: KnipConfig[]): KnipConfig {
  return mergeWith({}, ...configs, (objValue, srcValue) => {
    if (isArray(objValue)) {
      return objValue.concat(srcValue);
    }
  });
}
export const log = (value: any) =>
  console.log(
    util.inspect(value, { showHidden: false, depth: null, colors: true })
  );

export function tryReadJsonFile<T extends object = any>(
  path: Parameters<typeof readJsonFile>[0],
  options?: Parameters<typeof readJsonFile>[1]
): T | undefined {
  try {
    return readJsonFile<T>(path, options);
  } catch {
    return undefined;
  }
}
