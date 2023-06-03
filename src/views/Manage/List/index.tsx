import React, { FC } from 'react'
import { Empty, Spin } from 'antd'
import { useRequest } from 'ahooks'
import styles from '../common.module.scss'
import QuestionCard from '@/components/QuestionCard'
import ListSearch from '@/components/ListSearch'
import { getQuestionPageListApi } from '@/services/question'
import type { QuestionCardType } from '@/types'

const List: FC = () => {
    const { data: questionData, loading } = useRequest(getQuestionPageListApi)
    const { list: questionList = [] } = questionData || { list: [] }


    const randerQuestionList = () => {
        return <>
            {
                questionList.map((item: QuestionCardType) => {
                    return <QuestionCard {...item} key={item._id} />
                })                
            }
        </>
    }

    const randerEmpty = () => {
        return <Empty description='当前暂无问卷数据' style={{ marginTop: 100 }} />
    }

    return (
        <div className={ styles.container }>

            <div className={styles.header}>
                <span className={ styles.title }>我的问卷</span>

                <ListSearch />
            </div>


            <div className={ styles.body }>
                {
                    loading ? <Spin size='large' /> : <>
                        {
                            questionList.length > 0 ? randerQuestionList() : randerEmpty()
                        }
                    </>
                }
            </div>


            {/* <div className={ styles.footer }>上划加载更多</div> */}
            
        </div>
    )
}

export default List