/* eslint-disable */
export default {
  displayName: 'shared-utils-supertokens-react',
  preset: '../../../../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory:
    '../../../../../coverage/libs/shared/utils/supertokens/react',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
};
