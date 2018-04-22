const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: "./src/js/output-module.js",
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },  
      module: {
        rules: [
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
          }
        ]
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html' 
        }),
        new ExtractTextPlugin("styles.css"),
    ],
    // watch: true
}