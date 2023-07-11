import { FC } from 'react'
import questionInputConfig, { QuestionInputType } from './QuestionInput'
import questionTitleConfig, { QuestionTitleType } from './QuestionTitle'

export type ComponentPropsType = QuestionTitleType | QuestionInputType

// 渲染组件外部配置信息
export type ComponentConfigType = {
    title: string
    type: string
    component: FC<ComponentPropsType>
    propComponent: FC<ComponentPropsType>
    defaultProps: ComponentPropsType
}

// 所有渲染组件数组
export const componentConfigList: ComponentConfigType[] = [
    questionInputConfig,
    questionTitleConfig
]

// 渲染组件分组展示
export const componentConfigGroup = [
    {
        groupId: 'textGroup',
        groupName: '文本显示',
        componentList: [questionTitleConfig],
    },
    {
        groupId: 'inputGroup',
        groupName: '用户输入',
        componentList: [questionInputConfig],
    },
]

// 输出匹配的渲染组件外部配置信息
export const getComponentConfig = (type: string) => {
    return componentConfigList.find(componentConfig => componentConfig.type === type)
}