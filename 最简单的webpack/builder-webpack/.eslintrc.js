module.exports = {
    // 使用babel-eslint替代默认的esprima解析器
    "parser": "babel-eslint",
    //指定环境，使用 env 关键字指定你想启用的环境
    "env": {
        "browser": true,
        "node": true
    },
    // 继承airbnb-base的配置文件
    "extends": [
        'airbnb-base'
    ],
};
