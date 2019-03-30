const cleanWebpackPlugin = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const config = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[contenthash:8].js'
    },
    plugins: [
        new cleanWebpackPlugin(),
        new htmlWebpackPlugin()
    ]
}

module.exports = config