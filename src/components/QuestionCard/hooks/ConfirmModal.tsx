import React from 'react'
import { Modal } from 'antd'
import { ExclamationCircleFilled } from '@ant-design/icons'

const { confirm } = Modal

export const showCopyConfirm = () => {
    confirm({
        title: '你确定要复制该问卷吗',
        icon: <ExclamationCircleFilled />,
        onOk() {
            console.log('OK')
        },
        onCancel() {
            console.log('Cancel')
        },
    })
}

export const showDeleteConfirm = () => {
    confirm({
        title: '你确定要删除该问卷吗？',
        icon: <ExclamationCircleFilled />,
        okText: '确定',
        okType: 'danger',
        cancelText: '取消',
        onOk() {
            console.log('OK')
        },
        onCancel() {
            console.log('Cancel')
        },
    })
}
