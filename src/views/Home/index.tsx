import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Typography } from 'antd'
import styles from './index.module.scss'
import { useAppSelector } from '@/store'
const { Title, Paragraph } = Typography

const Home: FC = () => {
    const nav = useNavigate()
    const userState = useAppSelector(state => state.user)
    const btnName = userState.nickname ? '开始使用' : '立即登录'

    const btnClick = () => {
        if (userState.nickname) nav('/manage')
        else nav('/login')
    }

    return (
        <div className={styles.container}>
            <div className={styles.info}>

                <Title>问卷调查 | 在线投票</Title>

                <Paragraph>已累计创建问卷 100 份，发布问卷 90 份，收到答卷 980 份</Paragraph>

                <Button type='primary' onClick={() => btnClick()}>
                    {btnName}
                </Button>
            </div>
        </div>
    )
}

export default Home