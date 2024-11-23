const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

module.exports = {
    ...defaultConfig,
    entry: {
        ...defaultConfig.entry(),
        'ecb.blocks.styles': './src/scss/index.scss'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    module: {
        ...defaultConfig.module,
        rules: [
            ...defaultConfig.module.rules,
        ]
    },
    
};