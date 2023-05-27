import * as z from 'zod';

export type TagGroupMap = Record<
  string,
  {
    prefix: string;
    tags: readonly string[];
    description: string;
    allowMultiplePerProject: boolean;
    shouldAlwaysBePresent: boolean;
    tagsMeta: z.ZodType;
  }
>;

export type ImportMap<T extends string> = Record<T, boolean>;

export type TagDefNew<T extends TagGroupMap> = {
  [Key in keyof T]: Record<
    T[Key]['tags'][number],
    {
      description: string;
      canImport: ImportMap<T[Key]['tags'][number]>;
      meta: z.output<T[Key]['tagsMeta']>;
    }
  >;
};

export const tagGropus = {
  scope: {
    description:
      'A scope tag is used to add boundaries between modules of the monorepo.',
    prefix: 'scope:',
    tags: ['dash', 'baby-watch', 'nx-plugins', 'shared'] as const,
    allowMultiplePerProject: false,
    shouldAlwaysBePresent: true,
    tagsMeta: z.object({
      libraryGenerator: z.object({
        canBeGenerated: z.boolean(),
      }),
    }),
  },
  type: {
    description: 'A type tag is used to add information about a library.',
    prefix: 'type:',
    tags: [
      'utils',
      'data',
      'ui',
      'feature',
      'app',
      'storybook',
      'e2e',
    ] as const,
    allowMultiplePerProject: false,
    shouldAlwaysBePresent: true,
    tagsMeta: z.object({
      libraryGenerator: z.object({
        canBeGenerated: z.boolean(),
        shouldGenerateStorybook: z.boolean(),
      }),
    }),
  },
} as const satisfies TagGroupMap;

export const tagDefs = {
  scope: {
    shared: {
      description: 'Shared libraries, used across all other libraries',
      canImport: {
        shared: true,
        dash: false,
        'baby-watch': false,
        'nx-plugins': false,
      },
      meta: {
        libraryGenerator: {
          canBeGenerated: true,
        },
      },
    },
    dash: {
      description: 'Dash application related libraries',
      canImport: {
        dash: true,
        'baby-watch': false,
        'nx-plugins': false,
        shared: true,
      },
      meta: {
        libraryGenerator: {
          canBeGenerated: true,
        },
      },
    },
    'nx-plugins': {
      description: 'Nx plugins, internal or external',
      canImport: {
        shared: true,
        'baby-watch': false,
        'nx-plugins': true,
        dash: false,
      },
      meta: {
        libraryGenerator: {
          canBeGenerated: false,
        },
      },
    },
    'baby-watch': {
      description: 'Baby watch application',
      canImport: {
        shared: true,
        'baby-watch': true,
        dash: false,
        'nx-plugins': false,
      },
      meta: {
        libraryGenerator: {
          canBeGenerated: true,
        },
      },
    },
  },
  type: {
    utils: {
      description: 'Utilities library, ex : date-utils, zod-utils',
      canImport: {
        data: false,
        feature: false,
        ui: false,
        utils: true,
        e2e: false,
        app: false,
        storybook: false,
      },
      meta: {
        libraryGenerator: {
          canBeGenerated: true,
          shouldGenerateStorybook: false,
        },
      },
    },
    data: {
      description: 'Data library, with state management and network',
      canImport: {
        data: true,
        feature: false,
        ui: false,
        utils: true,
        e2e: false,
        app: false,
        storybook: false,
      },
      meta: {
        libraryGenerator: {
          canBeGenerated: true,
          shouldGenerateStorybook: false,
        },
      },
    },
    ui: {
      description: 'Ui library, with only component getting data via props',
      canImport: {
        data: false,
        feature: false,
        ui: true,
        utils: true,
        e2e: false,
        app: false,
        storybook: false,
      },
      meta: {
        libraryGenerator: {
          canBeGenerated: true,
          shouldGenerateStorybook: true,
        },
      },
    },
    feature: {
      description:
        'Feature library, with connected ui & data to make a feature',
      canImport: {
        data: true,
        feature: true,
        ui: true,
        utils: true,
        e2e: false,
        app: false,
        storybook: false,
      },
      meta: {
        libraryGenerator: {
          canBeGenerated: true,
          shouldGenerateStorybook: true,
        },
      },
    },
    app: {
      description: 'Application, where the orchestration is done',
      canImport: {
        data: true,
        app: false,
        utils: true,
        ui: true,
        e2e: false,
        feature: true,
        storybook: false,
      },
      meta: {
        libraryGenerator: {
          canBeGenerated: false,
          shouldGenerateStorybook: false,
        },
      },
    },
    storybook: {
      description: 'A storybook host, used to aggregate stories',
      canImport: {
        data: true,
        e2e: false,
        app: false,
        storybook: true,
        utils: true,
        feature: true,
        ui: true,
      },
      meta: {
        libraryGenerator: {
          canBeGenerated: false,
          shouldGenerateStorybook: false,
        },
      },
    },
    e2e: {
      description: 'End to end tests projects',
      canImport: {
        data: true,
        e2e: true,
        app: true,
        ui: true,
        storybook: true,
        feature: true,
        utils: true,
      },
      meta: {
        libraryGenerator: {
          canBeGenerated: false,
          shouldGenerateStorybook: false,
        },
      },
    },
  },
} as const satisfies TagDefNew<typeof tagGropus>;

export type ScopeTagsList = (typeof tagGropus)['scope']['tags'][number];
export type TypeTagsList = (typeof tagGropus)['type']['tags'][number];

export const libGeneratorScopeThatCanBeGenerated = Object.entries(tagDefs.scope)
  .map(([tag, data]) =>
    data.meta.libraryGenerator.canBeGenerated ? tag : undefined
  )
  .filter((value) => !!value) as ScopeTagsList[];

export const libGeneratorTypeThatCanBeGenerated = Object.entries(tagDefs.type)
  .map(([tag, data]) =>
    data.meta.libraryGenerator.canBeGenerated ? tag : undefined
  )
  .filter((value) => !!value) as TypeTagsList[];
