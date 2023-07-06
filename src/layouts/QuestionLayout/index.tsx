import React, { FC } from 'react'
import { Spin } from 'antd'
import styles from './index.module.scss'
import { Outlet } from 'react-router-dom'
import useLoadUserInfo from '@/hooks/useLoadUserInfo'
import useBeforePageNav from '@/hooks/useBeforePageNav'

const QuestionLayout: FC = () => {
    const { userInfoLoading } = useLoadUserInfo()
    useBeforePageNav(userInfoLoading)

    const spinContainer = () => {
        return (<Spin className={styles.spin} size='large' />)
    }

    return (
        <div className={ styles.layout }>
            {userInfoLoading ? spinContainer() : <Outlet />}
        </div>
    )
}

export default QuestionLayout