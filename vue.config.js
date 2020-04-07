module.exports = {
  pages: {
    index: {
      entry: "docs/src/desktop/main.ts",
      outputDir: "docs/dist/desktop/",
      template: "docs/public/index.html",
      chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    demo: {
      entry: "docs/src/demo/main.ts",
      outputDir: "docs/dist/demo/",
      template: "docs/public/index.html",
      filename: "demo.html",
      chunks: ["chunk-vendors", "chunk-common", "demo"]
    }
  },

  chainWebpack: (config) => {
    // https://github.com/neutrinojs/webpack-chain/tree/v4
    config.resolve.alias
      .set("@", `${__dirname}/docs/src`)
      .set("@@", `${__dirname}/packages`)
      .end()
      .extensions.add(".md")
      .prepend(".ts")
      .prepend(".tsx")
      .end();

    config.module
      .rule("md")
      .test(/\.md$/)
      .use("marked")
      .loader("vue-loader");

    config.module
      .rule("md")
      .use("marked2")
      .loader("@vant/markdown-loader");

    config.module
      .rule("eslint")
      .test(/\.(vue|(j|t)sx?)$/)
      .pre()
      .exclude.add(/node_modules/)
      .add(/build/)
      .add(/lib/)
      .add(/docs/)
      .add(/README/)
      .end()
      .use("eslint")
      .loader("eslint-loader")
      .options({
        extensions: [".js", ".jsx", ".vue", ".ts", ".tsx"]
      });
  },

  devServer: {
    disableHostCheck: true
  }
};
