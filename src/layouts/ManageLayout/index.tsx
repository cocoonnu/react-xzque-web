import React, { FC } from 'react'
import styles from './index.module.scss'
import { Button, Space } from 'antd'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { PlusOutlined, BarsOutlined, StarOutlined, DeleteOutlined } from '@ant-design/icons'

const ManageLayout: FC = () => {
    const nav = useNavigate()
    const { pathname } = useLocation()
    
    return (
        <div className={ styles.container }>
            <div className={ styles['container-content'] }>

                {/* 左边的按钮选项 */}
                <Space direction='vertical'>
                    <Button 
                        size='large'
                        type='primary'
                        icon={<PlusOutlined />}
                        onClick={() => { nav('/question') }}
                        style={{ marginBottom: '40px'}}
                    >
                        新建问卷
                    </Button>

                    <Button
                        size='large'
                        icon={<BarsOutlined />}
                        onClick={() => { nav('/manage/list') }}
                        type={pathname == '/manage/list' ? 'default' : 'text'}
                    >
                        我的问卷
                    </Button>

                    <Button
                        size='large'
                        icon={<StarOutlined />}
                        onClick={() => { nav('/manage/star') }}
                        type={pathname == '/manage/star' ? 'default' : 'text'}
                    >
                        星标问卷
                    </Button>

                    <Button
                        size='large'
                        icon={<DeleteOutlined />}
                        onClick={() => { nav('/manage/trash') }}
                        type={pathname == '/manage/trash' ? 'default' : 'text'}
                    >
                        回收站&emsp;
                    </Button>

                </Space>

                {/* 右边的问卷管理页面 */}
                <div className={styles['right-list']}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default ManageLayout