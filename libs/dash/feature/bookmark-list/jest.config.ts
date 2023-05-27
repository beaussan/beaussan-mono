/* eslint-disable */
export default {
  displayName: 'dash-feature-bookmark-list',
  preset: '../../../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/dash/feature/bookmark-list',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
};
