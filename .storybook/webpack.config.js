const path = require("path");

module.exports = async ({ config, mode }) => {
  config.mode = 'development';
  config.module.rules.push(
    {
      test: /\.less$/,
      sideEffects: true,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        {
          loader: 'less-loader',
          options: {
            paths: [path.resolve(__dirname, 'node_modules')]
          }
        }
      ]
    }
  );
  config.module.rules.push({
    test: /\.story\.js?$/,
    loaders: [require.resolve("@storybook/addon-storysource/loader")],
    enforce: "pre"
  });
  // Return the altered config
  return config;
};
