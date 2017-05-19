'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const devPort = 8081;

module.exports = {
    devtool: 'inline-source-map',

    entry: {
        app: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:'+devPort,
            'webpack/hot/only-dev-server',
            path.join(__dirname, 'src/index.js')
        ]
    },

    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '/',
        filename: '[name].bundle.js'
    },

    devServer: {
        inline: true,
        port: devPort,
        contentBase: path.join(__dirname, 'public'),
        hot: true,
        publicPath: '/',
        historyApiFallback: true,
        proxy: {
            "**": {
                target: "http://localhost:8080",
                secure: false,
                prependPath: false
            }
        }
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: __dirname + '/src/index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src'),
                options: {
                    presets: [['es2015', { modules: false }], 'stage-0', 'react'],
                    plugins: ['react-hot-loader/babel']
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