'use strict';

var path = require('path')
var webpack = require('webpack')

var RELEASE = process.env.NODE_ENV == 'production' ? true : false;

var nodeEnvPlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': RELEASE ? '"production"' : '"development"'
})

module.exports = {
  devtool: RELEASE ? [] : 'inline-source-map',
  entry: [
    './src/app'
  ],
    
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },

  plugins: RELEASE ? [
    // production plugins
    nodeEnvPlugin,

    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ] : [
    // development plugins
    nodeEnvPlugin
  ],

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-1']
        }
      }

    ]
  }
};
