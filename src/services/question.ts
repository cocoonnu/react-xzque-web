import axiosInstance from '@/services/axiosInstance'
import { QuestionCardType } from '@/types'

type ResType = {
    errno: number
    data?: any
    msg?: string
}

type SearchOption = {
    keyword: string // 通过搜索框关键词过滤
    isStar: boolean // 通过是否星标过滤
    isDeleted: boolean // 通过是否删除过滤
    page: number // 获取第几页
    pageSize: number // 每页总数
}

// 新建问卷
export async function createQuestionApi() {
    const url = '/api/question'
    const res = await axiosInstance.post(url, { name: 'cocoon' }) as ResType

    type ResDataType = {
        id: string
    }

    if (res.errno === 0) return res.data as ResDataType
    return Promise.reject({} as ResDataType)
}


// 获取某页问卷列表
export async function getQuestionPageListApi(params: Partial<SearchOption>) {
    const url = '/api/question'
    const res = await axiosInstance.get(url, { params }) as ResType
    console.log(res.data)

    type ResDataType = {
        list: Array<QuestionCardType>
        total: number
    }

    if (res.errno === 0) return res.data as ResDataType
    return Promise.reject({} as ResDataType)
}