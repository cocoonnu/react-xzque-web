import { useState, useEffect } from 'react'
import { StoreStateType, useAppSelector } from '@/store'

const useGetUserInfo = () => {
    const [isLogin, setIsLogin] = useState(false)
    const userState = useAppSelector((state: StoreStateType) => state.user)
    
    useEffect(() => {
        if (userState.username) setIsLogin(true)
        else setIsLogin(false)
    }, [userState])

    return { userState, isLogin }
}

export default useGetUserInfo
