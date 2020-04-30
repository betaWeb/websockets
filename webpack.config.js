const path = require('path')
const buildPath = path.resolve(__dirname, "./dist")
const isDev = process.env.ENV === 'development'

module.exports = {
    mode: process.env.ENV || 'production',
    target: "web",
    entry: [
        // '@babel/polyfill',
        "./src/Websockets.js"
    ],
    output: {
        path: buildPath,
        filename: `Websockets.min.js`,
    },
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