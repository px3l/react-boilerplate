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

  resolve: {
    extensions: ['', '.scss', '.js', '.json', '.md'],
    packageMains: ['browser', 'web', 'browserify', 'main', 'style'],
    modulesDirectories: [
      'node_modules'
    ]
  },

  /*
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-1']
        }
      },
      {
        test: /(\.css|\.scss)$/,
        loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass?sourceMap'
      }
    ]
  }*/

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }, {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap')
      }
    ]
  },

  postcss: [autoprefixer],
  sassLoader: {
    data: '@import "' + path.resolve(__dirname, 'src/theme/_theme.scss') + '";'
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
    new ExtractTextPlugin('app.css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
};
