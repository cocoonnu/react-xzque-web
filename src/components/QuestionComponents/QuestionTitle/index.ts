import { ComponentConfigType } from '../index'
import QuestionTitle from './Component'
import { QuestionTitleDefault } from './interface'
export * from './interface'

const questionTitleConfig: ComponentConfigType = {
    title: '标题',
    type: 'questionTitle',
    component: QuestionTitle,
    defaultProps: QuestionTitleDefault,
}

export default questionTitleConfig