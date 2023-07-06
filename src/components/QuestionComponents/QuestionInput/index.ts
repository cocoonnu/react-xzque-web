import QuestionInput from './Component'
import { QuestionInputDefault } from './interface'
export * from './interface'

export default {
    title: '输入框',
    type: 'questionInput', 
    component: QuestionInput, 
    defaultProps: QuestionInputDefault,
}
