const cleanWebpackPlugin = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const config = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[contenthash:8].js'
    },
    module: {
      rules: [
        {
          test: /\.jpg$/,
          loader: 'file-loader',
          options: {}
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            }
          ]
        }
      ]
    },
    plugins: [
        new cleanWebpackPlugin(),
        new htmlWebpackPlugin(),
        // new UglifyjsWebpackPlugin()
    ]
}

module.exports = config