import QuestionTitle from './Component'
import { QuestionTitleDefault } from './interface'
export * from './interface'

export default {
    title: '标题',
    type: 'questionTitle',
    component: QuestionTitle,
    defaultProps: QuestionTitleDefault,
}
