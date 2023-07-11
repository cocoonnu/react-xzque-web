import React, { FC } from 'react'
import styles from './index.module.scss'
import EditCanvas from './EditCanvas'
import EditLeft from './EditLeft' 
import EditRight from './EditRight'
import EditHeader from './EditHeader'

const Edit: FC = () => {
    return (
        <div className={ styles.edit }>
            <header className={styles.header}><EditHeader /></header>

            <div className={ styles['edit-body'] }>
                <div className={styles.content}>
                    <div className={styles.left}><EditLeft /></div>
                    <div className={styles.main}><EditCanvas/></div>
                    <div className={styles.right}><EditRight /></div>
                </div>
            </div>
        </div>
    )
}

export default Edit