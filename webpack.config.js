'use strict'

const HTMLPlugin = require('html-webpack-plugin')
const ExtractPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'eval',
  entry: `${__dirname}/src/main.js`,
  output: {
    filename: 'bundle-[hash].js',
    path: `${__dirname}/build`,
    publicPath: '/',
  },
  plugins: [
    new HTMLPlugin({template: `${__dirname}/src/index.html` }),
    new ExtractPlugin('bundle-[hash].css'),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader?limit=10000',
          'img-loader'
        ]
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract(['css-loader', 'sass-loader']),
      },
    ],
  },
}
