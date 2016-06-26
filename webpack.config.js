var path = require('path');
var webpack = require('webpack');
var pkg = require('./package.json');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'assets/bundle-' + pkg.version + '.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  resolve: {
    alias: {
      assets: path.join(__dirname, '/assets')
    },
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html')
    }),
    new ExtractTextPlugin('assets/react-demo-' + pkg.version + '.css')
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(css|less)$/,
        loader: ExtractTextPlugin.extract('style?insertAt=top!', 'css!less')
      },
      {
        test: /\.(jpe?g|png|gif|ttf|woff|woff2|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=assets/[name].[hash:6].[ext]'
      }
    ]
  }
};
