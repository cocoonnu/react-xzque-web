import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/reset.css'
import App from './App'
import './index.css'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <ConfigProvider locale={zhCN}>
        <App />
    </ConfigProvider>
)
