const path = require('path')
const reslove = pathname => path.resolve(__dirname, pathname)

module.exports = {
    webpack: {
        alias: {
            '@': reslove('src'),
        }
    }
}