export const tagTypeList = [
  'feature',
  'ui',
  'data',
  'utils',
  'storybook',
] as const;
export type TagType = typeof tagTypeList[number];

export const tagThatShouldGoIntoStorybook: TagType[] = ['feature', 'ui'];

export const tagScopeList = ['dash', 'shared'] as const;
export type TagScope = typeof tagScopeList[number];
