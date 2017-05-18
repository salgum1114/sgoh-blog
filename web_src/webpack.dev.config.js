const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const devPort = 8081;

module.exports = {
    devtool: 'inline-source-map',

    entry: [
        'webpack-dev-server/client?http://localhost:${devPort}',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: devPort,
        contentBase: path.join(__dirname, 'dist'),
        hot: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html'
        }),
        new ExtractTextPlugin({
            filename: 'common.css'
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            },
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
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            }
        ]
    }
};