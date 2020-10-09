const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base.js');

const devConfig = {
  mode: 'development',
  watch: true,
  // 只有开启监听模式，watchOptions才有意义
  watchOptions: {
    // 默认为空，不监听的文件或文件夹，支持正则表达
    ignored: /node_modules/,
    // 监听到变化后等待300ms再去执行，默认300ms
    aggregateTimeout: 300,
    // 轮询频率，每秒1000次
    poll: 1000,
  },
  // 热更新
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hotOnly: true,
    // hot: true,
    host: '172.24.2.4',
    stats: 'errors-only',
  },
};

module.exports = merge(baseConfig, devConfig);
