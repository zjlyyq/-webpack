### 最简单的webpack
1. npm init

2. 安装webpack 和 webpack-cli `npm install webpack webpack-cli --save-dev`

3. 编写webpack.config.js文件

4. 最直接的运行webpack打包：`./node_modules/.bin/webpack`
  
  ![](http://121.199.20.52/the_static/2019-11-0216.09.55.png)
  
  #### 通过npm script运行webpack
  
  > 原理：模块局部安装会在当前项目的`node_modules/.bin`目录创建软链接，package.json可以读取到该目录的软链接。在script标签🏷中定义的命令，npm会在`.bin`目录中去寻找。
  
  ![http://121.199.20.52/the_static/%e6%88%aa%e5%b1%8f2019-11-0216.50.46.png](http://121.199.20.52/the_static/截屏2019-11-0216.50.46.png)

