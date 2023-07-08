import { FC } from 'react'
import questionInputConfig, { QuestionInputType } from './QuestionInput'
import questionTitleConfig, { QuestionTitleType } from './QuestionTitle'

export type ComponentPropsType = QuestionTitleType | QuestionInputType

export type ComponentConfigType = {
    title: string
    type: string
    component: FC<ComponentPropsType>
    defaultProps: ComponentPropsType
}

const componentConfigList: ComponentConfigType[] = [
    questionInputConfig,
    questionTitleConfig
]

// 负责输出匹配的某个组件配置
export const getComponentConfig = (type: string) => {
    return componentConfigList.find(c => c.type === type)
}