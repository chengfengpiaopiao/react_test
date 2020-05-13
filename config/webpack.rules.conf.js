const extractTextPlugin = require("extract-text-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

const rules = [

    {
        test: /\.(css|less|scss)$/,
        use: process.env.NODE_ENV === "development" ? ["style-loader", "css-loader", "sass-loader", "postcss-loader"] :extractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", "sass-loader", "postcss-loader"],
            publicPath: "../"
        })
    },
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
    }, {
        test: /\.(gif|png|jpg|woff|svg|ttf|eot)$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]', // 原文件名 原后缀,
                limit: 10 * 1024,//当图片小于这个值他会生成一个图片的url 如果是一个大于的他会生成一个base64的图片在js里展示
                publicPath: "/images/",
                outputPath: "images/"
            }
        }
         ]


    },
    {
        test: /\.html$/,
        // html中的img标签
        use: {
            loader: 'html-loader',
            options: {
                attrs: ['img:src', 'img:data-src', 'audio:src'],
                minimize: true
            }
        }
    }
];
module.exports = rules;