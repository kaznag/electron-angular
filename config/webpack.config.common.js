const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    new CopyWebpackPlugin([
      { from: path.resolve(srcPath, 'package.json') }
    ]),
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
        test: /\.html$/,
        use: 'raw-loader',
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
  ],
  target: 'electron-renderer',
  externals: [
    nodeExternals(),
  ],
  node: {
    __dirname: true,
    __filename: true,
  },
};

module.exports = {
  main: main,
  renderer: renderer,
  rootPath: rootPath,
  srcPath: srcPath,
  stylesPath: stylesPath,
};
