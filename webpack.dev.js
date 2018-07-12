//
//
//
const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const autoprefixer = require('autoprefixer');
const pixrem = require('pixrem');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var StyleLintPlugin = require('stylelint-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  
  mode: 'development',
  
  devServer: {
    contentBase: [
      path.resolve('_site'),
    ],
    hot: true
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () =>  [
                pixrem ({unitPrecision: 3}),
                autoprefixer ({grid: true})
              ],
              sourceMap: true
            }
          },
          'sass-loader'           
        ]
      }      
    ]
  },

  plugins: [
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8888',
        files: ["_site", "_src"]
      },
      {
        reload: false
      }
    ),
    new StyleLintPlugin({
      context: '../src/css/fsa-design-system.css'
    })
  ]
});