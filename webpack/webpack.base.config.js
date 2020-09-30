const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin

const path = require('path')
const { PATHS } = require('./paths')

const bundleAnalyzerHost = 'localhost',
    bundleAnalyzerPort = 3000

module.exports = {
    entry: {
        app: path.resolve(PATHS.SRC, 'index.tsx')
    },
    output: {
        filename: '[name].js?v=[hash]',
        path: PATHS.BUILD,
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [{
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                loader: ['babel-loader', 'ts-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: '../postcss.config.js'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            verbose: true
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: PATHS.DEFAULT_TEMPLATE,
            hash: false,
            inject: 'body',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                html5: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new TerserWebpackPlugin({
            cache: true,
            parallel: true
        }),
        new WebpackBundleAnalyzer({
            analyzerHost: bundleAnalyzerHost,
            analyzerPort: bundleAnalyzerPort,
            analyzerMode: 'static',
            logLevel: 'error',
            openAnalyzer: false
        })
    ]
}