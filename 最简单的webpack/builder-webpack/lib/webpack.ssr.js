const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const { merge } = require('webpack-merge');
const cssnano = require('cssnano');
const baseConfig = require('./webpack.base.js');

const SSRConfig = {
  module: {
    rules: [
      {
        test: /\.js|.jsx$/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        test: /.css$/,
        use: [
          // "style-loader", style-loader和MiniCssExtractPlugin功能冲突（前者将css插到html头部，后者将css提取到独立文件）
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /.less$/,
        use: [
          // HtmlInlineCssWebpackPlugin.loader,
          // {
          //     loader: "style-loader",
          //     options: {
          //         insert: 'head', // 样式插入到 <head> 其他选项body
          //         // singleton: true, //将所有的style标签合并成一个
          //     }
          // },
          MiniCssExtractPlugin.loader, // 将css 单独 拆分为一个文件
          'css-loader',
          'postcss-loader',
          'less-loader',
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 75,
              remPrecision: 8,
            },
          },
        ],
      },
      {
        test: /.(jpg|png|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 102400, // 100k
            },
          },
        ],
      },
      {
        test: /.(otf|tff)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css',
    }),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/,
      cssProcessor: cssnano,
    }),
  ],
  mode: 'production',
  devtool: 'none',
};

module.exports = merge(baseConfig, SSRConfig);
