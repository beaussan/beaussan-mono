/* eslint-disable */
export default {
  displayName: 'shared-data-supertokens-urql-client',
  preset: '../../../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory:
    '../../../../coverage/libs/shared/data/supertokens-urql-client',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
};
