const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: "./src/app.js"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "sass-loader"]
            })
        }]
    },
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'bin')
    },    
    plugins: [
        new CleanWebpackPlugin(['bin']),
        new HtmlWebpackPlugin({
            template: './src/app.html',
            filename: 'index.html' 
        }),
        new ExtractTextPlugin({
            filename: "style.css"
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
   ]
};