import React, { FC } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'

const antdTheme = {
    token: {
        borderRadius: 3,
    }
}

const App: FC = () => {

    return (
        <ConfigProvider locale={zhCN} theme={antdTheme}>
            <RouterProvider router={router}></RouterProvider>
        </ConfigProvider>
    )
}

export default App
