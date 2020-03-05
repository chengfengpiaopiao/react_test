const extractTextPlugin = require("extract-text-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

const rules = [
    {
        test: /\.css$/,
        use: [

            require.resolve('style-loader'),
            {
                loader: require.resolve('css-loader'),
                options: {
                    importLoaders: 1,
                    modules:{ localIdentName:'[name]__[local]__[hash:base64:5]'}
                },
            },
            {
                loader: require.resolve('postcss-loader'),
                options: {
                    // Necessary for external CSS imports to work
                    // https://github.com/facebookincubator/create-react-app/issues/2677
                    ident: 'postcss',
                    plugins: () => [
                        require('postcss-flexbugs-fixes'),

                    ],
                },
            },
        ],
    },
    {
        test: /\.(less|scss)$/,
        use: ["style-loader",  "less-loader","sass-loader"]
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
                publicPath: "/images2/",
                outputPath: "images2/"
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