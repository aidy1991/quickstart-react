const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = path.join(__dirname, 'src');
const dist = path.join(__dirname, 'dist');
const NODE_ENV_MODE = process.env.NODE_ENV_MODE || 'development';

module.exports = {
  context: src,
  entry: './javascripts/routes.jsx',
  output: {
    path: dist,
    filename: 'bundle.js',
  },
  mode: NODE_ENV_MODE,
  devServer: {
    contentBase: 'dist',
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || '5100',
    inline: false,
    hot: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
          },
        ],
      },
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: (loader) => [
                require('postcss-import')({ root: loader.resourcePath }),
                require('postcss-cssnext')(),
                require('postcss-nesting')(),
              ],
            },

          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Quick start for React',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
