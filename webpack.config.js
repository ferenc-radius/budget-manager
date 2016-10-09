let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let path = require('path');

let app_root = '/app';

module.exports = {
    app_root: app_root,
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        __dirname + '/' + app_root + '/index.js'
    ],
    resolve: {
        root: [path.resolve(__dirname, 'app'), path.resolve(__dirname, 'node_modules')],
        extensions: ['', '.js', '.jsx', '.css'],
        modulesDirectories: ['node_modules', 'components']
    },
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: 'public/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.jsx?$/,
                loader: "babel",
                exclude: /node_modules/,
            },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract(
                    'style?singleton',
                    'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
                ),
            }
        ]
    },
    postcss: function (webpack) {
        return [
            require('autoprefixer'),
            require("postcss-import")({ addDependencyTo: webpack }),
            require("postcss-url")(),
            require("postcss-cssnext")(),
        ];
    },
    devServer: {
        contentBase: __dirname + '/public',
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new ExtractTextPlugin('style.css', { allChunks: true }),
    ],
};