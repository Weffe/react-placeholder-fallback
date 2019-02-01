const path = require('path');
const PeerDepsExternalsPlugin = require('peer-deps-externals-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const pkg = require('./package.json')

module.exports = {
    mode: 'production',
    devtool: 'source-map', // for production to emit separate map files
    // devtool: 'cheap-module-eval-source-map',
    entry: './src/index.ts',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts']
    },
    plugins: [
        new ProgressBarPlugin(),
        new PeerDepsExternalsPlugin(),
        new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
    ],
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: pkg.name,
        libraryTarget: 'umd'
    }
};