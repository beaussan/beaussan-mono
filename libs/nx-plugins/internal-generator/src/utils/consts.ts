export const tagTypeList = [
  'feature',
  'ui',
  'data',
  'utils',
  'storybook',
] as const;
export type TagType = typeof tagTypeList[number];

export const tagThatShouldGoIntoStorybook: TagType[] = ['feature', 'ui'];

export const tagScopeList = ['dash', 'shared', 'demo-storybook'] as const;
export type TagScope = typeof tagScopeList[number];

export const supportedLibGenerators = ['react', 'ts'] as const;
export type SupportedLibGenerators = typeof supportedLibGenerators[number];

type TagToKindOfGeneratorMap = Record<
  TagScope,
  Record<Exclude<TagType, 'storybook'>, SupportedLibGenerators>
>;

export const tagToGenerator: TagToKindOfGeneratorMap = {
  dash: {
    feature: 'react',
    ui: 'react',
    data: 'react',
    utils: 'react',
  },
  'demo-storybook': {
    feature: 'react',
    ui: 'react',
    data: 'react',
    utils: 'react',
  },
  shared: {
    feature: 'react',
    ui: 'react',
    data: 'react',
    utils: 'react',
  },
};
