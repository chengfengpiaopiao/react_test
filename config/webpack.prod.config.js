const path = require('path');
const webpack = require("webpack");
const merge = require("webpack-merge");
// 清除目录等
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const extractTextPlugin = require("extract-text-webpack-plugin");
const webpackConfigBase = require('./webpack.base.conf');

process.env.NODE_ENV = "test"

const webpackConfigProd = {
    mode: 'production', // 通过 mode 声明生产环境
    output: {
        path: path.resolve(__dirname, '../dist'),
        // 打包多出口文件
        filename: './js/[name].[hash].js',
        publicPath: './'
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        //删除dist目录
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.BASE_URL': '\"' + process.env.BASE_URL + '\"'
        }),
        // 分离css插件参数为提取出去的路径
        new extractTextPlugin({
            filename: 'css/[name].[hash:8].min.css',
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
    ],
    module: {
        rules: []
    },

}
module.exports = merge(webpackConfigBase, webpackConfigProd);