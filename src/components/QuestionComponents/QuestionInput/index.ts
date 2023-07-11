import { ComponentConfigType } from '../index'
import QuestionInput from './Component'
import PropComponent from './PropComponent'
import { QuestionInputDefault } from './interface'
export * from './interface'

const questionInputConfig: ComponentConfigType = {
    title: '输入框',
    type: 'questionInput', 
    component: QuestionInput, 
    propComponent: PropComponent,
    defaultProps: QuestionInputDefault,
}

export default questionInputConfig