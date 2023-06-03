import React, { FC } from 'react'
// import { Empty } from 'antd'
import styles from '../common.module.scss'
// import QuestionCard from '@/components/QuestionCard'
import ListSearch from '@/components/ListSearch'


const Star: FC = () => {

    return (
        <div className={styles.container}>

            <div className={styles.header}>
                <span className={styles.title}>星标问卷</span>

                <ListSearch />
            </div>


            <div className={styles.body}>
                {/* {questionList.length < 2 && 
                    <Empty description='当前暂无星标问卷' style={{ marginTop: 100 }} />
                }
                
                {questionList.length > 2 && questionList.map(item => {
                    return <QuestionCard {...item} key={item._id} />
                })} */}
            </div>


            {/* <div className={ styles.footer }>分页器</div> */}

        </div>
    )
}

export default Star