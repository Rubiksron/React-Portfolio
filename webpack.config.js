
'use strict'

const HTMLPlugin = require('html-webpack-plugin')
const ExtractPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'eval',
  entry: `${__dirname}/src/main.js`,
  output: {
    filename: 'docs-[hash].js',
    path: `${__dirname}/docs`,
    publicPath: '/',
  },
  plugins: [
    new HTMLPlugin({template: `${__dirname}/src/index.html` }),
    new ExtractPlugin('docs-[hash].css'),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(jpeg|jpg|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'image/[name].[ext]'
            }
          }

        ]
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract(['css-loader', 'sass-loader']),
      },
    ],
  },
}
