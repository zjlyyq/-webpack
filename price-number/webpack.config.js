const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
    mode: "none",
    entry: {
        "price-number": "./src/index.js",
        "price-number.min": "./src/index.js"
    },
    output: {
        filename: "[name].js",
        library: "priceNumber",    // 指定库的全局变量
        libraryExport: "default",
        libraryTarget: "umd"       // ⽀持库引⼊的⽅式
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/,
            }),
        ],
    }
}