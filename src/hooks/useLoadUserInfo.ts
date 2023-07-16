import { useEffect, useState } from 'react'
import { useRequest } from 'ahooks'
import { getUserInfoApi } from '@/services/users'
import { setUserState } from '@/store/modules/userReducer'
import { useAppDispatch } from '@/store'
import { useLocation } from 'react-router-dom'
import useGetUserInfo from './useGetUserInfo'

// 封装加载用户信息函数
const useLoadUserInfo = () => {
    const dispatch = useAppDispatch()
    const { pathname } = useLocation()
    const { isLogin } = useGetUserInfo()
    const loadUserInfoPage = ['/', '/manage/list']

    const [userInfoLoading, setUserInfoLoading] = useState(true)

    const { run: loadUserInfo, runAsync: loadUserInfoAsync } = useRequest(getUserInfoApi, {
        manual: true,
        onSuccess(data) {
            if (data) dispatch(setUserState(data))
        },
        onFinally() {
            setUserInfoLoading(false)
        }
    })

    useEffect(() => {
        if (isLogin) setUserInfoLoading(false)

        if (!isLogin && loadUserInfoPage.includes(pathname)) {
            loadUserInfo()
            return
        }

        setUserInfoLoading(false)
    }, [pathname, isLogin])

    return { userInfoLoading, loadUserInfo, loadUserInfoAsync }
}

export default useLoadUserInfo