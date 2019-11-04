### 最简单的webpack
1. npm init

2. 安装webpack 和 webpack-cli `npm install webpack webpack-cli --save-dev`

3. 编写webpack.config.js文件

4. 最直接的运行webpack打包：`./node_modules/.bin/webpack`
  
  ![](http://121.199.20.52/the_static/2019-11-0216.09.55.png)
  
  #### 通过npm script运行webpack
  
  > 原理：模块局部安装会在当前项目的`node_modules/.bin`目录创建软链接，package.json可以读取到该目录的软链接。在script标签🏷中定义的命令，npm会在`.bin`目录中去寻找。
  
  ![](http://121.199.20.52/the_static/截屏2019-11-0216.50.46.png)

### webpack核心概念之Entry

### webpack核心概念之Output

### webpack核心概念之Loaders

webpack开箱只支持js和json两种文件类型，通过Loaders去支持其他的文件类型并将它们转化为有效的模块，并且可以添加到依赖图中。

本身是一个函数，接受源文件作为参数，返回转换的结果。

#### 常见的loader

![http://121.199.20.52/the_static/%e5%b8%b8%e8%a7%81loader.png](http://121.199.20.52/the_static/常见loader.png)

#### loader的配置方法

![http://121.199.20.52/the_static/%e5%b8%b8%e8%a7%81loader.png](http://121.199.20.52/the_static/loader的配置.png)



### webpack核心概念之Plugins

插件用于bundle文件优化，资源管理和环境变量注入

作用于整个构建过程

#### 常用的plugin

![http://121.199.20.52/the_static/plugin%e9%85%8d%e7%bd%ae.png](http://121.199.20.52/the_static/常用的plugin.png)

#### plugin的配置

![http://121.199.20.52/the_static/plugin%e9%85%8d%e7%bd%ae.png](http://121.199.20.52/the_static/plugin配置.png)

### webpack核心概念之Mode

mode是webpack4引入的一个功能，不同的mode，可以启用webpack内置的函数功能。

![http://121.199.20.52/the_static/mode%e7%9a%84%e4%bd%9c%e7%94%a8.png](http://121.199.20.52/the_static/mode的作用.png)

### 使用babel-loader解析es6和React-JSX
1. 安装@babel/core @babel/preset-env @babel/preset-react babel-loader

2. 编写babel-loader配置文件.babelrc

   ```
   {
       "presets": [
           "@babel/preset-env",  //预设：包含了用于解析最新ES6/7语法的插件的集合
           "@babel/preset-react" //预设：包含了用于解析JSX语法的插件的集合
       ]
   }
   ```

3. 在webpack.config.js中配置babel-loader

   ```js
   module:{
           rules:[
               {
                   test:/\.js$/,
                   use:'babel-loader'
               }
           ]
       },
   ```

### 解析CSS,Less,Lass

#### 解析css

一开始不太理解什么叫解析css，css难道还需要解析吗？原来这里的解析是指：当在js文件中直接引入css文件的时候，打包的过程中能识别这种行为，css-loader加载css文件，并且转化为CommonJS对象，style-loader将样式通过`style`标签插入到`head`中。

1. 安装css-loader,style-loader

2. 在webpack.config.js中配置

   ```js
   {
         test:/.css$/,
         use:[
         "style-loader",
         "css-loader"
         ]
   }
   ```

   > 注意loader是链式加载，即：从右到左。css-loader将处理好的结果交给style-loader处理，所以这里的顺序不能随意。

3. 效果图

   ![http://121.199.20.52/the_static/css-loader%e5%92%8cstyle-loader%e8%bd%ac%e6%8d%a2%e5%90%8e%e7%9a%84%e9%a1%b5%e9%9d%a2%e6%95%88%e6%9e%9c.png](http://121.199.20.52/the_static/css-loader和style-loader转换后的页面效果.png)

#### 解析less

解析Less只需要在解析CSS的基础上，多加一个less-loader。

1. 安装less,less-loader

2. 在webpack.config.js中配置

   ```js
   {
     test:/.less$/,
     use:[
       "style-loader",
       "css-loader",
       "less-loader"
     ]
   }
   ```

   

### 解析图片和字体

#### 使用file-loader

1. 安装file-loader

2. 配置

   ```js
   {
   	test:/.(jpg|png|jpeg|gif|svg)$/,
   	use:"file-loader"
   }
   ```

#### 使用url-loader

1. 安装

2. 配置

   ```js
   {
   	test:/.(jpg|png|jpeg|gif|svg)$/,
     use:[
       {
       	loader:'url-loader',
         options:{
         	limit:102400  //100k
         }
       }
     ]
   },
   ```

   

###  文件监听

1. 启动webpack命令是，增加`--watch`

2. Webpack.config.js文件中配置

   ```js
   watch:true,
   // 只有开启监听模式，watchOptions才有意义
   watchOptions:{
   		// 默认为空，不监听的文件或文件夹，支持正则表达
       ignored:/node_modules/,
       // 监听到变化后等待300ms再去执行，默认300ms
       aggregateTimeout:300,
       // 轮询频率，每秒1000次
       poll:1000
   },
   ```

#### 监听原理

轮询判断文件的最后编辑时间是否变化，某个文件发生变化，并不会立即告诉监听者，而是先缓存起来，等aggregateTimeout时间再启动编译。

