var path = require('path');
var webpack = require('webpack')

module.exports = {
  entry: './src/components/',
  output: {
    library: 'HelloMsg',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'lib'),
    filename: 'vue-hello-msg.js'
  },
  externals:{
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  module: {
    rules: [
      { test: /\.vue$/, use: ['vue-loader'] },
      { test: /\.js$/,exclude: /node_modules/, use: ['babel-loader'] }
    ]
  },

};
