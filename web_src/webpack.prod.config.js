'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ['./src/index.js'],
        // 아래와 같이 수동적으로 서드 파티들을 다 추가해줘야한다.
        // 장점으로는 자기가 빼고 싶은 서드 파티만 지정할 수 있다는 점이다.
        // 자신의 앱과 벤더의 크기를 균형있게 맞출 수가 있다.
    },

    output: {
        // entry에 존재하는 app.js, vendor.js로 뽑혀 나온다.
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },

    plugins: [
        // 로더들에게 옵션을 넣어주는 플러그인
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false,
                unused: true // tree shaking
            }
        }),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'production'
        }),
        new ExtractTextPlugin({
            filename: '[name].bundle.css'
        }),
        // app.js에 들어갈만한 내용을 vendor로 빼주는 플러그인
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                // this assumes your vendor imports exist in the node_modules directory
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    devtool: 'cehap-module-source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src'),
                options: {
                    presets: [['es2015', { modules: false }], 'stage-0', 'react'],
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(css|less)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{loader: 'css-loader', query: {modules: true, sourceMap: true}}, {loader: 'less-loader'}]
                })
            }
        ]
    }
};
