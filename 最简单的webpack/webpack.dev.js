'use strict'
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        index: './src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /.(jpg|png|jpeg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 102400  //100k
                        }
                    }
                ]
            },
            {
                test: /.(otf|tff)$/,
                use: "file-loader"
            }
        ]
    },
    watch: true,
    // 只有开启监听模式，watchOptions才有意义
    watchOptions: {
        // 默认为空，不监听的文件或文件夹，支持正则表达
        ignored: /node_modules/,
        // 监听到变化后等待300ms再去执行，默认300ms
        aggregateTimeout: 300,
        // 轮询频率，每秒1000次
        poll: 1000
    },
    mode: 'development',
    plugins: [
        // new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hotOnly: true,
        // hot: true,
        host: '172.24.2.4'
    }
}