import React, { FC } from 'react'
import { Layout, Spin } from 'antd'
import MyHeader from '@/components/MyHeader'
import { Outlet } from 'react-router-dom'
import styles from './index.module.scss'
import useLoadUserInfo from '@/hooks/useLoadUserInfo'
import useBeforePageNav from '@/hooks/useBeforePageNav'

const { Header, Footer, Content } = Layout

const MainLayout: FC = () => {
    const { userInfoLoading } = useLoadUserInfo()
    useBeforePageNav(userInfoLoading)

    const spinContainer = () => {
        return (<Spin className={styles.spin} size='large' />)
    }

    return (
        <Layout className={ styles.layout }>
            <Header className={ styles.header }>
                <MyHeader />
            </Header>

            <Content className={ styles.main }>
                {userInfoLoading ? spinContainer() : <Outlet />}
            </Content>

            <Footer className={ styles.footer }>
                小智问卷 ©2023 Created by cocoon
            </Footer>
        </Layout>
    )
}

export default MainLayout
