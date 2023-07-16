import React from 'react'
import { Button, Space, Tooltip } from 'antd'
import {
    DeleteOutlined,
    EyeInvisibleOutlined,
    LockOutlined,
    CopyOutlined,
    BlockOutlined,
    // UpOutlined,
    // DownOutlined,
    // UndoOutlined,
    // RedoOutlined,
} from '@ant-design/icons'
import { useAppDispatch } from '@/store'
import useSelectedComponent from '@/hooks/useSelectedComponent'
import { 
    deleteComponent, 
    hiddenComponent, 
    lockedComponent, 
    cloneComponent, 
    pasteComponent
} from '@/store/modules/componentsReducer'


const EditHeaderMain = () => {
    const dispatch = useAppDispatch()
    const { isLocked, copyComponent } = useSelectedComponent()

    const handleDelete = () => {
        dispatch(deleteComponent())
    }

    const handleHidden = () => {
        dispatch(hiddenComponent())       
    }

    const handleLocked = () => {
        dispatch(lockedComponent())
    }

    const handleCopy = () => {
        dispatch(cloneComponent())
    }

    const handlePaste = () => {
        dispatch(pasteComponent())
    }

    return (
        <Space>
            <Tooltip title='删除'>
                <Button shape='circle' icon={<DeleteOutlined />} onClick={handleDelete}></Button>
            </Tooltip>

            <Tooltip title='隐藏'>
                <Button shape='circle' icon={<EyeInvisibleOutlined />} onClick={handleHidden}></Button>
            </Tooltip>

            <Tooltip title='锁定'>
                <Button
                    shape='circle'
                    icon={<LockOutlined />}
                    onClick={handleLocked}
                    type={isLocked ? 'primary' : 'default'}
                ></Button>
            </Tooltip>

            <Tooltip title='复制'>
                <Button shape='circle' icon={<CopyOutlined />} onClick={handleCopy}></Button>
            </Tooltip>

            <Tooltip title='粘贴'>
                <Button
                    shape='circle'
                    icon={<BlockOutlined />}
                    onClick={handlePaste}
                    disabled={copyComponent == null}
                ></Button>
            </Tooltip>
        </Space>
    )
}

export default EditHeaderMain