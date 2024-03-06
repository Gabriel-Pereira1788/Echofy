module.exports = {
  preset: 'react-native',
  setupFiles: [
    '<rootDir>/src/test/jestSetup.ts',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  moduleDirectories: ['node_modules', './src/test'],
  modulePathIgnorePatterns: ['.*/mockedData/.*'],

  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|react-native-safe-area-context|@react-navigation)/)',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
