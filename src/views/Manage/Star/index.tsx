import React, { FC } from 'react'
import { Empty, Spin } from 'antd'
import styles from '../common.module.scss'
import QuestionCard from '@/components/QuestionCard'
import ListSearch from '@/components/ListSearch'
import useLoadQueList from '@/hooks/useLoadQueList'
import ListPagination from '@/components/ListPagination'


const Star: FC = () => {
    // 初始化获取问卷列表
    // 分页器和搜索框通过修改URL实现再一次执行异步函数获取
    const { data: questionData, loading } = useLoadQueList({ isStar: true })
    const { list: questionList = [] } = questionData || { list: [] }
    const { total = 0 } = questionData || { total: 0 }


    const randerQuestionCard = () => {
        const randerQuestionList = () => {
            return questionList.map((item) => {
                return <QuestionCard {...item} key={item._id} />
            })
        }

        const randerEmpty = (<Empty description='当前暂无星标问卷' style={{ marginTop: 100 }} />) 
        
        return questionList.length > 0 ? randerQuestionList() : randerEmpty
    }


    return (
        <div className={styles.container}>

            <div className={styles.header}>
                <span className={styles.title}>星标问卷</span>

                <ListSearch />
            </div>


            <div className={styles.body}>
                { loading ? <Spin /> : randerQuestionCard() }
            </div>


            <div className={ styles.footer }>
                { !loading && <ListPagination total={total} /> }
            </div>

        </div>
    )
}

export default Star