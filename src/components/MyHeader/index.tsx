import React, { FC } from 'react'
import styles from './index.module.scss'
import { Image } from 'antd'
import { useNavigate } from 'react-router-dom'


const MyHeader: FC = () => {
    const nav = useNavigate()

    return (
        <div className={ styles.container }>
            <div className={ styles.logo }>
                <Image src={require('@/assets/images/react.png')} />
                <span 
                    className={ styles['logo-text'] }
                    onClick={() => { nav('/') }}
                >
                    小智问卷
                </span>
            </div>
        </div>
    )
}

export default MyHeader