module.exports = function(api) {
  // const { BABEL_MODULE, NODE_ENV } = process.env;
  // const useESModules = BABEL_MODULE !== 'commonjs' && NODE_ENV !== 'test';

  api && api.cache(false);

  return {
    presets: ["vca-jsx", "@vue/app"],
    plugins: [
      [
        "import",
        {
          libraryName: "zview",
          style: true
        },
        "zview"
      ]
    ]
  };
};
