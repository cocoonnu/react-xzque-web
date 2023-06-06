const Mock = require('mockjs')
const getQuestionList = require('../data/getQuestionList')
const Random = Mock.Random

module.exports = [
    // 新建问卷
    {
        url: '/api/question',
        method: 'post',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id()
                }

                // 错误返回格式 { errno: 404, msg: '新建问卷失败' }
            }
        }
    },

    // 获取某页问卷列表（可通过搜索框关键词、是否星标、是否删除过滤）
    {
        url: '/api/question',
        method: 'get',
        response(ctx) {
            return {
                errno: 0,
                data: {
                    list: getQuestionList(ctx),
                    total: 50,
                    params: ctx.query
                }
            }

            // 错误返回格式 { errno: 404, msg: '获取某页问卷列表失败' }
        }
    },

    // 更新问卷（设置标星或删除）
    {
        url: '/api/question/:id',
        method: 'patch',
        response() {
            return {
                errno: 0,
            }
            // 错误返回格式 { errno: 404, msg: '更新问卷失败' }
        }
    },

    // 复制问卷: 生成一个新id，但是问卷内容一致
    {
        url: '/api/question/duplicate/:id',
        method: 'post',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id()
                }
            }
        }
    },

    // 批量彻底删除
    {
        url: '/api/question',
        method: 'delete',
        response() {
            return {
                errno: 0
            }
        }
    }
]