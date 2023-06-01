const path = require('path')
const reslove = pathname => path.resolve(__dirname, pathname)

module.exports = {
    webpack: {
        alias: {
            '@': reslove('src'),
        }
    },

    devServer: {
        port: 8000,
        proxy: {
            '/api': 'http://localhost:3001',
        },
    },    
}