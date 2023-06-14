import { StoreStateType, useAppSelector } from '@/store'

const useGetUserInfo = () => {
    const userState = useAppSelector((state: StoreStateType) => state.user)
    const isLogin = userState.nickname ? true : false  
    
    return { userState, isLogin }
}

export default useGetUserInfo
