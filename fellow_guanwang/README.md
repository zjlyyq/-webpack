<div style="text-align:center;">
    <h1>webpack使用指南</h1>
    <img src="./static/imgs/GameGril_4K.jpeg"/>
</div>

***本项目是本人跟随webpack官网指南章节篇创建，旨在理解webpack各工具的使用方法的过程中，能更容易深入到其他更深层次的文章中。***

### 安装
#### 本地安装
要安装最新版本或特定版本，请运行以下命令之一：
```sh
npm install --save-dev webpack
npm install --save-dev webpack<@version>
```
如果使用 webpack 4+ 版本，还需要安装 CLI。
```sh
npm install --save-dev webpack-cli
```
> 这里先留一个疑问，为什么需要安装CLI?

对于大多数项目，建议本地安装。这可以使webpack在引入破坏式变更(breaking change)的依赖时，更容易分别升级项目。

### 起步

#### 基本安装

项目初始化，在项目路径下执行
```sh
npm init -y
npm install --save-dev webpack webpack-cli
```

此时，项目目录结构，文件内容如下：

project

```diff
	./fellow_guanwang/
	├── README.md
+ ├── index.html
+ ├── package-lock.json
+ ├── package.json
+ ├── src
+ │   └── index.js
+ └── static
+    └── imgs
```

src/index.js

```js
function component() {
    var element = document.createElement('div');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
}
  
document.body.appendChild(component());
```

Index.html

```html
<!doctype html>
<html>
  <head>
    <title>起步</title>
    <script src="https://unpkg.com/lodash@4.16.6"></script>
  </head>
  <body>
    <script src="./src/index.js"></script>
  </body>
</html>
```

我们还需要调整 `package.json` 文件，以便确保我们安装包是`私有的(private)`，并且移除 `main` 入口。这可以防止意外发布你的代码。

