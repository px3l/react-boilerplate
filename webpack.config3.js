'use strict';

var path = require('path')
var webpack = require('webpack')

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

  // fix ERROR in ./~/react-tap-event-plugin
  resolve: {alias: alias},

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
