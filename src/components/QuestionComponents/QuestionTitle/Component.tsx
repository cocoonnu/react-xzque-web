import React, { FC } from 'react'
import { Typography } from 'antd'
import { QuestionTitleType, QuestionTitleDefault } from './interface'

const QuestionTitle: FC = (props: QuestionTitleType) => {
    const { Title} = Typography
    const { level, text, isCenter } = { ...QuestionTitleDefault, ...props }

    return (
        <Title level={level} style={{ textAlign: isCenter ? 'center' : 'left' }}>
            {text}
        </Title>
    )
}

export default QuestionTitle