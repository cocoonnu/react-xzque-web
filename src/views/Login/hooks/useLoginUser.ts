import { message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { useAppDispatch } from '@/store'
import { loginUserApi } from '@/services/users'
import useLoadUserInfo from '@/hooks/useLoadUserInfo'
import { setUserState } from '@/store/modules/userReducer'
import type { formValueType } from '@/views/Login'

const useLoginUser = () => {
    const nav = useNavigate()
    const { loadUserInfoAsync } = useLoadUserInfo()
    const dispatch = useAppDispatch()

    const { run: loginUser, loading } = useRequest((formValue: formValueType) => {
        const { username, password } = formValue
        return loginUserApi({ username, password })
    }, {
        manual: true,
        onSuccess(res: { token: string }) {
            localStorage.setItem('TOKEN', res.token || '')

            // 登录成功后加载用户信息并跳转
            loadUserInfoAsync().then(data => {
                dispatch(setUserState(data))
                message.success('登录成功')
                nav('/manage')
            })
        }
    })

    return { loginUser, loading }
}

export default useLoginUser