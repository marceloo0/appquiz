module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.js', '.json'],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@assets': './src/assets',
            '@context': './src/context',
            '@hooks': './src/hooks',
            '@utils': './src/utils',
            '@services': './src/services',
            '@constants': './src/constants',
          },
        },
      ],
    ],
  };
};
