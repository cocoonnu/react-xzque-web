import React, { FC } from 'react'
import { Tabs } from 'antd'
import ComponentLib from './ComponentLib'
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'

const EditLeft: FC = () => {
    const tabsItems = [
        {
            key: 'component-lib',
            label: (
                <span>
                    <AppstoreOutlined />
                    组件库
                </span>
            ),
            children: <ComponentLib />,
        },
        {
            key: 'layers',
            label: (
                <span>
                    <BarsOutlined />
                    图层
                </span>
            ),
            children: <div>图层</div>,
        },
    ]

    return <Tabs defaultActiveKey='component-lib' items={tabsItems} />
}

export default EditLeft