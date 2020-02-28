const path = require('path');
// 抽离css为单独文件

module.exports={
    mode: 'development', //获取环境变量 process.env.NODE_ENV
    // 入口起点
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    // 解析
    resolve: {
        extensions: ['*', '.js', '.jsx', '.css', '.less']
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
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
                test: /\.(gif|png|jpg|woff|svg|ttf|eot)$/,//图片的处理
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]', // 原文件名 原后缀,
                        limit: 10 * 1024,//当图片小于这个值他会生成一个图片的url 如果是一个大于的他会生成一个base64的图片在js里展示
                        outputPath: '../dist/images/',// 指定打包后的图片位置
                        publicPath: '/images/',
                    }
                }, {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]', // 原文件名 原后缀,
                        limit: 10 * 1024,//当图片小于这个值他会生成一个图片的url 如果是一个大于的他会生成一个base64的图片在js里展示
                        outputPath: '../dist/',// 指定打包后的图片位置
                        publicPath: '/',
                    }

                }]
            }

        ]
    },

    devServer: {
        contentBase: './public',
        port: 8001,
        historyApiFallback: true
    }
}