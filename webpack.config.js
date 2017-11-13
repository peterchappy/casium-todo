/*
    ./webpack.config.js
*/
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './src/index.tsx',

  devServer: {
    inline: true,
    historyApiFallback: true,
    disableHostCheck: true,
  },

  context: path.resolve('.'),

  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [{
      test: /\.[tj]sx?$/,
      loader: 'awesome-typescript-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [HtmlWebpackPluginConfig],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
}