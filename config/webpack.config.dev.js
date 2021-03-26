const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');

const outputPath = path.resolve(common.rootPath, 'dist/dev');

const main = merge(common.main, {
  mode: 'development',
  output: {
    path: outputPath,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(common.srcPath, 'locales/'),
          to: path.resolve(outputPath, 'locales/')
        },
      ]
    }),
  ],
  devtool: 'inline-source-map',
});

const renderer = merge(common.renderer, {
  mode: 'development',
  output: {
    path: outputPath,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'to-string-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
        exclude: [
          common.stylesPath,
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
        include: [
          common.stylesPath,
        ],
      },
    ],
  },
  devtool: 'inline-source-map',
});

const preload = merge(common.preload, {
  mode: 'development',
  output: {
    path: outputPath,
  },
  devtool: 'inline-source-map',
});

module.exports = [
  main,
  renderer,
  preload,
];
