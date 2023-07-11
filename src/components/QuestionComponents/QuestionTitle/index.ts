import { ComponentConfigType } from '../index'
import QuestionTitle from './Component'
import PropComponent from './PropComponent'
import { QuestionTitleDefault } from './interface'
export * from './interface'

const questionTitleConfig: ComponentConfigType = {
    title: '标题',
    type: 'questionTitle',
    component: QuestionTitle,
    propComponent: PropComponent,
    defaultProps: QuestionTitleDefault,
}

export default questionTitleConfig