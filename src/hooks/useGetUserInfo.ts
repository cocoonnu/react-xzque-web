import { useAppSelector } from '@/store'

const useGetUserInfo = () => {
    const userState = useAppSelector((state) => state.user)
    const isLogin = userState.nickname ? true : false

    return { userState, isLogin }
}

export default useGetUserInfo
