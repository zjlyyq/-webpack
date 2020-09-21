'use strict'
const glob = require('glob')
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlInlineCssWebpackPlugin = require('html-inline-css-webpack-plugin').default
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')

const setMPA = () => {
    const entry = {};
    const htmlWebpackPlugins = [];
    let entries = glob.sync(path.join(__dirname, './src/*/index.js'))
    // console.log(entries)
    entries.map(item => {
        let match = item.match(/src\/(.*)\/index\.js/);
        let pageName = match[1];
        entry[pageName] = item;
        htmlWebpackPlugins.push(
            new HtmlWebpackPlugin({
                template: path.join(__dirname, `src/${pageName}/${pageName}.html`),
                filename: `${pageName}_uglify.html`,
                chunks: ['vendors', pageName],
                inject: true,
                minify: {
                    html5: true,
                    collapseWhitespace: true,
                    preserveLineBreaks: false,
                    minifyCSS: true,
                    minifyJS: true,
                    removeComments: false
                }
            }),
        )
    })
    console.log(entry, htmlWebpackPlugins)
    return {
        entry,
        htmlWebpackPlugins
    }
}
let mpa = setMPA()
module.exports = {
    // entry: {
    //     index: './src/index/index.js',
    //     search: './src/search/index.js'
    // },
    entry: mpa.entry,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]_[chunkhash:8].js'
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
                    // "style-loader", style-loader和MiniCssExtractPlugin功能冲突（前者将css插到html头部，后者将css提取到独立文件）
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
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
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "less-loader",
                    {
                        loader: 'px2rem-loader',
                        options: {
                            remUnit: 75,
                            remPrecision: 8
                        }
                    }
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
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css'
        }),
        new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /\.css$/,
            cssProcessor: require('cssnano')
        }),
        // new HtmlWebpackPlugin({
        //     template: path.join(__dirname, 'src/search/search.html'),
        //     filename: 'search_uglify.html', 
        //     chunks: ['search'],
        //     inject: true,
        //     minify: {
        //         html5: true,
        //         collapseWhitespace: true,
        //         preserveLineBreaks: false,
        //         minifyCSS: true,
        //         minifyJS: true,
        //         removeComments: false
        //     }
        // }),
        ...mpa.htmlWebpackPlugins,
        new CleanWebpackPlugin(),
        new HtmlInlineCssWebpackPlugin(),
        // new HtmlWebpackExternalsPlugin({
        //     externals: [
        //         {
        //             module: 'react',
        //             entry: 'https://now8.gtimg.com/now/lib/16.2.0/react.min.js',
        //             global: 'React'
        //         },
        //         {
        //             module: 'react-dom',
        //             entry: 'https://now8.gtimg.com/now/lib/16.2.0/react-dom.min.js',
        //             global: 'ReactDOM'
        //         }
        //     ]
        // })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /(react|react-dom)/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    mode: 'none',
    devtool: 'none',
}