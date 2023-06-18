import React, { FC } from 'react'
import { Typography, Input } from 'antd'
import { QuestionInputDefault, QuestionInputType } from './interface'

const QuestionInput: FC = (props: QuestionInputType) => {
    const { Paragraph } = Typography
    const { title, placeholder } = { ...QuestionInputDefault, ...props }

    return (
        <div>
            <Paragraph strong>{title}</Paragraph>
            <Input placeholder={placeholder}></Input>
        </div>
    )
}

export default QuestionInput