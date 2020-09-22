module.exports = {
    // 使用babel-eslint替代默认的esprima解析器
    "parser": "babel-eslint",
    //指定环境，使用 env 关键字指定你想启用的环境
    "env": {
        "browser": true,
        "node": true
    },
    // 继承airbnb的配置文件
    "extends": [
        'airbnb'
    ],
    "rules": {
        // 强制使用4空格缩进
        "indent": ["error", 4],
        // 默认使用windows换行风格  即： CRLF \r\n
        "linebreak-style": ["warn", "windows"],
        "react/jsx-indent": ["error", 4]
    }
};
