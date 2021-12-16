const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // to generate separate css file
const HtmlWebpackPlugin = require('html-webpack-plugin') // to generate html with the template
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // to remove old hashed files
const webpack = require('webpack') // to access built-in plugins

module.exports = {
  mode: 'none',
  entry: path.resolve(__dirname, 'input', 'js.js'),
  devtool: 'source-map',
  output: {
    path: path.resolve('public', 'webpack'),
    filename: 'bundle.[contenthash].js',
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'input', 'template.html'),
      title: 'Webpack generated file',
      filename: 'index.html',
      inject: 'head',
      scriptLoading: 'defer'
    }),

  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'autoprefixer',
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'autoprefixer',
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          'sass-loader'
        ],
      },
    ],
  },
}
