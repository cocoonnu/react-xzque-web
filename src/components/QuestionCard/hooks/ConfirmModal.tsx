import React from 'react'
import { Modal, message } from 'antd'
import { ExclamationCircleFilled } from '@ant-design/icons'
const { confirm } = Modal

export const showCopyConfirm = (duplicateQuestion: any) => {
    confirm({
        title: '你确定要复制该问卷吗',
        icon: <ExclamationCircleFilled />,
        onOk() {
            if (typeof duplicateQuestion == 'function') duplicateQuestion()
            else message.error('复制问卷失败，请稍后重试')
        },
    })
}


export const showDeleteConfirm = (updateDeleteState: any) => {

    confirm({
        title: '你确定要删除该问卷吗？',
        icon: <ExclamationCircleFilled />,
        okText: '确定',
        okType: 'danger',
        cancelText: '取消',
        onOk() {
            if (typeof updateDeleteState == 'function') updateDeleteState()
            else message.error('删除问卷失败，请稍后重试')
        },
    })
}