> *如果你想要了解* `package.json` *内在机制的更多信息，我们推荐阅读* [npm 文档](https://docs.npmjs.com/files/package.json)*。*

package.json

```diff
{
  "name": "fellow_guanwang",
  "version": "1.0.0",
  "description": "",
- "main": "index.js",
+ "private": true,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^4.41.5",
    "webpack-cli": "^3.3.10"
  }
}
```

在此示例中，`<script>` 标签之间存在隐式依赖关系。`index.js `文件执行之前，还依赖于页面中引入的 `lodash`。之所以说是隐式的是因为 `index.js` 并未显式声明需要引入`lodash`，只是假定推测已经存在一个全局变量 `_`。

使用这种方式去管理 JavaScript 项目会有一些问题：

- 无法立即体现，脚本的执行依赖于外部扩展库(external library)。
- 如果依赖不存在，或者引入顺序错误，应用程序将无法正常运行。
- 如果依赖被引入但是并没有使用，浏览器将被迫下载无用代码。

让我们使用 webpack 来管理这些脚本。

#### 创建一个bundle文件

首先，需要调整下目录结构，将“源”代码(`/src`)从我们的“分发”代码(`/dist`)中分离出来。“源”代码是用于书写和编辑的代码。“分发”代码是构建过程产生的代码最小化和优化后的“输出”目录，最终将在浏览器中加载：

project:

```diff
  ./fellow_guanwang/
  ├── README.md
- ├── index.html
+ ├── dist
+ │   └── index.html
  ├── package-lock.json
  ├── package.json
  ├── src
  │   └── index.js
  └── static
      └── imgs
```

要在 `index.js` 中打包 `lodash` 依赖，我们需要在本地安装 library：

```sh
npm install --save loadsh
```

> *在安装一个要打包到生产环境的安装包时，你应该使用* `npm install --save`*，如果你在安装一个用于开发环境的安装包（例如，linter, 测试库等），你应该使用* `npm install --save-dev`*。请在* [npm 文档](https://docs.npmjs.com/cli/install) *中查找更多信息。*

现在，在我们的脚本中 import `lodash`：

src/index.js

```diff
+ import _ from 'loadsh';
+
  function component() {
     var element = document.createElement('div');
   
-    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
+    // Loadsh 现在通过import导入
     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   
     return element;
   }
  
	 document.body.appendChild(component());

```

现在，由于通过打包来合成脚本，我们必须更新 `index.html` 文件。因为现在是通过 `import` 引入 lodash，所以将 lodash `` 删除，然后修改另一个 `` 标签来加载 bundle，而不是原始的 `/src` 文件：

dist/index.html

```diff
	<!doctype html>
  <html>
   <head>
     <title>起步</title>
-    <script src="https://unpkg.com/lodash@4.16.6"></script>
   </head>
   <body>
-    <script src="../src/index.js"></script>
+    <script src="./main.js"></script>
   </body>
  </html>

```

在这个设置中，`index.js` 显式要求引入的 `lodash` 必须存在，然后将它绑定为 `_`（没有全局作用域污染）。

通过声明模块所需的依赖，webpack 能够利用这些信息去构建依赖图，然后使用图生成一个优化过的，会以正确顺序执行的 bundle。

可以这样说，执行 `npx webpack`，会将我们的脚本作为[入口起点](https://www.webpackjs.com/concepts/entry-points)，然后 [输出](https://www.webpackjs.com/concepts/output) 为 `main.js`。Node 8.2+ 版本提供的 `npx` 命令，可以运行在初始安装的 webpack 包(package)的 webpack 二进制文件（`./node_modules/.bin/webpack`）：

```sh
npx -webpack

Hash: 3578d217ee0ed84bacaa
Version: webpack 4.41.5
Time: 2747ms
Built at: 2020-02-07 23:50:05
  Asset    Size  Chunks             Chunk Names
main.js  72 KiB       0  [emitted]  main
Entrypoint main = main.js
[1] ./src/index.js 265 bytes {0} [built]
[2] (webpack)/buildin/global.js 472 bytes {0} [built]
[3] (webpack)/buildin/module.js 497 bytes {0} [built]
    + 1 hidden module

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults 
for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
```

构建好后project：

```diff
    ./fellow_guanwang/
  ├── [6.9K]  README.md
  ├── dist
  │   ├── [ 132]  index.html
+ │   └── [ 72K]  main.js
  ├── [140K]  package-lock.json
  ├── [ 356]  package.json
  ├── src
  │   └── [ 265]  index.js
  └── static
      └── [  96]  imgs
```

> *输出可能会稍有不同，但是只要构建成功，那么你就可以继续。并且不要担心，稍后我们就会解决。*

在浏览器中打开 `index.html`，如果一切访问都正常，你应该能看到以下文本：'Hello webpack'。

> 可以看到打包后的文件居然达到了72k，体积明显大了很多，这也是使用打包的缺点。

#### 模块

[ES2015](https://babeljs.io/learn-es2015/) 中的 [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) 和 [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) 语句已经被标准化。虽然大多数浏览器还无法支持它们，但是 webpack 却能够提供开箱即用般的支持。

事实上，webpack 在幕后会将代码“转译”，以便旧版本浏览器可以执行。如果你检查 `dist/bundle.js`，你可以看到 webpack 具体如何实现，这是独创精巧的设计！除了 `import` 和 `export`，webpack 还能够很好地支持多种其他模块语法，更多信息请查看[模块 API](https://www.webpackjs.com/api/module-methods)。

注意，webpack 不会更改代码中除 `import` 和 `export` 语句以外的部分。如果你在使用其它 [ES2015 特性](http://es6-features.org/)，请确保你在 webpack 的 [loader 系统](https://www.webpackjs.com/concepts/loaders/)中使用了一个像是 [Babel](https://babeljs.io/) 或 [Bublé](https://buble.surge.sh/guide/) 的[转译器](https://www.webpackjs.com/loaders/#transpiling)。

#### 使用一个配置文件

在 webpack 4 中，可以无须任何配置使用，然而大多数项目会需要很复杂的设置，这就是为什么 webpack 仍然要支持 [配置文件](https://www.webpackjs.com/concepts/configuration)。这比在终端(terminal)中手动输入大量命令要高效的多，所以让我们创建一个取代以上使用 CLI 选项方式的配置文件：

**project**

```diff
  ./fellow_guanwang/
  ├── README.md
  ├── dist
  │   ├── index.html
  │   └── main.js
  ├── package-lock.json
  ├── package.json
  ├── src
  │   └── index.js
  ├── static
  │   └── imgs
+ └── webpack.config.js
```

**webpack.config.js**

```js
const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}
```

现在，让我们通过新配置文件再次执行构建

```shell
npx webpack --config webpack.config.js

Hash: 3578d217ee0ed84bacaa
Version: webpack 4.41.5
Time: 378ms
Built at: 2020-02-08 00:16:55
  Asset    Size  Chunks             Chunk Names
main.js  72 KiB       0  [emitted]  main
Entrypoint main = main.js
[1] ./src/index.js 265 bytes {0} [built]
[2] (webpack)/buildin/global.js 472 bytes {0} [built]
[3] (webpack)/buildin/module.js 497 bytes {0} [built]
    + 1 hidden module

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults 
for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
```

> ***为什么构建出来是main.js而不是bundle.js？后来排查到时将配置文件中的export写错了，导致配置文件失效，任然用的默认打包方式。***

**修改完后重新执行**

```sh
npx webpack --config webpack.config.js

Hash: 1d32ddb2222f6868fc98
Version: webpack 4.41.5
Time: 359ms
Built at: 2020-02-08 00:25:40
    Asset    Size  Chunks             Chunk Names
bundle.js  72 KiB       0  [emitted]  main
Entrypoint main = bundle.js
[1] ./src/index.js 265 bytes {0} [built]
[2] (webpack)/buildin/global.js 472 bytes {0} [built]
[3] (webpack)/buildin/module.js 497 bytes {0} [built]
    + 1 hidden module

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
```

> *注意，当在 windows 中通过调用路径去调用* `webpack` *时，必须使用反斜线()。例如* `node_modules\.bin\webpack --config webpack.config.js`*。*

> *如果* `webpack.config.js` *存在，则* `webpack` *命令将默认选择使用它。我们在这里使用* `--config` *选项只是向你表明，可以传递任何名称的配置文件。这对于需要拆分成多个文件的复杂配置是非常有用。*

比起 CLI 这种简单直接的使用方式，配置文件具有更多的灵活性。我们可以通过配置方式指定 loader 规则(loader rules)、插件(plugins)、解析选项(resolve options)，以及许多其他增强功能。了解更多详细信息，请查看[配置文档](https://www.webpackjs.com/configuration)。

#### NPM脚本(NPM Scripts)

考虑到用 CLI 这种方式来运行本地的 webpack 不是特别方便，我们可以设置一个快捷方式。在 *package.json* 添加一个 [npm 脚本(npm script)](https://docs.npmjs.com/misc/scripts)：

**package.json**

```diff
  {
    "name": "fellow_guanwang",
    "version": "1.0.0",
    "description": "",
    "private": true,
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
+     "build": "webpack --config webpack.config.js"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "webpack": "^4.41.5",
      "webpack-cli": "^3.3.10"
    },
    "dependencies": {
      "loadsh": "0.0.4"
    }
}
```

现在，可以使用 `npm run build` 命令，来替代我们之前使用的 `npx` 命令。注意，使用 npm 的 `scripts`，我们可以像使用 `npx` 那样通过模块名引用本地安装的 npm 包。这是大多数基于 npm 的项目遵循的标准，因为它允许所有贡献者使用同一组通用脚本（如果必要，每个 flag 都带有 `--config` 标志）。

现在运行以下命令，然后看看你的脚本别名是否正常运行：

```
npm run build

Hash: 1d32ddb2222f6868fc98
Version: webpack 4.41.5
Time: 398ms
Built at: 2020-02-08 00:35:40
    Asset    Size  Chunks             Chunk Names
bundle.js  72 KiB       0  [emitted]  main
Entrypoint main = bundle.js
[1] ./src/index.js 265 bytes {0} [built]
[2] (webpack)/buildin/global.js 472 bytes {0} [built]
[3] (webpack)/buildin/module.js 497 bytes {0} [built]
    + 1 hidden module

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
```

> *通过向* `npm run build` *命令和你的参数之间添加两个中横线，可以将自定义参数传递给 webpack，例如：*`npm run build -- --colors`*。*

### 代码分离

代码分离是 webpack 中最引人注目的特性之一。此特性能够把代码分离到不同的 bundle 中，然后可以按需加载或并行加载这些文件。代码分离可以用于获取更小的 bundle，以及控制资源加载优先级，如果使用合理，会极大影响加载时间。

有三种常用的代码分离方法：

+ 入口起点：使用 [`entry`](https://www.webpackjs.com/configuration/entry-context) 配置手动地分离代码。
+ 防止重复: 使用 [`SplitChunksPlugin`](https://webpack.js.org/plugins/split-chunks-plugin/) to dedupe and split chunks.
+ 动态导入：通过模块的内联函数调用来分离代码。

#### 入口起点

这是迄今为止最简单、最直观的分离代码的方式。不过，这种方式手动配置较多，并有一些陷阱，我们将会解决这些问题。先来看看如何从 main bundle 中分离另一个模块：

**project**

```diff
  ./fellow_guanwang/
  ├── README.md
  ├── package-lock.json
  ├── package.json
  ├── src
+ │   ├── another-module.js
  │   └── index.js
  ├── static
  │   └── imgs
  └── webpack.config.js
```

**another-module.js**

```js
import _ from 'lodash';

console.log(
  _.join(['Another', 'module', 'loaded!'], ' ')
);
```

**webpack.config.js**

```diff
  const path = require('path');
  const webpack = require('webpack')
  const {CleanWebpackPlugin} = require('clean-webpack-plugin');

  module.exports = {
  		mode: 'development',
      entry: {
          index: "./src/index.js",
+         another: './src/another-module.js'
      },
      output: {
          filename: '[name].bundle.js',
          path: path.resolve(__dirname, 'dist')
      },
      plugins: [
          new CleanWebpackPlugin()
      ]
  }
```

将生成如下构建结果：

```sh
Hash: 6424577ab584033b06af
Version: webpack 4.41.5
Time: 482ms
Built at: 2020-02-28 15:07:39
            Asset     Size   Chunks             Chunk Names
another.bundle.js  551 KiB  another  [emitted]  another
  index.bundle.js  551 KiB    index  [emitted]  index
Entrypoint index = index.bundle.js
Entrypoint another = another.bundle.js
```

正如前面所说的，这种方法存在缺陷：

- 如果入口 chunks 之间包含重复的模块，那些重复模块都会被引入到各个 bundle 中。
- 这种方法不够灵活，并且不能将核心应用程序逻辑进行动态拆分代码。

以上两点中，第一点对我们的示例来说无疑是个问题，因为之前我们在 `./src/index.js` 中也引入过 `lodash`，这样就在两个 bundle 中造成重复引用。接着，我们通过使用 [`SplitChunksPlugin`](https://webpack.js.org/plugins/split-chunks-plugin/) 来移除重复的模块。

#### 防止重复(prevent duplication)

##### 入口依赖（Entry dependencies）

DependOn选项允许在`chunks`之间共享模块。

```diff
  const path = require('path');
  const webpack = require('webpack')
  const {CleanWebpackPlugin} = require('clean-webpack-plugin');

  module.exports = {
      mode: 'development',
      entry: {
-     		index: './src/index.js',
-     		another: './src/another-module.js',
+         index: {
+             import: "./src/index.js",
+             dependOn: 'shared'
+         },
+         another: {
+             import: './src/another-module.js',
+             dependOn: 'shared'
+         },
+         shared: 'loadsh'
      },
      output: {
          filename: '[name].bundle.js',
          path: path.resolve(__dirname, 'dist')
      },
      plugins: [
          new CleanWebpackPlugin()
      ]
  }
```

但是构建结果总是报错：

```sh

Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.
 - configuration.entry should be one of these:
   function | object { <key>: non-empty string | [non-empty string] } | non-empty string | [non-empty string]
   -> The entry point(s) of the compilation.
   Details:
    * configuration.entry['index'] should be a string.
      -> The string is resolved to a module which is loaded upon startup.
    * configuration.entry['index'] should be an array:
      [non-empty string]
      -> A non-empty array of non-empty strings
    * configuration.entry['index'] should be one of these:
      [non-empty string]
      -> All modules are loaded upon startup. The last one is exported.
    * configuration.entry['index'] should be one of these:
      non-empty string | [non-empty string]
      -> An entry point with name
```

问题已经提到[stackoverflow](https://stackoverflow.com/questions/60456258/code-splitting-with-entry-dependency-but-get-an-error-and-my-webpack-version-is)上，先不纠结，直接往下看。

##### SplitChunksPlugin

SplitChunksPlugin允许我们将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk。让我们使用这个插件，将之前的示例中重复的 `lodash` 模块去除：

> webpack v4中已删除CommonsChunkPlugin。要了解如何在最新版本中处理chunk，请查看SplitChunksPlugin

