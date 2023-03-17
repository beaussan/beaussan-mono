/* eslint-disable */
export default {
  displayName: 'nx-plugins-internal-generator-e2e',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../coverage/apps/nx-plugins/internal-generator-e2e',
};
