export const tagTypeList = [
  'feature',
  'ui',
  'data',
  'utils',
  'types',
  'storybook',
] as const;
export type TagType = typeof tagTypeList[number];

export const tagScopeList = ['dash', 'shared'] as const;
export type TagScope = typeof tagScopeList[number];
