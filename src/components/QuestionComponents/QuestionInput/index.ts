import { ComponentConfigType } from '../index'
import QuestionInput from './Component'
import { QuestionInputDefault } from './interface'
export * from './interface'

const questionInputConfig: ComponentConfigType = {
    title: '输入框',
    type: 'questionInput', 
    component: QuestionInput, 
    defaultProps: QuestionInputDefault,
}

export default questionInputConfig