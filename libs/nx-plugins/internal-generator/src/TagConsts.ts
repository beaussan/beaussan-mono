export type TagGroupMap = Record<
  string,
  {
    prefix: string;
    tags: readonly string[];
    description: string;
    allowMultiplePerProject: boolean;
    shouldAlwaysBePresent: boolean;
  }
>;

export const tagGropus = {
  scope: {
    description:
      'A scope tag is used to add boundaries between modules of the monorepo.',
    prefix: 'scope:',
    tags: ['dash', 'nx-plugins', 'shared'] as const,
    allowMultiplePerProject: false,
    shouldAlwaysBePresent: true,
  },
  type: {
    description: 'A type tag is used to add information about a library.',
    prefix: 'type:',
    tags: [
      'app',
      'storybook',
      'e2e',
      'feature',
      'ui',
      'data',
      'utils',
    ] as const,
    allowMultiplePerProject: false,
    shouldAlwaysBePresent: true,
  },
} as const satisfies TagGroupMap;

export type ImportMap<T extends string> = Record<T, boolean>;

export type TagDefNew<T extends TagGroupMap> = {
  [Key in keyof T]: Record<
    T[Key]['tags'][number],
    { description: string; canImport: ImportMap<T[Key]['tags'][number]> }
  >;
};

export const tagDefs = {
  scope: {
    shared: {
      description: 'Shared stuff',
      canImport: {
        shared: true,
        dash: false,
        'nx-plugins': false,
      },
    },
    dash: {
      description: 'A dashboard app',
      canImport: {
        dash: true,
        'nx-plugins': false,
        shared: true,
      },
    },
    'nx-plugins': {
      description: 'Nx plugins',
      canImport: {
        shared: true,
        'nx-plugins': true,
        dash: false,
      },
    },
  },
  type: {
    utils: {
      description: 'utils libs',
      canImport: {
        data: false,
        feature: false,
        ui: false,
        utils: true,
        e2e: false,
        app: false,
        storybook: false,
      },
    },
    data: {
      description: 'data libs',
      canImport: {
        data: true,
        feature: false,
        ui: false,
        utils: true,
        e2e: false,
        app: false,
        storybook: false,
      },
    },
    ui: {
      description: 'Ui libs',
      canImport: {
        data: false,
        feature: false,
        ui: true,
        utils: true,
        e2e: false,
        app: false,
        storybook: false,
      },
    },
    feature: {
      description: 'feature libs',
      canImport: {
        data: true,
        feature: true,
        ui: true,
        utils: true,
        e2e: false,
        app: false,
        storybook: false,
      },
    },
    app: {
      description: 'Applications',
      canImport: {
        data: true,
        app: false,
        utils: true,
        ui: true,
        e2e: false,
        feature: true,
        storybook: false,
      },
    },
    e2e: {
      description: 'Test e2e projects',
      canImport: {
        data: true,
        e2e: true,
        app: true,
        ui: true,
        storybook: true,
        feature: true,
        utils: true,
      },
    },
    storybook: {
      description: 'A storybook host, used to agregate stories',
      canImport: {
        data: true,
        e2e: false,
        app: false,
        storybook: true,
        utils: false,
        feature: true,
        ui: true,
      },
    },
  },
} as const satisfies TagDefNew<typeof tagGropus>;
