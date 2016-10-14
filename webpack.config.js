let webpack = require("webpack");
const pkg = require("./package");
let ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackBrowserPlugin = require('webpack-browser-plugin');

let path = require("path");

let app_root = "/src";

module.exports = {
    app_root: app_root,
    entry: {
        main: [
            "webpack-dev-server/client?http://localhost:8080",
            "webpack/hot/only-dev-server",
            __dirname + app_root + "/client/index.js",
        ],
        vendor: [
            __dirname + '/node_modules/font-awesome/scss/font-awesome.scss',
            __dirname + '/node_modules/roboto-fontface/css/roboto/sass/roboto-fontface.scss',
            __dirname + '/vendor/css/material-ui-font.scss',
        ]
    },
    resolve: {
        root: [path.resolve(__dirname, "src"), path.resolve(__dirname, "node_modules")],
        extensions: ["", ".js", ".jsx", ".css", ".scss", ".png", "jpg", "eot", "svg", "ttf", "woff", "woff2"],
        modulesDirectories: ["node_modules", "components"]
    },
    output: {
        path: path.join(__dirname, "public"),
        publicPath: "/public/",
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ["eslint-loader", "babel"],
                exclude: /node_modules/,
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.jsx?$/,
                loaders: ["eslint-loader", "babel"],
                exclude: /node_modules/,
            },
            {
                test: /(\.scss|\.css)$/,
                exclude: [
                    /node_modules\/font-awesome/,
                    /node_modules\/roboto-fontface/,
                    /vendor/
                ],
                loader: ExtractTextPlugin.extract(
                    'style?singleton',
                    'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass'
                ),
            },
            {
                test: /\.scss$/,
                include: [
                    /node_modules\/font-awesome/,
                    /node_modules\/roboto-fontface/,
                    /vendor/
                ],
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff&name=fonts/[name]/[hash].[ext]"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff&name=fonts/[name]/[hash].[ext]"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream&name=fonts/[name]/[hash].[ext]"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file?&name=./fonts/[name]/[hash].[ext]"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml&name=fonts/[name]/[hash].[ext]"
            },
            {
                test: /\.png$/, loader: "url-loader?limit=100000"
            },
            {
                test: /\.jpg$/, loader: "file-loader"
            }
        ]
    },
    sassLoader: {
        data: '@import "' + path.resolve(__dirname, 'src/app/theme/_theme.scss') + '";'
    },
    postcss: function (webpack) {
        return [
            require("postcss-import")({ addDependencyTo: webpack }),
            require("postcss-url")(),
            require("precss")(),
            require("postcss-cssnext")(),
        ];
    },
    devServer: {
        contentBase: __dirname + "/public",
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin(
            'vendor', '[name].js'
        ),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development"),
            VERSION: JSON.stringify(pkg.version)
        }),
        new ExtractTextPlugin("[name].css", { allChunks: true }),
        // new WebpackBrowserPlugin()

    ],
};