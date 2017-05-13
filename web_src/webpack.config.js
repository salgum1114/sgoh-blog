var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var source_dir = __dirname + '/../src/main/webapp/js/';
var view_dir = __dirname + '/../src/main/webapp/views/';

module.exports = {
    devtool: 'inline source-map',

    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],

    output: {
        path: source_dir,
        publicPath: 'http://localhost:3000/',
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 3000,
        publicPath: 'http://localhost:3000/',
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
        new HtmlWebpackPlugin({
            template: view_dir + 'index.html'
        })
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};