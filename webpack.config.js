//Konfiguracja Webpack
const path = require("path");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['whatwg-fetch',"./js/app.jsx"],
    output: {
        path: path.resolve("js"),
        filename: "out.js"
    },
    devServer: {
        inline: true,
        contentBase: './',
        port: 8800
    },
    watch: true,
    module: {
        loaders: [{
            test: /\.jsx$/,

            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-2', 'react']
            }
        },
            {
                test: /\.css$/,
                include: /node_modules/,
                loader: ['style-loader?-url','css-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?-url','sass-loader']
                })
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '../css/style.css',
            disable: false,
            allChunks: true
        }),
        new BrowserSyncPlugin(
            // BrowserSync options
            {
                // browse to http://localhost:3000/ during development
                host: 'localhost',
                port: 3300,
                // proxy the Webpack Dev Server endpoint
                // (which should be serving on http://localhost:3100/)
                // through BrowserSync
                proxy: 'http://localhost:8800/'
            },
            // plugin options
            {
                // prevent BrowserSync from reloading the page
                // and let Webpack Dev Server take care of this
                reload: true
            }
        )
    ]
}