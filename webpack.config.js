const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    background: "./src/background.ts",
    content: "./src/content.ts",
    options: "./src/options/index.tsx",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]/index.js",
  },
  mode: "none",
  devtool: "inline-source-map",
  plugins: [
    // TODO: find out why process is undefined and remove the plugin below
    new webpack.DefinePlugin({ process: { env: {} } }),
    new HtmlWebpackPlugin({
      chunks: ["options"],
      filename: "options/index.html",
      template: "src/options/index.html",
    }),
  ],
};
