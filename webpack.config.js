/* eslint-env node */
const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname),
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    watchOptions: {
        ignored: /node_modules/
    },
    devServer: {
        contentBase: [path.join(__dirname, 'content')],
        //watchContentBase: true,
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(vert|frag)$/,
                loader: 'raw-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.(jpg|png)$/,
                loader: ['url-loader'],
                exclude: /node_modules/,
            },
            /*
            {
                test: /\.json$/,
                loader: 'file-loader',
            }
            */
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
    ]
};
