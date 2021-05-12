const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

const rootPath = path.resolve(__dirname, './../');
const srcPath = path.resolve(rootPath, 'src');
const stylesPath = path.resolve(srcPath, 'renderer/styles.scss');

const main = {
  entry: path.resolve(srcPath, 'main/main.ts'),
  output: {
    filename: 'main.js',
  },
  module: {
    rules: [{
      test: /\.ts$/,
      include: [
        srcPath,
      ],
      exclude: [
        path.resolve(rootPath, 'node_modules'),
      ],
      loader: 'ts-loader',
    }]
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(srcPath, 'package.json') }
      ]
    }),
  ],
  target: 'electron-main',
  externals: [
    nodeExternals(),
  ],
  node: {
    __filename: true,
    __dirname: true,
  },
};

const renderer = {
  entry: {
    polyfills: path.resolve(srcPath, 'renderer/polyfills.ts'),
    renderer: path.resolve(srcPath, 'renderer/main.ts'),
    styles: stylesPath,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [
          srcPath,
        ],
        exclude: [
          path.resolve(rootPath, 'node_modules'),
        ],
        use: [
          'ts-loader',
          'angular2-template-loader',
        ],
      },
      {
        test: /\.component\.html$/,
        use: [
          'html-loader',
          {
            loader: 'prettier-loader',
            options: {
              parser: 'angular',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(rootPath, './src/renderer/index.html'),
      filename: 'index.html',
    }),
    new StylelintPlugin({
      configFile: path.resolve(rootPath, 'config', '.stylelintrc.json'),
      files: 'src/**/*.s?(a|c)ss',
      fix: true,
    }),
  ],
  target: 'electron-renderer',
  node: {
    __dirname: true,
    __filename: true,
  },
};

const preload = {
  entry: path.resolve(srcPath, 'preload/preload.ts'),
  output: {
    filename: 'preload.js',
  },
  module: {
    rules: [{
      test: /\.ts$/,
      include: [
        srcPath,
      ],
      exclude: [
        path.resolve(rootPath, 'node_modules'),
      ],
      loader: 'ts-loader',
    }]
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  target: 'electron-preload',
  node: {
    __filename: true,
    __dirname: true,
  },
};

module.exports = {
  main: main,
  renderer: renderer,
  preload: preload,
  rootPath: rootPath,
  srcPath: srcPath,
  stylesPath: stylesPath,
};
