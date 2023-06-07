import React, { FC } from 'react'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { getUserInfoApi } from '@/services/users'
import { Image, Button } from 'antd'


const MyHeader: FC = () => {
    const nav = useNavigate()
    const { data: userInfo } = useRequest(getUserInfoApi)
    const { nickname = '' } = userInfo || { nickname: '' }

    const logout = () => {
        localStorage.removeItem('TOKEN')
        nav('/login')
    }

    const userContainer = (
        <div className={styles.user}>
            <span>{nickname}</span>
            <Button type='link' onClick={logout}>登出</Button>
        </div>
    )

    return (
        <div className={ styles.container }>
            <div className={ styles.logo }>
                <Image src={require('@/assets/images/react.png')} />

                <span 
                    className={ styles['logo-text'] }
                    onClick={() => { nav('/') }}
                >小智问卷</span>
            </div>

            {nickname ? userContainer : <div className={styles.user}>登录/注册</div>}    
        </div>
    )
}

export default MyHeader