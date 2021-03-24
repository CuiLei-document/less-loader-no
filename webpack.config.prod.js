const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    entry:'./src/index.js',
    output:{
        filename: 'index.[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
        title: 'cui',
        template: 'src/assets/index.html'
    }),
        new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].[contenthash].css',
        }),
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
            // use: ["style-loader", "css-loader"],
          },
        ],
      },
}