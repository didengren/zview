const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = require("./webpack.base");

module.exports = merge(config, {
  entry: {
    docs: "./docs/site/desktop/main.js"
  },
  output: {
    path: path.join(__dirname, "../docs/dist"),
    publicPath: "/",
    chunkFilename: "async_[name].js"
  },
  devServer: {
    open: "Google Chrome",
    progress: true,
    host: "0.0.0.0",
    stats: "errors-only"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        chunks: {
          chunks: "all",
          minChunks: 2,
          minSize: 0,
          name: "chunks"
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ["chunks", "docs"],
      template: path.join(__dirname, "../docs/site/desktop/index.html"),
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      chunks: ["chunks", "mobile"],
      template: path.join(__dirname, "../docs/site/mobile/index.html"),
      filename: "mobile.html"
    })
  ]
});
