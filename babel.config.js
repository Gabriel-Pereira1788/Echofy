module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@styles': './src/styles',
          '@screens': './src/screens',
          '@components': './src/components',
          '@assets': './src/assets',
          '@router': './src/router',
          '@shared': './src/shared',
          '@domain': './src/domain',
          '@infra': './src/infra',
        },
      },
    ],
  ],
};
