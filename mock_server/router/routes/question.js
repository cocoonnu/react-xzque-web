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

    // 获取某页问卷列表
    {
        url: '/api/question',
        method: 'get',
        response() {
            return {
                errno: 0,
                data: {
                    list: getQuestionList(),
                    total: 100
                }
            }
        }
    },

]