const { merge } = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')

const baseWebpackConfig = require('./webpack.base.config')
const { PATHS } = require('./paths')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

const buildWebpackConfig = merge(baseWebpackConfig, {
    output: {
        chunkFilename: '[name].[chunkhash:8].js',
        publicPath: '/static/assepts/'
    },
    mode: 'production',
    devtool: false,
    target: 'web',
    externals: {
        React: 'react',
        ReactDOM: 'react-dom'
    },
    optimization: {
        namedModules: false,
        namedChunks: false,
        flagIncludedChunks: true,
        occurrenceOrder: true,
        sideEffects: true,
        usedExports: true,
        concatenateModules: true,
        runtimeChunk: {
            name: entrypoint => `runtime~${entrypoint.name}`
        },
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                        return `npm.${packageName.replace('@', '')}`
                    },
                    chunks: 'all'
                }
            }
        },
        noEmitOnErrors: true,
        minimize: true,
        minimizer: [new TerserPlugin({
            cache: true,
            parallel: true,
            sourceMap: true,
            terserOptions: {
                compress: {
                    conditionals: true,
                    dead_code: true,
                    directives: true,
                    if_return: true
                }
            }
        })],
        removeAvailableModules: true,
        removeEmptyChunks: true,
        mergeDuplicateChunks: true
    },
    plugins: [
        new LodashModuleReplacementPlugin(),
        new webpack.HashedModuleIdsPlugin({
            hashFunction: 'sha256',
            hashDigest: 'hex',
            hashDigestLength: 4,
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.ProgressPlugin(),
        new CopyWebpackPlugin({
            patterns: [{
                    from: path.resolve(PATHS.PUBLIC, 'fonts'),
                    to: 'fonts'
                },
                {
                    from: path.resolve(PATHS.PUBLIC, 'images'),
                    to: 'images'
                },
                {
                    from: path.resolve(PATHS.PUBLIC, 'scripts'),
                    to: 'scripts'
                }
            ]
        })
    ]
})

module.exports = new Promise((resolve) => {
    resolve(buildWebpackConfig)
})