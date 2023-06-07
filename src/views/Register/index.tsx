import React, { FC } from 'react'
import styles from './index.module.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import { registerUserApi } from '@/services/users'
import { useRequest } from 'ahooks'
import { UserAddOutlined } from '@ant-design/icons'
import { Button, Form, Input, Space, Typography, message } from 'antd'
import { usernameRulse, passwordRules, confirmPasswordRules } from './hooks/formRules'

type formValueType = {
    username: string
    password: string
    confirmPassword: string
    nickname: string |undefined
}

const Register: FC = () => {
    const { Title } = Typography
    const [formRef] = Form.useForm()
    const nav = useNavigate()

    const { run: registerUser, loading } = useRequest((formValue: formValueType) => {
        const { username, password, nickname } = formValue
        return registerUserApi({ username, password, nickname })
    }, {
        manual: true,
        onSuccess() {
            message.success('注册成功')
            nav('/login')
        }
    })

    const onFinish = (values: formValueType) => registerUser(values)

    return (
        <div className={styles.register}>
            <div className={styles['register-container']}>

                <Space className={ styles['register-title'] }>
                    <Title level={3}><UserAddOutlined /></Title>
                    <Title level={3}>注册新用户</Title>
                </Space>

                <Form
                    name='register'
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

                    <Form.Item
                        label='确认密码'
                        name='confirmPassword'
                        rules={confirmPasswordRules}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label='昵称'
                        name='nickname'
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type='primary' htmlType='submit' disabled={loading}>
                            注册
                        </Button>

                        <NavLink to='/login' style={{ marginLeft: 10 }}>
                            已有用户，登录
                        </NavLink>
                    </Form.Item>
                </Form>

            </div>
        </div>
    )
}

export default Register