module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/src/test/jestSetup.ts'],
  moduleDirectories: ['node_modules', './src/test'],
  modulePathIgnorePatterns: ['.*/mockedData/.*'],

  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|react-native-safe-area-context|reactotron-react-native|@react-navigation|realm|@realm)/)',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
