const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './js/script.js',
  output: {
    path: path.resolve(path.join(__dirname, '../public/masala/')),
    filename: 'script.js'
  },
  module: {
    rules: [
      {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
              presets: ['@babel/env']
          }
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
    ]
  },
  watch: true,
  watchOptions: {
    poll: true
  }
}

module.exports = config;