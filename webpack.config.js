const path = require('path')
const buildPath = path.resolve(__dirname, "./dist")
const isDev = process.env.ENV === 'development'

const baseConfig = {
    entry: [
        // '@babel/polyfill',
        "./src/Websockets.js"
    ],
    devtool: isDev ? 'inline-source-map' : false,
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components|public)/,
                use: {loader: 'babel-loader'}
            }
        ]
    }
}

const serverConfig = {
    mode: 'development',
    target: 'node',
    output: {
        path: buildPath,
        library: 'Websockets',
        libraryTarget: 'umd',
        filename: `Websockets.node.js`,
        umdNamedDefine: true,
        globalObject: `(typeof self !== 'undefined' ? self : this)`
    },
    ...baseConfig
}

const clientConfig = {
    mode: process.env.ENV || 'production',
    target: 'web',
    output: {
        path: buildPath,
        filename: `Websockets.min.js`
    },
    ...baseConfig
}

module.exports = [ serverConfig, clientConfig ]
