const path = require('path');
const webpack = require("webpack");
const merge = require("webpack-merge");
// 清除目录等
const cleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const extractTextPlugin = require("extract-text-webpack-plugin");
const webpackConfigBase = require('./webpack.base.conf');

const webpackConfigProd = {
    mode: 'production', // 通过 mode 声明生产环境

    output: {
        path: path.resolve(__dirname, '../dist'),
        // 打包多出口文件
        filename: 'js/[name].[hash].js',
        publicPath:'/',
    },

    devtool: 'cheap-module-eval-source-map',

    plugins: [
        // 分离css插件参数为提取出去的路径
        new extractTextPlugin({
            filename: 'css/[name].[hash:8].min.css',
            publicPath: "/images2/"
        }),
        //压缩css
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        //上线压缩 去除console等信息webpack4.x之后去除了webpack.optimize.UglifyJsPlugin
        new UglifyJSPlugin({
            uglifyOptions: {
                compress: {
                    warnings: false,
                    drop_debugger: false,
                    drop_console: true
                }
            }
        })
    ]

}
module.exports = merge(webpackConfigBase, webpackConfigProd);