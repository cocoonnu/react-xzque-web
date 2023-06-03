import axiosInstance from '@/services/axiosInstance'
type ResType = {
    errno: number,
    data?: ResDataType,
    msg?: string
}

type ResDataType = {
    [key: string]: any
}

// 新建问卷
export async function createQuestionApi(): Promise<ResDataType> {
    const url = '/api/question'
    const res = await axiosInstance.post(url) as ResType

    if (res.errno === 0) return res.data as ResDataType
    return Promise.reject({} as ResDataType)
}

// 获取某页问卷列表
export async function getQuestionPageListApi(): Promise<ResDataType> {
    const url = '/api/question'
    const res = await axiosInstance.get(url) as ResType
    
    if (res.errno === 0) return res.data as ResDataType
    return Promise.reject({} as ResDataType)
}