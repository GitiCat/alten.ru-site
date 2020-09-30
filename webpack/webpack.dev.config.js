const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')

const { PATHS } = require('./paths')
const devServerHost = '192.168.0.173',
    devServerPort = 8080

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        runtimeChunk: true
    },
    devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true,
        noInfo: false,
        host: devServerHost,
        port: devServerPort,
        contentBase: PATHS.PUBLIC,
        overlay: {
            warnings: true,
            errors: true
        },
        proxy: {
            '/api_v0/': {
                target: 'http://192.168.0.173:8000',
                secure: false,
                changeOrigin: true
            },
            '/media/': {
                target: 'http://192.168.0.173:8000',
                secure: false,
                changeOrigin: true
            },
            '/static/assepts/': {
                target: 'http://192.168.0.173:8000',
                secure: false,
                changeOrigin: true
            },
        }
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]
})

module.exports = new Promise((resolve) => {
    resolve(devWebpackConfig)
})