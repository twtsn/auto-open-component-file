const path = require('path');
module.exports = {
    configureWebpack: (config) => {
        config.module.rules.push({
            test: /\.vue$/,
            use: [{
                loader: './file-server/auto-open-vue.js',
                options: {
                    exePath: "D:\\Program Files\\JetBrains\\WebStorm 2018.1.3\\bin\\webstorm64.exe"
                }
            }]
        })
    },
}