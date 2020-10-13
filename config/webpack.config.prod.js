const path = require('path');
const { merge } = require('webpack-merge');
const JavaScriptObfuscator = require('webpack-obfuscator');
const common = require('./webpack.config.common');

const outputPath = path.resolve(common.rootPath, 'dist/prod');

const main = merge(common.main, {
  mode: 'production',
  output: {
    path: outputPath,
  },
  plugins: [
    new JavaScriptObfuscator({
      rotateUnicodeArray: true
    }),
  ]
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
        use: [
          'to-string-loader',
          'css-loader',
          'sass-loader',
        ],
        exclude: [
          common.stylesPath,
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
        include: [
          common.stylesPath,
        ],
      },
    ],
  },
  plugins: [
    new JavaScriptObfuscator({
      rotateUnicodeArray: true
    }),
  ]
});

module.exports = [
  main,
  renderer,
];
