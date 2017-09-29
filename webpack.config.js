const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './app.jsx',

  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },

  resolve: {
    root: [
      __dirname + "/node_modules",
    ],
    extensions: ['', '.js', '.jsx'],
  },

  watchOptions: {
    aggregateTimeout: 100,
  },

  devtool: NODE_ENV === 'development' ? 'source-map' : null,

  plugins: [
    new CleanWebpackPlugin(['public']),
    new HtmlWebpackPlugin({
      title: 'EPG Screen',
      template: './index.ejs',
      filename: './index.html',
      chunks: ['main'],
    }),
  ],

  module: {
    preLoaders: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['eslint'],
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot'],
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
        }
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
    ]
  },

  devServer: {
    port: 8081,
    inline: true,
    hot: true,
  }

};

if (NODE_ENV === 'development') {
  module.exports.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
}

if (NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true,
      },
    })
  );
}
