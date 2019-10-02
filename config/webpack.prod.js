var merge = require('webpack-merge');
var dev = require('./webpack.dev.js');

module.exports = merge(dev, {
    mode: 'production'
});