'use strict';

var path = require('path')
var webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

var RELEASE = process.env.NODE_ENV == 'production' ? true : false;

var nodeEnvPlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': RELEASE ? '"production"' : '"development"'
})

// fix ERROR in ./~/react-tap-event-plugin
var reactDomLibPath = path.join(__dirname, "./node_modules/react-dom/lib");
var alias = {};
["EventPluginHub", "EventConstants", "EventPluginUtils", "EventPropagators",
 "SyntheticUIEvent", "CSSPropertyOperations", "ViewportMetrics"].forEach(function(filename){
    alias["react/lib/"+filename] = path.join(__dirname, "./node_modules/react-dom/lib", filename);
});


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
    new ExtractTextPlugin('app.css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ] : [
    // development plugins
    nodeEnvPlugin,
    new ExtractTextPlugin('app.css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],

  resolve: {
    alias: alias // fix ERROR in ./~/react-tap-event-plugin
  },

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
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }, {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap')
      }
    ]
  }
};
