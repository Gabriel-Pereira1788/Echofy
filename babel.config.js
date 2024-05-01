module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@api': './src/api',
          '@animations': './src/app/animations',
          '@styles': './src/app/styles',
          '@screens': './src/app/screens',
          '@components': './src/app/components',
          '@assets': './src/app/assets',
          '@router': './src/app/router',
          '@shared': './src/app/shared',
          '@domain': './src/domain',
          '@infra': './src/infra',
          '@database': './src/database',
          '@types': './src/@types',
          '@providers': './src/app/providers',
          '@utils': './src/app/helpers/utils',
          '@services': './src/app/services',
          '@hooks': './src/app/helpers/hooks',
          '@test': './src/test',
          '@mocks': './src/mocks',
        },
      },
    ],
  ],
};
