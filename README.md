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