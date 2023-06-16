import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import styles from './index.module.scss'

const Edit: FC = () => {
    const { id } = useParams()

    return (
        <div className={ styles.edit }>
            <div className={ styles.header }>header</div>

            <div className={styles.content}>
                <div className={ styles.left }></div>
                <div className={ styles.main }>{id}</div>
                <div className={ styles.right }></div>
            </div>
        </div>
    )
}

export default Edit