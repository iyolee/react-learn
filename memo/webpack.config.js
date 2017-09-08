/*
 * @file webpack配置文件(开发环境)
 * @author leeper
 * @date 2017-07-22
 */

const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'sourceMap',
  entry: {
    bundle: './src/index.js',
    vendor: ['react', 'react-dom', 'react-router', 'redux']
  },
  output: {
    path: path.join(__dirname, '/build/'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js | jsx)$/,
        loaders: [
          'babel-loader', "babel-preset-es2015", "babel-preset-react"
        ],
        exclude: /node_modules/,
      }, {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'less-loader']
      }, {
        test: /\.(png | jpg)$/,
        loader: 'url-loader?limit=8192'
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack
      .optimize
      .CommonsChunkPlugin({name: ['vendor']})
  ],
  devServer: {
    compress: true, // 启用gzip压缩
    contentBase: path.join(__dirname, '/src'),
    port: 3000, // 运行端口3000
    inline: true,
    hot: true,
    historyApiFallback: true
  }
}