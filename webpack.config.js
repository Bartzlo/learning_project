'use strict'

const dev = true

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    bundle: ['./src/scripts/main.jsx']
  },

  output: {
    filename: '[name].js'
  },

  module: {
    rules: [
      { test: /\.jsx$|\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },

  plugins: [
    new UglifyJsPlugin({test: dev ? /\.disabled/ : /\.js$/}),
    new webpack.ProvidePlugin({
      React: dev ? 'react/umd/react.development.js' : 'react/umd/react.production.min.js',
      ReactDOM: dev ? 'react-dom/umd/react-dom.development.js' : 'react-dom/umd/react-dom.production.min.js'
    })
  ],

  // devtool: dev ? 'source-map' : '', // for IE and EDGE debug
  devtool: dev ? 'eval-source-map' : ''
}
