import { useEffect } from 'react'
import useGetUserInfo from './useGetUserInfo'
import { useLocation, useNavigate } from 'react-router-dom'

const useBeforePageNav = (userInfoLoading: boolean) => {
    const nav = useNavigate()
    const { isLogin } = useGetUserInfo()
    const { pathname } = useLocation()
    const mustLoginPages = ['manage', 'question']
    const loginRegPages = ['login', 'register']

    useEffect(() => {
        if (userInfoLoading) return

        // 未登录无法进入管理、新建问卷页
        if (!isLogin) {
            mustLoginPages.forEach(item => {
                if (pathname.includes(item)) nav('/login')
            })
        }
        
        // 已经登录则无法进入登录页
        if (isLogin) {
            loginRegPages.forEach(item => {
                if (pathname.includes(item)) nav('/')
            })
        }

    }, [pathname, isLogin, userInfoLoading])
}

export default useBeforePageNav