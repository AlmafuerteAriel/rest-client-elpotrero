const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  // module: {
  //   rules: [
  //     {
  //       test: /\.(css|scss|sass)$/,
  //       use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
  //     },
  //   ],
  // },
  optimization: {
    splitChunks: {
      chunks: "all",
      name: false,
    },
  },
});
