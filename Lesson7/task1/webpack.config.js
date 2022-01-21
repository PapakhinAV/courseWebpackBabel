const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        assetModuleFilename: 'images/[name][ext]'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
}
