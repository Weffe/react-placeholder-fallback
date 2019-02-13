import * as webpack from 'webpack';
import baseConfig from './config/webpack.base.config'
import merge from 'webpack-merge'

const prodConfig: webpack.Configuration = merge(baseConfig(__dirname), {
    mode: 'production',
    devtool: 'source-map'
});

export default prodConfig;
