const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    clean: true,
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  optimization: {
    usedExports: true,
  }
};