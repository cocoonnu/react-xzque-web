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
                    total: 100,
                    params: ctx.query
                }
            }
        }
    },

]