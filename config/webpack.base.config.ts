import * as path from 'path';
import * as webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

const config = (rootdir: string): webpack.Configuration => ({
    context: rootdir,
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    } as webpack.NewLoader,
                    'css-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.css', '.js'],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.css'
        }),
    ],
    externals: {
        react: {
            root: '_',
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'React',
        }
    },
    output: {
        path: path.resolve(rootdir, 'dist'),
        filename: 'index.js',
        library: 'react-placeholder-fallback',
        libraryTarget: 'umd',
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin()
        ]
    },
});

export default config;
