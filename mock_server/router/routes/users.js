const Mock = require('mockjs')
const Random = Mock.Random

module.exports = [
    // 获取用户信息
    {
        url: '/api/user/info',
        method: 'get',
        response(ctx) {
            if (ctx.request.header.authorization) {
                return {
                    errno: 0,
                    data: {
                        username: Random.title(),
                        nickname: Random.name()
                    }
                }
            } else {
                return { errno: 404, msg: '用户未登录' }
            }
        }
    },

    // 注册
    {
        url: '/api/user/register',
        method: 'post',
        response() {
            return {
                errno: 0
            }
        }
    },
    
    // 登录
    {
        url: '/api/user/login',
        method: 'post',
        response() {
            return {
                errno: 0,
                data: {
                    token: Random.word(20)
                }
            }

            // return {errno: 404, msg: '登录失败'}
        }
    }
]