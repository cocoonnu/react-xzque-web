import React, { FC, useEffect } from 'react'
import styles from './index.module.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Space, Typography, message } from 'antd'
import { getUser, deleteUser, rememberUser } from './hooks/useRemember'
import { usernameRulse, passwordRules } from './hooks/formRules'
import { loginUserApi } from '@/services/users'
import { useRequest } from 'ahooks'

type formValueType = {
    username: string
    password: string
    remember: boolean
}

const Login: FC = () => {
    const { Title } = Typography
    const [formRef] = Form.useForm()
    const nav = useNavigate()

    const { run: loginUser, loading } = useRequest((formValue: formValueType) => {
        const { username, password } = formValue
        return loginUserApi({ username, password })
    }, {
        manual: true,
        onSuccess(res: {token: string}) {
            localStorage.setItem('TOKEN', res.token || '')
            message.success('登录成功')
            nav('/manage')
        }
    })

    useEffect(() => {
        formRef.setFieldsValue(getUser())
    }, [])

    const onFinish = (values: formValueType) => {
        const { username, password, remember } = values
        loginUser(values)

        if (remember) rememberUser(username, password, remember)
        else deleteUser()
    }

    return (
        <div className={ styles.login }>
            <div className={ styles['login-container'] }>

                <Space className={ styles['login-title'] }>
                    <Title level={3}><UserOutlined /></Title>
                    <Title level={3}>用户登录</Title>
                </Space>

                <Form
                    name='login'
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ width: 400 }}
                    onFinish={onFinish}
                    form={formRef}
                >   
                    <Form.Item
                        label='用户名'
                        name='username'
                        rules={usernameRulse}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label='密码'
                        name='password'
                        rules={passwordRules}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name='remember' valuePropName='checked' 
                        wrapperCol={{ offset: 8, span: 16 }}
                    >
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type='primary' htmlType='submit' disabled={loading}>
                            登录
                        </Button>

                        <NavLink to='/register' style={{ marginLeft: 10 }}>
                            注册新用户
                        </NavLink>
                    </Form.Item>
                </Form>

            </div>
        </div>
    )
}

export default Login