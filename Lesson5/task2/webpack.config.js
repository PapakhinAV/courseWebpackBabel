const path = require('path')

module.exports = {
    entry: {
        index: './src/my-index.js',
        dashboard: './src/dashboard/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    }
}
