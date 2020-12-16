// 以插件的形式向代码中注入./mock.js 解耦mock与业务代码
const path = require('path')

class MockPlugin {
    constructor(option) {
        this.option = option
    }

    apply(compiler) {
        const pathVconsole = path.join(__dirname, './index.js')
        compiler.hooks.entryOption.tap({name: 'MockPlugin'}, (local, entry) => {
            if (this.option.enable) {
                if (typeof entry === 'object') {
                    for (const key in entry) {
                        if (Object.prototype.toString.call(entry[key]) === '[object Array]') {
                            entry[key].unshift(pathVconsole)
                        } else if (typeof entry[key] === 'string') {
                            entry[key] = [pathVconsole, entry[key]]
                        }
                    }
                }
            }
        })
    }
}

module.exports = MockPlugin