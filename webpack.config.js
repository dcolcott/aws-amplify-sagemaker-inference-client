const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './app/src/js/app.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        overlay: true,
        hot: true
    },
    plugins: [
        new CopyWebpackPlugin([
                                './app/index.html',
                                './app/src/js/freelancer.js',
                                {from: './app/css', to: 'css'},
                                {from: './app/img', to: 'img'},
                                {from: './app/vendor', to: 'vendor'},
                                
                            ]),
        new webpack.HotModuleReplacementPlugin()
    ]
};