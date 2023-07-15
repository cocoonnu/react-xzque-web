import React from 'react'
import { Button, Space, Tooltip } from 'antd'
import {
    DeleteOutlined,
    EyeInvisibleOutlined,
    // LockOutlined,
    // CopyOutlined,
    // BlockOutlined,
    // UpOutlined,
    // DownOutlined,
    // UndoOutlined,
    // RedoOutlined,
} from '@ant-design/icons'
import { useAppDispatch } from '@/store'
import { deleteComponent, hiddenComponent } from '@/store/modules/componentsReducer'


const EditHeaderMain = () => {
    const dispatch = useAppDispatch()

    const handleDelete = () => {
        dispatch(deleteComponent())
    }

    const handleHidden = () => {
        dispatch(hiddenComponent())       
    }

    return (
        <Space>
            <Tooltip title='删除'>
                <Button shape='circle' icon={<DeleteOutlined />} onClick={handleDelete}></Button>
            </Tooltip>

            <Tooltip title='隐藏'>
                <Button shape='circle' icon={<EyeInvisibleOutlined />} onClick={handleHidden}></Button>
            </Tooltip>

            {/* <Tooltip title='锁定'>
                <Button
                    shape='circle'
                    icon={<LockOutlined />}
                    onClick={handleLocked}
                    type={isLocked ? 'primary' : 'default'}
                ></Button>
            </Tooltip> */}
        </Space>
    )
}

export default EditHeaderMain