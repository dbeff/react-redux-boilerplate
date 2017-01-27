var webpack = require("webpack");
var path = require("path");
var rules = require("./webpack.config.rules");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var config = {
    devtool: "cheap-module-source-map",
    entry: {
        bundle:"./src/assets/scripts/main.js"
    },
    output: {
        path: path.join(__dirname, "../dist"),
        filename: "assets/scripts/[name]_[chunkhash].js"
    },
    module: rules,
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            favicon: "./src/favicon.ico",
            minify:{
                collapseWhitespace: true,
                removeComments: true,
            }
        }),
    ]
}

module.exports = config;
