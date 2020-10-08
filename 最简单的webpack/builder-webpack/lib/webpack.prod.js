const { merge } = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');
const baseConfig = require('./webpack.base.js');

const prodConfig = {
  plugins: [
    // 代码压缩
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/,
      cssProcessor: cssnano,
    }),
  ],
  // 体积优化
  optimization: {
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        // 公共模块
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
        },
        // 基础库
        vendor: {
          test: /(react|react-dom)/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  mode: 'production',
};

module.exports = merge(baseConfig, prodConfig);
