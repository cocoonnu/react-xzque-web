import axiosInstance from '@/services/axiosInstance'

type ResType = {
    errno: number
    data?: any
    msg?: string
}

type userRegisterDataType = {
    username: string
    password: string
    nickname?: string | undefined
}

type userLoginDataType = {
    username: string
    password: string
}

// 注册用户
export async function registerUserApi(userRegisterData: userRegisterDataType) {
    const { username, password, nickname } = userRegisterData
    const body = { username, password, nickname: nickname || username }

    const url = '/api/user/register'
    const res = await axiosInstance.post(url, { ...body }) as ResType

    if (res.errno === 0) return Promise.resolve(true)
    return Promise.reject(false)
}

// 用户登录
export async function loginUserApi(userLoginData: userLoginDataType) {
    const url = '/api/user/login'
    const res = await axiosInstance.post(url, { ...userLoginData }) as ResType

    type ResDataType = {
        token: string
    }

    if (res.errno === 0) return res.data as ResDataType
    return Promise.reject({} as ResDataType)
}

// 获取用户信息
export async function getUserInfoApi() {
    const url = '/api/user/info'
    const res = await axiosInstance.get(url) as ResType

    type ResDataType = {
        usename: string
        nickname: string
    }

    if (res.errno === 0) return res.data as ResDataType
    return Promise.reject({} as ResDataType)
}
