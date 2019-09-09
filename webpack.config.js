const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
 
const frontConfig = {
    mode: "development",
    entry: "./src/twitter.js",
    output: {
        filename: "bundle-front.js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
        publicPath: "/js/",
        watchContentBase: true, // live reload
        compress: true,
        port: 9000
    },
    devtool: "source-map", // map
    module: {
        rules: [{
            test: /\.(scss|css)$/,
            exclude: /node_modules/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        },
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.html$/,
            use: {
                loader: "html-loader"
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        })
    ]
};

const backConfig = {
    mode: "development",
    entry: "./src/main.js",
    target: "node",
    output: {
        filename: "bundle-back.js"
    },
};

module.exports = [ frontConfig, backConfig ];
