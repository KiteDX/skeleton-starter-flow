//const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const shared = require("../share.js");

module.exports = {
  entry: "./src/index",
  mode: "development",
  /*
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3002,
  },
  */
  output: {
    publicPath: "Core/",
    path: path.join(__dirname, "../App/dist/Core"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "core",
      filename: "core.js",
      exposes: {
        "./vaadin-button": "./node_modules/@vaadin/vaadin-button/vaadin-button",
        "./vaadin-combo-box": "./node_modules/@vaadin/vaadin-combo-box/vaadin-combo-box",
        "./vaadin-vertical-layout": "./node_modules/@vaadin/vaadin-ordered-layout/vaadin-vertical-layout"
      },
      shared,
    }),
/*    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  */
  ],
};
