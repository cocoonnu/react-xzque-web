// import React, { FC, useState, useEffect } from 'react'
import React, { FC } from 'react'
// import { Empty, Spin } from 'antd'
// import { useSearchParams } from 'react-router-dom'
// import { useRequest } from 'ahooks'
// import { getQuestionPageListApi } from '@/services/question'
import styles from '../common.module.scss'
import ListSearch from '@/components/ListSearch'
// import { LIST_SEARCH_KEY, LIST_PAGE_KEY, LIST_PAGE_SIZE_KEY } from '@/constant'
// import { LIST_PAGE_SIZE } from '@/constant'
// import { QuestionCardType } from '@/types'


const List: FC = () => {
    // const [questionList, setQuestionList] = useState<Array<QuestionCardType>>([])
    // const [searchParams] = useSearchParams()
    // const keyword = searchParams.get(LIST_SEARCH_KEY) || ''

    // 创建手动触发的发送请求异步函数
    // const { run: LoadQuestionList, loading } = useRequest(async () => {
    //     return await getQuestionPageListApi({ page, pageSize, keyword })
    // }, {
    //     manual: true,
    //     onSuccess(data) {
    //         console.log(data)
    //     }
    // })

    // useEffect(() => {
    //     LoadQuestionList()
    // }, [searchParams])

    // const randerQuestionCard = () => {
    //     const randerQuestionList = () => {
    //         return questionList.map((item: QuestionCardType) => {
    //             return <QuestionCard {...item} key={item._id} />
    //         })                
    //     }
    
    //     const randerEmpty = () => {
    //         return <Empty description='当前暂无问卷数据' style={{ marginTop: 100 }} />
    //     }
    //     return questionList.length > 0 ? randerQuestionList() : randerEmpty()
    // }

    return (
        <div className={ styles.container }>

            <div className={styles.header}>
                <span className={ styles.title }>我的问卷</span>

                <ListSearch />
            </div>


            <div className={ styles.body }>
                111
                {/* { loading ? <Spin size='large' /> : randerQuestionCard() } */}
            </div>


            <div className={ styles.footer }>下拉加载更多...</div>
            
        </div>
    )
}

export default List