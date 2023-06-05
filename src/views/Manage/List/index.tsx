import React, { FC, useState, useEffect, useRef } from 'react'
import { Empty, Spin } from 'antd'
import QuestionCard from '@/components/QuestionCard'
import { useSearchParams } from 'react-router-dom'
import { useRequest, useDebounceFn } from 'ahooks'
import { getQuestionPageListApi } from '@/services/question'
import styles from '../common.module.scss'
import ListSearch from '@/components/ListSearch'
import { LIST_SEARCH_KEY, LIST_PAGE_SIZE } from '@/constant'
import { QuestionCardType } from '@/types'


const List: FC = () => {
    const [questionList, setQuestionList] = useState<Array<QuestionCardType>>([])
    const [page, setPage] = useState(1) // 组件内维护的当前页
    const [total, setTotal] = useState(0) // 组件内维护的数据总数
    const [isStart, setIsStart] = useState(true) // 是否是首次加载
    const haveMoreData = total > questionList.length // 数据是否加载完成

    const loadContainerRef = useRef<HTMLDivElement>(null) // 加载元素实例
    
    const [searchParams] = useSearchParams()
    const keyword = searchParams.get(LIST_SEARCH_KEY) || ''

    // 手动触发的发送请求异步函数
    const { run: loadQuestionList, loading } = useRequest(async () => {
        return await getQuestionPageListApi({ page, pageSize: LIST_PAGE_SIZE, keyword })
    }, {
        manual: true,
        onSuccess(data) {
            setQuestionList(questionList.concat(data?.list))
            setTotal(data.total)
            setPage(page + 1)
        }
    })

    // 滚动时触发一个预发送请求函数（已防抖）
    const { run: tryLoadQuestionList } = useDebounceFn(() => {
        if (loadContainerRef == null) return 

        const rect = loadContainerRef?.current.getBoundingClientRect()
        if (rect.bottom < document.body.clientHeight) {
            setIsStart(false)
            loadQuestionList()
        }
        
    }, { wait: 800 })

    // 搜索之后数据重置
    useEffect(() => {
        setPage(1)
        setTotal(0)
        setIsStart(true)
        setQuestionList([])
    }, [keyword])

    // 首次加载即立即执行预发送请求函数
    useEffect(() => {
        tryLoadQuestionList()
    }, [searchParams])
    
    // 开启滚动事件监听
    useEffect(() => {
        if (haveMoreData) window.addEventListener('scroll', tryLoadQuestionList)
        return () => window.removeEventListener('scroll', tryLoadQuestionList)
    }, [haveMoreData, searchParams])

    const randerQuestionCard = () => {
        return questionList.map((item: QuestionCardType) => {
            return <QuestionCard {...item} key={item._id} />
        })                            
    }
    
    // 一种四种状态，通过不同状态来区分
    const randerLoadContainer = () => {
        if (isStart || loading) return <Spin /> // 首次加载或者处于loading时
        if (total === 0) return <Empty description='当前暂无问卷数据' />
        if (!haveMoreData) return <span>没有更多了...</span>
        return <span>开始加载下一页</span>
    }

    return (
        <div className={ styles.container }>

            <div className={styles.header}>
                <span className={ styles.title }>我的问卷</span>

                <ListSearch />
            </div>


            <div className={styles.body} >
                {questionList.length > 0 && randerQuestionCard() }
            </div>


            <div className={styles.footer} ref={loadContainerRef}>
                {randerLoadContainer()}
            </div>
            
        </div>
    )
}

export default List