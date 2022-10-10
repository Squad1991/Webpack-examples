const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
    another: './src/another.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },
};
