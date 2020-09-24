const { merge } = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')

const baseWebpackConfig = require('./webpack.base.config')
const { PATHS } = require('./paths')

const CopyWebpackPlugin = require('copy-webpack-plugin')

const buildWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    optimization: {
        namedModules: false,
        namedChunks: false,
        flagIncludedChunks: true,
        occurrenceOrder: true,
        sideEffects: true,
        usedExports: true,
        concatenateModules: true,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /node_modules/,
                    name: 'vendor',
                    chunks: 'all'
                }
            },
            minSize: 30000,
            maxAsyncRequests: 5,
            maxInitialRequests: 3
        },
        noEmitOnErrors: true,
        minimize: true,
        removeAvailableModules: true,
        removeEmptyChunks: true,
        mergeDuplicateChunks: true
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin({
            hashFunction: 'sha256',
            hashDigest: 'hex',
            hashDigestLength: 4,
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.ProgressPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
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