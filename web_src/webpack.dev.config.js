'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const devPort = 3001;

module.exports = {
    devtool: 'inline-source-map',

    entry: {
        app: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:'+devPort,
            'webpack/hot/only-dev-server',
            path.resolve(__dirname, 'src/index.js')
        ]
    },

    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].js'
    },

    devServer: {
        inline: true,
        port: devPort,
        contentBase: path.resolve(__dirname, 'public'),
        hot: true,
        publicPath: '/',
        historyApiFallback: true,
        proxy: {
            "**": {
                target: "http://localhost:3000",
                secure: false,
                prependPath: false
            }
        }
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(), // HMR을 사용하기 위한 플러그인
        new webpack.NamedModulesPlugin(), //브라우저에서 HMR 에러발생시 module name 표시
        new webpack.NoEmitOnErrorsPlugin(), // console에 에러로그 찍어줌
        new webpack.optimize.CommonsChunkPlugin({ // app.js에 들어갈만한 내용을 vendor로 빼주는 플러그인
            name: 'vendor',
            minChunks: function (module) {
                // this assumes your vendor imports exist in the node_modules directory
                return module.context && module.context.indexOf('node_modules') !== -1;
            },
            // 요 놈은 vendor에 대한 내용
            fileName: '[name].[hash]'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: __dirname + '/src/index.html'
        }),
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src'),
                options: {
                    presets: [['es2015', { modules: false }], 'stage-0', 'react'],
                    plugins: ['react-hot-loader/babel', "syntax-dynamic-import"]
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(css|less)$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    }
};