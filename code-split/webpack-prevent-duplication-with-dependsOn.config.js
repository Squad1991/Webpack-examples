const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    index: {
      import: './src/index.js',
      dependOn: 'shared',
    },
    helper: {
      import: './src/helper.js',
      dependOn: 'shared',
    },
    shared: 'lodash',
  },
  output: {
    filename: '[name].bundle.js',
    clean: true,
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Code split without duplication [loadash is is extracted into one file]',
    }),
    new BundleAnalyzerPlugin()
  ],
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};