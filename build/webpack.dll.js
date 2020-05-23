const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    vendor: ['vue', 'vue-router', 'axios', 'vuex']
  },
  output: {
    path: path.join(__dirname, '../public/static/js/'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    // 清除之前的dll文件
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      path: path.join(__dirname, '.', '[name]-manifest.json'),
      name: '[name]_library'
    })
  ]
}
