import { useRequest } from 'ahooks'
import { useSearchParams } from 'react-router-dom'
import { getQuestionPageListApi } from '@/services/question'
import { LIST_SEARCH_KEY, LIST_PAGE_KEY, LIST_PAGE_SIZE_KEY } from '@/constant'
import { LIST_PAGE_SIZE } from '@/constant'

type LoadOptionType = {
    isStar: boolean // 通过是否星标过滤
    isDeleted: boolean // 通过是否删除过滤
}


// 这个 hook 是自动触发，依赖项为URL searchParams
// 用于封装公共逻辑获取合并的过滤项之后在发送请求
const useLoadQueList = (loadOption: Partial<LoadOptionType>) => {
    // 用于区分我的问卷、星标问卷和回收站
    const { isStar = false, isDeleted = false } = loadOption

    // 根据搜索框关键字keyword加载
    const [searchParams] = useSearchParams()
    const keyword = searchParams.get(LIST_SEARCH_KEY) || ''

    // 根据第几页和每页总数加载
    const page = parseInt(searchParams.get(LIST_PAGE_KEY)) || 1
    const pageSize = parseInt(searchParams.get(LIST_PAGE_SIZE_KEY)) || LIST_PAGE_SIZE

    // 合并过滤项
    const SearchOption = { isStar, isDeleted, keyword, page, pageSize }

    const { loading, data, refresh } = useRequest(() => getQuestionPageListApi(SearchOption), {
        refreshDeps: [searchParams]
    })

    return { loading, data, refresh }
}

export default useLoadQueList
