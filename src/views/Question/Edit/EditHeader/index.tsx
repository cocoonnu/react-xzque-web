import React, { FC } from 'react'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'
import { Button, Space } from 'antd'
import { LeftOutlined } from '@ant-design/icons'

const EditHeader: FC = () => {
    // const { Title } = Typography
    const nav = useNavigate()

    return (
        <div className={styles['header-wrapper']}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <Space>
                        <Button type='link' icon={<LeftOutlined />} onClick={() => nav(-1)}>
                            返回
                        </Button>
                        问卷标题
                    </Space>
                </div>
                <div className={styles.main}>
                    中间
                </div>
                <div className={styles.right}>
                    <Space>
                        <Button>保存</Button>
                        <Button>发布</Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default EditHeader