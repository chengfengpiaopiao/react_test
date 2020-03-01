const path = require('path');
const webpack = require("webpack");
const glob = require("glob");

require("./env-config");
//消除冗余的css
const purifyCssWebpack = require("purifycss-webpack");
// html模板
const htmlWebpackPlugin = require("html-webpack-plugin");
//静态资源输出
const copyWebpackPlugin = require("copy-webpack-plugin");
const rules = require("./webpack.rules.conf.js");

// 获取html-webpack-plugin参数的方法
var getHtmlConfig = function (name, chunks) {
    return {
        template: `./src/pages/${name}/index.html`, 
        filename: process.env.NODE_ENV === "development"? `${name.slice(name.lastIndexOf('/') + 1)}.html`:`html/${name.slice(name.lastIndexOf('/') + 1)}.html`,
        inject: true,
        hash: false, //开启hash  ?[hash]
        chunks: chunks,
        minify: process.env.NODE_ENV === "development" ? false : {
            removeComments: true, //移除HTML中的注释
            collapseWhitespace: true, //折叠空白区域 也就是压缩代码
            removeAttributeQuotes: true, //去除属性引用
        },
    };
};

function getEntry() {
    var entry = {};
    //读取src目录所有page入口
    glob.sync('./src/index.js')
        .forEach(function (name) {
            debugger
            var start = name.indexOf('src/') + 4,
                end = name.length - 3;
            var eArr = [];
            var n = name.slice(start, end);
            n = n.slice(0, n.lastIndexOf('/')); //保存各个组件的入口 
            n = n.split('pages/')[1];
            eArr.push(name);
            entry[n] = eArr;
        });
    return entry;
};

module.exports = {
    entry: {
        index:'./src/index.js'
    },
    module: {
        rules: [...rules]
    },
   
    plugins: [
        //静态资源输出
        new copyWebpackPlugin([{
            from: path.resolve(__dirname, "../src/static"),
            to: './static',
            ignore: ['.*']
        }]),
        // 消除冗余的css代码
        new purifyCssWebpack({
            paths: glob.sync(path.join(__dirname, "../src/pages/*/*.html"))
        })
    ]
}

//配置页面
// const entryObj = getEntry();
// debugger
// const htmlArray = [];
// Object.keys(entryObj).forEach(element => {
//     htmlArray.push({
//         _html: element,
//         title: '',
//         chunks: ['vendor', 'common', element]
//     })
// })

module.exports.plugins.push(new htmlWebpackPlugin({
                template: `./public/index.html`, 
                filename:"index.html",
                inject: true,
                hash: false, //开启hash  ?[hash]
                chunks: ['vendor', 'common', "index"],
                minify: process.env.NODE_ENV === "development" ? false : {
                    removeComments: true, //移除HTML中的注释
                    collapseWhitespace: true, //折叠空白区域 也就是压缩代码
                    removeAttributeQuotes: true, //去除属性引用
                },
}));

//自动生成html模板
// htmlArray.forEach((element) => {
//     module.exports.plugins.push(new htmlWebpackPlugin(getHtmlConfig(element._html, element.chunks)));
// })