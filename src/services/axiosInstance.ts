import axios from 'axios'
import { message } from 'antd'

const axiosInstance = axios.create({
    // 设置一些发送请求的默认值: headers baseURL
    timeout: 5000,
})

// 请求拦截器
axiosInstance.interceptors.request.use(function(config) {
    
    // 设置 TOKEN 请求头 JWT 固定格式
    const token = localStorage.getItem('TOKEN') || ''
    // config.headers['Authorization'] = `Bearer ${token}`
    if (token) config.headers['Authorization'] = token
    
    return config
})

// 响应拦截器
axiosInstance.interceptors.response.use(function(response) {

    // 统一输出错误提示
    const res: any = response.data || {}
    
    if (res.errno !== 0) {
        if (res.msg) message.error(res.msg)
        else message.error('未知错误，请稍后重试')
    }

    // 直接返回响应体内容
    return res

}, error => {
    // 开发模式下打印
    console.log(error) 
    console.log('响应状态码不为2xx，请检查请求地址是否出错')

    // 统一输出错误提示
    message.error('请求失败，请稍后重试')
    return error
})

export default axiosInstance