import React, { FC } from 'react'
import { Divider, Tag } from 'antd'
import { StarTwoTone } from '@ant-design/icons'
import styles from './index.module.scss'
import CardOption from './components/CardOption'

type PropsType = {
    _id: string
    title: string
    isStar: boolean
    isPublished: boolean
    answerCount: number
    createdAt: string
}

const QuestionCard: FC<PropsType> = (props: PropsType) => {
    const { title, isStar, isPublished, answerCount, createdAt }  = props

    return (
        <div className={ styles['card-container'] }>

            <div className={ styles['top-info'] }>

                <div className={ styles['top-info-left'] }>

                    <span className={ styles.title }>{ title }</span>
                    {isStar && <StarTwoTone />}
                    
                </div>

                <div className={ styles['top-info-right'] }>

                    {isPublished ? 
                        <Tag color='success'>已发布</Tag> :
                        <Tag color='default'>未发布</Tag> 
                    }

                    <span>答卷: {answerCount}</span>

                    <span className={styles.date}>{createdAt}</span>

                </div>

            </div>

            <Divider style={{ margin: '12px 0' }} />

            {/* 底部按钮选项 */}
            <CardOption {...props} />

        </div>
    )
}

export default QuestionCard