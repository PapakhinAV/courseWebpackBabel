const path = require('path');

module.exports = {
    entry: './temp/index.js',
    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'dist'),
    },
};
