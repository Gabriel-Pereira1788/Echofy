module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@api': './src/api',
          '@styles': './src/app/styles',
          '@screens': './src/app/screens',
          '@components': './src/app/components',
          '@assets': './src/app/assets',
          '@router': './src/app/router',
          '@shared': './src/app/shared',
          '@domain': './src/domain',
          '@infra': './src/infra',
          '@types': './src/@types',
          '@providers': './src/app/providers',
          '@store': './src/app/store',
          '@utils': './src/app/helpers/utils',
        },
      },
    ],
  ],
};
