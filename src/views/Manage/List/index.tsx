import React, { FC, useState } from 'react'
import { Input } from 'antd'
import styles from './index.module.scss'
import QuestionCard from '@/components/QuestionCard'

const { Search } = Input

const List: FC = () => {
    const [questionList] = useState([
        {
            _id: 'q1',
            title: '问卷1',
            isPublished: false,
            isStar: false,
            answerCount: 5,
            createdAt: '3月10日 13:23'            
        },
        {
            _id: 'q2',
            title: '问卷2',
            isPublished: true,
            isStar: false,
            answerCount: 5,
            createdAt: '3月10日 13:23'
        },
        {
            _id: 'q3',
            title: '问卷3',
            isPublished: false,
            isStar: true,
            answerCount: 5,
            createdAt: '3月10日 13:23'
        }
    ])

    const onSearch = (value: string) => console.log(value)

    return (
        <div className={ styles.container }>

            <div className={styles.header}>
                <span className={ styles.title }>我的问卷</span>

                <Search 
                    allowClear 
                    placeholder='请输入问卷标题' 
                    onSearch={ onSearch }
                    className={ styles.search }
                />
            </div>


            <div className={ styles.body }>
                {questionList.map(item => {
                    return <QuestionCard {...item} key={item._id}/>
                })}
            </div>
            
        </div>
    )
}

export default List