const path = require("path");
const webpack = require("webpack");
 
const frontConfig = {
    mode: "development",
    entry: "./src/js/twitter.js",
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
            test: /\.(css)$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        },
        {
            test: /\.(js|jsx)$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
};

const backConfig = {
    mode: "development",
    entry: "./src/js/main.js",
    target: "node",
    output: {
        filename: "bundle-back.js"
    },
};

module.exports = [ frontConfig, backConfig ];
