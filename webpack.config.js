var path = require('path');
var webpack = require('webpack');
var config = {
  entry: {
    src: ['./src/js/app.js']
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader!babel-loader' },
      { test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM' },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  }
};

module.exports = config;
