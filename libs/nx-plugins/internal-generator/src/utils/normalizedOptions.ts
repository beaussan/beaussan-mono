import {
  SupportedLibGenerators,
  TagScope,
  tagScopeList,
  tagToGenerator,
  TagType,
  tagTypeList,
} from './consts';
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
  libGenerator: SupportedLibGenerators;
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

export function safeGetScope(scope: unknown): TagScope {
  try {
    return scopeSchema.parse(scope);
  } catch (e) {
    if (e instanceof ZodError) {
      throw fromZodError(e);
    }
    throw e;
  }
}
export function safeGetType(type: unknown): TagType {
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
    libGenerator: tagToGenerator[scope][type],
    tags,
    directory,
    ...folders,
    parsedTags,
  };
}
