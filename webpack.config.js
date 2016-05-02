var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
 
module.exports = {
  entry: "./client/main.js",
  output: {
    path: __dirname + '/public/build/',
    publicPath: "build/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /public/],
        query: {
          presets: ['es2015', 'react']
        }
      },
      { 
        test: /\.styl$/, 
        loader: ExtractTextPlugin.extract("style-loader", "css-loader?minimize!stylus") 
      },
      ,
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css")
  ]
};