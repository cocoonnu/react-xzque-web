import React, { FC } from 'react'
import { Tabs } from 'antd'
import ComponentProp from './ComponentProp'
import { FileTextOutlined, SettingOutlined } from '@ant-design/icons'

const EditRight: FC = () => {
    const tabsItems = [
        {
            key: 'prop',
            label: (
                <span>
                    <FileTextOutlined />
                    属性
                </span>
            ),
            children: <ComponentProp />,
        },
        {
            key: 'setting',
            label: (
                <span>
                    <SettingOutlined />
                    页面设置
                </span>
            ),
            children: <div>页面设置</div>,
        },
    ]

    return <Tabs defaultActiveKey='prop' items={tabsItems}></Tabs>
}

export default EditRight
