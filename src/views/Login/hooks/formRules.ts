import { Rule } from 'antd/es/form'

export const usernameRulse: Rule[] = [
    { required: true, message: '用户名不能为空！' },
    { type: 'string', min: 5, max: 13, message: '用户名长度必须为5-13位' },
    { pattern: /^\w+$/, message: '用户名只能为字母数字或下划线的组合' },
]

export const passwordRules: Rule[] = [
    { required: true, message: '密码不能为空！' },
    { type: 'string', min: 6, max: 16, message: '密码长度必须为6-16位' },
    { pattern: /^[A-Za-z0-9]+$/, message: '密码只能为字母和数字的组合' },
]