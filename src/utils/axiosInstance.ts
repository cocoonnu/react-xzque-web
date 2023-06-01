import axios, { AxiosResponse } from 'axios'
import { message } from 'antd'

type ResType = {
    errno: number,
    data?: any,
    msg?: string
}

const axiosInstance = axios.create({
    // 设置一些发送请求的默认值: headers baseURL
    timeout: 5000
})

// 请求拦截器
axiosInstance.interceptors.request.use(function(config) {
    return config
})

// 响应拦截器
axiosInstance.interceptors.response.use(function(response: AxiosResponse) {
    // 将响应体内容作为结果
    const res: ResType = response.data || {}

    if (res.errno !== 0) message.error(res.msg)

    // 函数默认要求返回response: AxiosResponse，这里直接返回结果的data属性
    return res.data
}, error => {
    console.log('响应状态码不为2xx，请检查请求地址是否出错')
    return Promise.reject(error)
})

export default axiosInstance