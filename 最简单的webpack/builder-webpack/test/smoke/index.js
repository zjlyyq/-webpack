const path = require('path');
const webpack = require('webpack');
const rimraf = require('rimraf');   // rimraf——删除dist目录
const Mocha = require('mocha');

const mocha = new Mocha({
    timeout: '200000ms'
})


// process.chdir() 方法变更 Node.js 进程的当前工作目录
// 进入template目录
process.chdir(path.join(__dirname, 'template'));

rimraf('./dist', () => {
    const prodConfig = require('../../lib/webpack.prod.js');

    // 构建
    webpack(prodConfig, (err, stats) => {
        console.log('finished')
        if (err) {
            console.log('err', err);
            process.exit(2);
        }
        console.log(stats.toString({
            colors: true,
            modules: false,
            children: false
        }))
        console.log('Webpack build secceed, begin run test');
        mocha.addFile(path.join(__dirname, 'html-test.js'));
        mocha.addFile(path.join(__dirname, 'css-js-test.js'))
        mocha.run();
    })
})

