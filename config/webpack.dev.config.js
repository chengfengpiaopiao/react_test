const path = require('path');
const webpack = require("webpack");
const merge = require("webpack-merge");
const webpackConfigBase = require('./webpack.base.conf');
const webpackConfigDev = {
    mode: 'development', // 通过 mode 声明开发环境
    output: {
        path: path.join(__dirname, "build"),
        //publicPath: "/assets/",             //html路径访问为http://127.0.0.1:8090/assets/home.html
        filename: "js/[name].js"
    },
    devServer: {
        //contentBase:'',
        host: "127.0.0.1",
        port: "8090",
        historyApiFallback: true,
        overlay: true, // 浏览器页面上显示错误
        // open: true, // 开启浏览器
        // stats: "errors-only", //stats: "errors-only"表示只打印错误：
        //服务器代理配置项
        proxy: {
            '/testing/*': {
                target: 'https://www.baidu.com',
                secure: true,
                changeOrigin: true
            }
        }
    },
}
module.exports = merge(webpackConfigBase, webpackConfigDev);