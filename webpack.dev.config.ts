import * as webpack from 'webpack';
import baseConfig from './config/webpack.base.config'
import merge from 'webpack-merge'

const devConfig: webpack.Configuration = merge(baseConfig(__dirname), {
    mode: 'development',
    devtool: 'cheap-eval-source-map',
    watch: true,
});

export default devConfig;
