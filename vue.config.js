const MockPlugin = require('./src/mock/mock_plugin.js')
module.exports = {
    configureWebpack: {
        plugins: [
            new MockPlugin({
                enable: process.env.VUE_APP_MOCK != '0'
            })
        ]
    }
}