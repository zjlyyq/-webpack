41. 冒烟测试介绍和实际运用
    
    本节讲了冒烟测试检测构建是否有产物生成，有几点疑问？

    1. 为什么要新建一个build-webpack文件夹并将src文件夹都拷贝进去，然后通过`webpack(prodConfog)`构建，最后通过`mocha`检测产物是否生成。而不是直接检测dist文件夹呢？
    2. 为什么要先通过`rimraf`删除dist目录呢？
        > 这个我想我已经知道了，因为dist目录的生成也是构建结果的一部分。
    3. 为什么构建的时候总是报些第三方模块不符个eslint的警告，应该如何消除这些警告⚠️。
        > ![](./static/截屏2020-10-09%2011.48.55.png)
    1. `webpack(prodConfig, (err, stats) => {...})` 关于webpack的api，还是要深入学习啊。
42.  单元测试与测试覆盖率
    