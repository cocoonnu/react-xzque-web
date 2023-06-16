import React, { FC } from 'react'
import { Divider, Tag, Button, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { StarTwoTone } from '@ant-design/icons'
import styles from './index.module.scss'
import { LineChartOutlined, EditOutlined } from '@ant-design/icons'
import { DeleteOutlined, CopyOutlined, StarOutlined } from '@ant-design/icons'
import type { QuestionCardType } from '@/types'
import { useRequest } from 'ahooks'
import { duplicateQuestionApi } from '@/services/question'
import useStartQuestion from './hooks/useStartQuestion'
import useDeleteQuestion from './hooks/useDeleteQuestion'
import { showDeleteConfirm, showCopyConfirm } from './hooks/ConfirmModal'


const QuestionCard: FC<QuestionCardType> = (props: QuestionCardType) => {
    const { title, isStar, isPublished, answerCount, createdAt, _id }  = props
    const nav = useNavigate()

    // 设置标星功能
    const { updateStarState, starLoading, starState } = useStartQuestion(_id, isStar)

    // 设置删除功能
    const { updateDeleteState, deleteLoading, deleteState } = useDeleteQuestion(_id)

    // 设置复制功能
    const { run: duplicateQuestion, loading: duplicateLoading } = useRequest(
        () => duplicateQuestionApi(_id), {
            manual: true,
            onSuccess(data) {
                if (data?.id) {
                    message.success('复制问卷成功')
                    nav(`/question/edit/${data.id}`)
                } 
            }
        }
    )


    const randerCardOption = (
        <div className={styles['card-option']}>

            <div className={styles['option-item']}>
                <Button
                    icon={<EditOutlined />}
                    type='text'
                    size='small'
                    onClick={() => nav(`/question/edit/${_id}`)}
                >编辑问卷</Button>

                <Button
                    icon={<LineChartOutlined />}
                    type='text'
                    size='small'
                    disabled={!isPublished}
                >问卷统计</Button>
            </div>


            <div className={styles['option-item']}>
                <Button
                    type='text'
                    size='small'
                    icon={<StarOutlined />}
                    disabled={starLoading}
                    onClick={() => updateStarState()}
                >
                    {starState ? '取消标星' : '标星'}
                </Button>

                <Button
                    type='text'
                    size='small'
                    icon={<CopyOutlined />}
                    disabled={duplicateLoading}
                    onClick={() => showCopyConfirm(duplicateQuestion)}
                >复制</Button>

                <Button
                    type='text'
                    size='small'
                    icon={<DeleteOutlined />}
                    disabled={deleteLoading}
                    onClick={() => showDeleteConfirm(updateDeleteState)}
                >删除</Button>
            </div>

        </div>
    )


    return deleteState ? null : (
        <div className={ styles['card-container'] }>
            <div className={ styles['top-info'] }>

                <div className={ styles['top-info-left'] }>
                    {starState && <StarTwoTone />}
                    <span className={ styles.title }>{ title }</span>
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

            { randerCardOption }
        </div>
    )
}

export default QuestionCard