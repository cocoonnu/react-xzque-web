import React, { FC } from 'react'
import { Image, Button } from 'antd'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/store'
import { clearUserState } from '@/store/modules/userReducer'
import useGetUserInfo from '@/hooks/useGetUserInfo'

const MyHeader: FC = () => {
    const nav = useNavigate()
    const dispatch = useAppDispatch()
    const { userState, isLogin } = useGetUserInfo()

    const logout = () => {
        localStorage.removeItem('TOKEN')
        dispatch(clearUserState())
        nav('/login')
    } 

    
    const userContainer = (
        <div className={styles.user}>
            <span>{userState.nickname}</span>
            <Button type='link' onClick={logout}>登出</Button>
        </div>
    )

    const loginContainer = (
        <div className={styles.user} onClick={() => nav('/login')}>登录/注册</div>
    )

    return (
        <div className={ styles.container }>
            <div className={ styles.logo }>
                <Image src={require('@/assets/images/react.png')} />

                <span 
                    className={ styles['logo-text'] }
                    onClick={() => nav('/')}
                >小智问卷</span>
            </div>

            {isLogin ? userContainer : loginContainer}    
        </div>
    )
}

export default MyHeader