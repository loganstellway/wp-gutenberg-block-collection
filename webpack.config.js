/**
 * Wordpress dependencies
 */
const defaultConfig = require("@wordpress/scripts/config/webpack.config");

/**
 * Plugin dependencies
 */
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 * Environment
 */
const production = process.env.NODE_ENV === "production";
const mode = production ? "production" : "development";

/**
 * Webpack config
 */
module.exports = {
  ...defaultConfig,
  mode,
  entry: {
    ...defaultConfig.entry,
    editor: ["./src/index.js"],
    "editor-styles": ["./src/editor-styles.scss"],
    client: ["./src/client.js"],
    "client-styles": ["./src/client-styles.scss"]
  },
  devtool: production ? false : "inline-source-map", // any 'source-map'-like devtool is possible
  module: {
    ...defaultConfig.module,
    rules: [
      ...defaultConfig.module.rules,
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: !production
            }
          },
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("node-sass"),
              sourceMap: !production
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "ts-loader"],
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    ...defaultConfig.plugins,
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
