const Mock = require('mockjs')
const Random = Mock.Random

// 生成问卷列表
function getQuestionList(option = {}) {
    const { len = 10, isDeleted = false, isStar = false } = option
    const list = []
    for (let i = 0; i < len; i++) {
        list.push({
            _id: Random.id(),
            title: Random.title(),
            isPublished: Random.boolean(),
            isStar,
            answerCount: Random.natural(50, 100),
            createdAt: Random.datetime(),
            isDeleted,  // 假删除
        })
    }
    return list
}

module.exports = getQuestionList
