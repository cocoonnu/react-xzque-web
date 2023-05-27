import React, { FC } from 'react'
import { Button, Result } from 'antd'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'

const NotFound: FC = () => {
    const nav = useNavigate()

    return (
        <div className={ styles.notfound }>
            <Result
                status='404'
                title='404'
                subTitle='抱歉，您访问的页面不存在'
                extra={<Button type='primary' onClick={() => { nav('/') }}>回到首页</Button>}
            />
        </div>
    )
}

export default NotFound