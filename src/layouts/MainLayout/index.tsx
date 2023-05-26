import React, { FC } from 'react'
import { Layout } from 'antd'
import MyHeader from '@/components/MyHeader'
import { Outlet } from 'react-router-dom'
import styles from './index.module.scss'

const { Header, Footer, Content } = Layout

const MainLayout: FC = () => {
    return (
        <Layout className={ styles.layout }>
            <Header className={ styles.header }>
                <MyHeader />
            </Header>

            <Content className={ styles.main }>
                <Outlet />
            </Content>

            <Footer className={ styles.footer }>
                小智问卷 ©2023 Created by cocoon
            </Footer>
        </Layout>
    )
}

export default MainLayout
