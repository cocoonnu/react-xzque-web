import React, { FC } from 'react'
import styles from './index.module.scss'
import EditCanvas from './EditCanvas'
import EditLeft from './EditLeft' 

const Edit: FC = () => {

    return (
        <div className={ styles.edit }>
            <header className={ styles.header }>header</header>

            <div className={ styles['edit-body'] }>
                <div className={styles.content}>
                    <div className={styles.left}><EditLeft /></div>

                    <div className={styles.main}><EditCanvas/></div>

                    <div className={ styles.right }></div>
                </div>
            </div>
        </div>
    )
}

export default Edit