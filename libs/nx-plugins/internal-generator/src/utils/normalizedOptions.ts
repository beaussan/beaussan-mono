import { getWorkspaceLayout, names, Tree } from '@nx/devkit';
import {
  getDirectoryFromScopeAndType,
  getTagStringFromScopeAndType,
} from './tags';
import { z, ZodError } from 'zod';
import { fromZodError } from 'zod-validation-error';
import { ScopeTagsList, tagGropus, TypeTagsList } from '../TagConsts';

export type NormalizedOptions = {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  parsedTags: string[];
  libGenerator: 'react' | 'ts';
};

export type StandardOptions = {
  name: string;
  tags?: string;
  directory?: string;
  type: TypeTagsList;
  scope: ScopeTagsList;
};

export type FullOptions<T = Record<string, unknown>> = StandardOptions &
  NormalizedOptions &
  T;

const scopeSchema = z.enum(tagGropus.scope.tags);
const typeSchema = z.enum(tagGropus.type.tags);

export function getFoldersFromDirectoryAndName(
  tree: Tree,
  { directory, name }: { directory: string; name: string }
) {
  const fileName = names(name).fileName;

  const projectDirectory = directory
    ? `${names(directory).fileName}/${fileName}`
    : name;
  const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
  const projectRoot = `${getWorkspaceLayout(tree).libsDir}/${projectDirectory}`;

  return {
    projectName,
    projectRoot,
    projectDirectory,
  };
}

export function parseTags(tags?: string): string[] {
  return tags ? tags.split(',').map((s) => s.trim()) : [];
}

export function safeGetScope(scope: unknown): ScopeTagsList {
  try {
    return scopeSchema.parse(scope);
  } catch (e) {
    if (e instanceof ZodError) {
      throw fromZodError(e);
    }
    throw e;
  }
}
export function safeGetType(type: unknown): TypeTagsList {
  try {
    return typeSchema.parse(type);
  } catch (e) {
    if (e instanceof ZodError) {
      throw fromZodError(e);
    }
    throw e;
  }
}

export function normalizeOptions<T extends StandardOptions>(
  tree: Tree,
  options: T
): FullOptions<T> {
  const scope = safeGetScope(options.scope);
  const type = safeGetType(options.type);

  const tags = getTagStringFromScopeAndType(scope, type);
  const directory = getDirectoryFromScopeAndType(scope, type);

  const folders = getFoldersFromDirectoryAndName(tree, {
    name: options.name,
    directory,
  });

  const parsedTags = parseTags(tags);

  return {
    ...options,
    libGenerator: 'react',
    tags,
    directory,
    ...folders,
    parsedTags,
  };
}
