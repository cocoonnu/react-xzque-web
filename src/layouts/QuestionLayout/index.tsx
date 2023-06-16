import React, { FC } from 'react'
import useLoadUserInfo from '@/hooks/useLoadUserInfo'
import useBeforePageNav from '@/hooks/useBeforePageNav'
import styles from './index.module.scss'
import { Outlet } from 'react-router-dom'
import { Spin } from 'antd'

const QuestionLayout: FC = () => {
    const { userInfoLoading } = useLoadUserInfo()
    useBeforePageNav(userInfoLoading)

    const spinContainer = () => {
        return (<Spin className={styles.spin} size='large' />)
    }

    return (
        <div className={ styles.layout }>
            {/* {spinContainer()} */}
            {userInfoLoading ? spinContainer() : <Outlet />}
        </div>
    )
}

export default QuestionLayout