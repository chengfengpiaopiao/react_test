const extractTextPlugin = require("extract-text-webpack-plugin");

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
            // 需要下载url-loader
            loader: "url-loader",
            options: {
                limit: 5 * 1024, //小于这个时将会已base64位图片打包处理
                // 图片文件输出的文件夹
                publicPath: "../images2",
                outputPath: "images2"
            }
        }]

        /*
        ,{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]', // 原文件名 原后缀,
                limit: 10 * 1024,//当图片小于这个值他会生成一个图片的url 如果是一个大于的他会生成一个base64的图片在js里展示
                outputPath: '../dist/',// 指定打包后的图片位置
                publicPath: '/',
            }
        }
         */
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