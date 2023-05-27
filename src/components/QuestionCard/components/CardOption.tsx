import React, { FC } from 'react'
import { Button } from 'antd'
import { LineChartOutlined, EditOutlined } from '@ant-design/icons'
import { DeleteOutlined, CopyOutlined, StarOutlined } from '@ant-design/icons'
import styles from './CardOption.module.scss'

// hooks
import { showDeleteConfirm, showCopyConfirm } from '../hooks/ConfirmModal'

type PropsType = {
    _id: string
    title: string
    isStar: boolean
    isPublished: boolean
    answerCount: number
    createdAt: string
}

const CardOption: FC<PropsType> = (props: PropsType) => {
    const { isPublished, isStar } = props

    return (
        <div className={ styles['card-option'] }>

            <div className={ styles['option-left'] }>
                <Button
                    icon={<EditOutlined />}
                    type='text'
                    size='small'
                >
                    编辑问卷
                </Button>

                <Button
                    icon={<LineChartOutlined />}
                    type='text'
                    size='small'
                    disabled={ !isPublished }
                >
                    问卷统计
                </Button>
            </div>


            <div className={ styles['option-right'] }>
                <Button
                    type='text'
                    size='small'
                    icon={<StarOutlined />}
                >
                    {isStar ? '取消标星' : '标星'}
                </Button>

                <Button 
                    type='text' 
                    icon={<CopyOutlined />} 
                    size='small' 
                    onClick={ showCopyConfirm }
                >
                    复制
                </Button>

                <Button
                    type='text'
                    icon={<DeleteOutlined />}
                    size='small'
                    onClick={ showDeleteConfirm }
                >
                    删除
                </Button>
            </div>

        </div>
    )
}

export default CardOption