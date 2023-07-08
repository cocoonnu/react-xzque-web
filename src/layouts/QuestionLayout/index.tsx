import React, { FC } from 'react'
import styles from './index.module.scss'
import { Outlet } from 'react-router-dom'
import useLoadUserInfo from '@/hooks/useLoadUserInfo'
import useBeforePageNav from '@/hooks/useBeforePageNav'

const QuestionLayout: FC = () => {
    const { userInfoLoading } = useLoadUserInfo()
    useBeforePageNav(userInfoLoading)

    return (
        <div className={ styles.layout }>
            <Outlet />
        </div>
    )
}

export default QuestionLayout