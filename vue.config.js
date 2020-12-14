const path = require('path');
module.exports = {
    configureWebpack: (config) => {
        config.module.rules.push({
            test: /\.vue$/,
            use: [{
                loader: './file-server/auto-open-vue.js',
                options: {}
            }]
        })
    },
}