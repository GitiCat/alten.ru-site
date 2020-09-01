const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'),
      WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const serverHost = 'localhost',
      serverPort = 8080;

const bundleAnalyzerHost = 'localhost',
      bundleAnalyzerPort = 3000;

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                enforce: 'pre',
                test: /\.js(x?)$/,
                loader: 'source-map-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'public', 'template', 'index.html'),
            inject: 'body'
        }),
        new WebpackBundleAnalyzer({
            analyzerHost: bundleAnalyzerHost,
            analyzerPort: bundleAnalyzerPort,
            analyzerMode: 'static',
            logLevel: 'error',
            openAnalyzer: false
        })
    ],
    devServer: {
        host: serverHost,
        port: serverPort,
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'src', 'public'),

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
            }
        }
    }
}