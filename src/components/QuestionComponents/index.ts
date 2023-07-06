import { FC } from 'react'
import { QuestionInputType } from './QuestionInput'
import { QuestionTitleType } from './QuestionTitle'

export type ComponentPropsType = QuestionTitleType | QuestionInputType

export type ComponentConfigType = {
    title: string
    type: string
    Component: FC<ComponentPropsType>
    defaultProps: ComponentPropsType
}