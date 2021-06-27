// const MockPlugin = require('src/mockjs/mock_plugin');
const vConsolePlugin = require('vconsole-webpack-plugin');
module.exports = {
    configureWebpack: {
        plugins: [
            new vConsolePlugin({
                filter: [],
                enable: process.env.VUE_APP_VCONSOLE === 'YES'
            })
            // new MockPlugin({
            //     enable: process.env.VUE_APP_MOCK != '0'
            // })
        ]
    },
    devServer: {
        port: '8081',
        proxy: {
            '/api': {
                target: 'http://8.133.162.30:8080/api',
                pathRewrite: { // 重写路径 比如'/api/login' => '/login' http://localhost:8080/api/login
                    '^/api': ''
                }
            },
            '/apiT': {
                target: 'http://localhost:8080/', // http://localhost:8080/apiT
            },

        }
    }
};
