import { TagScope, tagScopeList, TagType, tagTypeList } from './consts';
import { getWorkspaceLayout, names, Tree } from '@nrwl/devkit';
import {
  getDirectoryFromScopeAndType,
  getTagStringFromScopeAndType,
} from './tags';
import { z, ZodError } from 'zod';
import { fromZodError } from 'zod-validation-error';

export type NormalizedOptions = {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  parsedTags: string[];
};

export type StandardOptions = {
  name: string;
  tags?: string;
  directory?: string;
  type: TagType;
  scope: TagScope;
};

export type FullOptions<T = Record<string, unknown>> = StandardOptions &
  NormalizedOptions &
  T;

const scopeSchema = z.enum(tagScopeList);
const typeSchema = z.enum(tagTypeList);
export function normalizeOptions<T extends StandardOptions>(
  tree: Tree,
  options: T
): FullOptions<T> {
  try {
    const scope = scopeSchema.parse(options.scope);
    const type = typeSchema.parse(options.type);

    const tags = getTagStringFromScopeAndType(scope, type);
    const directory = getDirectoryFromScopeAndType(scope, type);

    const name = names(options.name).fileName;

    const projectDirectory = directory
      ? `${names(directory).fileName}/${name}`
      : name;
    const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
    const projectRoot = `${
      getWorkspaceLayout(tree).libsDir
    }/${projectDirectory}`;
    const parsedTags = tags ? tags.split(',').map((s) => s.trim()) : [];

    return {
      ...options,
      tags,
      directory,
      projectName,
      projectRoot,
      projectDirectory,
      parsedTags,
    };
  } catch (e) {
    if (e instanceof ZodError) {
      throw fromZodError(e);
    }
    throw e;
  }
}
