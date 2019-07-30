var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * Wordpress dependencies
 */
var defaultConfig = require("@wordpress/scripts/config/webpack.config");
/**
 * Plugin dependencies
 */
var webpack = require("webpack");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
/**
 * Environment
 */
var production = process.env.NODE_ENV === "production";
var mode = production ? "production" : "development";
/**
 * Webpack config
 */
module.exports = __assign({}, defaultConfig, { mode: mode, entry: __assign({}, defaultConfig.entry, { editor: ["./src/index.js"], "editor-styles": ["./src/editor-styles.scss"], client: ["./src/client.js"], "client-styles": ["./src/client-styles.scss"] }), devtool: production ? false : "inline-source-map", module: __assign({}, defaultConfig.module, { rules: defaultConfig.module.rules.concat([
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
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
            }
        ]) }), resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }, output: __assign({}, defaultConfig.output, { path: __dirname + "/dist/" }), plugins: defaultConfig.plugins.concat([
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]) });
//# sourceMappingURL=webpack.config.js.map