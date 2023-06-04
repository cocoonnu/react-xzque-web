const Mock = require('mockjs')
const Random = Mock.Random

function turnBoolean(str) {
    if (str === 'true') return true
    if (str === 'false') return false
    return false
}

function getQuestionList(ctx) {
    let { pageSize, page, isDeleted, isStar: isStarG, keyword = '' } = ctx.query
    isDeleted = turnBoolean(isDeleted)
    isStarG = turnBoolean(isStarG)
    pageSize = parseInt(pageSize)
    page = parseInt(page)

    const list = []
    for (let i = 0; i < pageSize; i++) {
        const isStar = isStarG ? isStarG : Random.boolean()

        list.push({
            _id: Random.id(),
            title: Random.title(),
            isPublished: Random.boolean(),
            answerCount: Random.natural(50, 100),
            createdAt: Random.datetime(),
            isDeleted,  // 假删除,
            isStar,
            keyword,
            pageSize,
            page
        })
    }
    return list
}

module.exports = getQuestionList
