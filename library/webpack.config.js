const path = require('path');

module.exports = {
  entry: {
    main: './src/utils.js'
  },
  output: {
    filename: 'utils.js',
    library: {
      name: 'utils',
      type: 'umd',
    },
    path: path.resolve(__dirname, 'dist'),
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
};