'use strict';

import express from 'express';
import path from 'path';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

const port = 3000;
const devPort = 3001;
const app = express();

if(process.env.NODE_ENV === 'development') {
    console.log('Server is running on development mode');

    const config = require('../webpack.dev.config');
    const compiler = webpack(config);
    const devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(devPort, () => {
        console.log('webpack-dev-server is listening on port', devPort);
    });
}

app.use('/', express.static(path.resolve(__dirname, '../public')));

app.get('/about', (req, res) => {
    return res.send('Can you hear me?');
});

import posts from './routes/posts';
app.use('/posts', posts);

const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});
