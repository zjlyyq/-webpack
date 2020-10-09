const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const path = require('path');
const glob = require('glob');

// process.cwd() 方法返回 Node.js 进程的当前工作目录
const projectRoot = process.cwd();  //冒烟测试脚本执行过：process.chdir(path.join(__dirname, 'template'));
// 多页面打包
const setMPA = () => {
  const entry = {};
  const htmlWebpackPlugins = [];
  const entries = glob.sync(path.join(projectRoot, './src/*/index.jsx')).concat(
    glob.sync(path.join(projectRoot, './src/*/index.js')),
  );
  console.log('---- entry ----', entries);
  entries.map((item) => {
    const match = item.match(/src\/(.*)\/index\.jsx?/);
    const pageName = match[1];
    entry[pageName] = item;
    htmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        template: path.join(projectRoot, `src/${pageName}/${pageName}.html`),
        filename: `${pageName}_uglify.html`,
        chunks: ['vendors', 'commons', pageName],
        inject: true,
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: false,
          minifyCSS: true,
          minifyJS: true,
          removeComments: false,
        },
      }),
    );
    return null;
  });
  return {
    entry,
    htmlWebpackPlugins,
  };
};

const { entry, htmlWebpackPlugins } = setMPA();
module.exports = {
  entry: entry,
  output: {
    path: path.join(projectRoot, 'dist'),
    filename: '[name]_[chunkhash:8].js'
  },
  // 资源解析 ， 样式增强
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
          MiniCssExtractPlugin.loader,
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
    // css文件提取
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css',
    }),
    // 目录清理
    new CleanWebpackPlugin(),
    // 多页面打包
    ...htmlWebpackPlugins,
    // 命令行显示优化
    new FriendlyErrorsWebpackPlugin(),
    // 错误捕获
    function errorPlugin() {
      this.hooks.done.tap('done', (stats) => {
        if (stats.compilation.errors
                    && stats.compilation.errors.length && process.argv.indexOf('- -watch') === -1) {
            // console.log('--------build error-------------', stats.compilation.errors);
            process.exit(1);
        }
      });
    },

  ],
  stats: 'errors-only',
};
