const transferCommonStyle = require("./plugin/transferCommonStyle");

module.exports = {
  presets: [
    "vca-jsx",
    [
      "@babel/preset-env",
      {
        loose: false,
        modules: "commonjs"
      }
    ],
    [
      "@vue/babel-preset-jsx",
      {
        functional: false
      }
    ],
    "@babel/preset-typescript"
  ],
  plugins: [
    "@babel/plugin-proposal-optional-chaining",
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: false,
        helpers: true,
        regenerator: true,
        useESModules: false
      }
    ],
    "@babel/plugin-transform-object-assign",
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true
        // decoratorsBeforeExport: true
      }
    ],
    [
      "@babel/plugin-proposal-class-properties",
      {
        loose: true
      }
    ],
    [transferCommonStyle]
  ]
};
