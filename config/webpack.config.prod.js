const path = require('path');
const { merge } = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const JavaScriptObfuscator = require('webpack-obfuscator');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.config.common');

const outputPath = path.resolve(common.rootPath, 'dist/prod');

const main = merge(common.main, {
  mode: 'production',
  output: {
    path: outputPath,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(common.srcPath, 'locales/'),
          to: path.resolve(outputPath, 'locales/'),
        },
      ],
    }),
    new JavaScriptObfuscator(
      {
        rotateUnicodeArray: true,
      },
      []
    ),
  ],
});

const renderer = merge(common.renderer, {
  mode: 'production',
  output: {
    path: outputPath,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['to-string-loader', 'css-loader', 'sass-loader'],
        exclude: [common.stylesPath],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        include: [common.stylesPath],
      },
    ],
  },
  plugins: [
    new JavaScriptObfuscator({
      rotateUnicodeArray: true,
    }),
    new MiniCssExtractPlugin(
      {
        filename: '[name].css',
      },
      []
    ),
  ],
});

const preload = merge(common.preload, {
  mode: 'production',
  output: {
    path: outputPath,
  },
  plugins: [
    new JavaScriptObfuscator(
      {
        rotateUnicodeArray: true,
      },
      []
    ),
  ],
});

module.exports = [main, renderer, preload];
