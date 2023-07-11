export type QuestionInputType = {
    title: string
    placeholder: string
    disabled?: boolean
    onChange?: (newProps: QuestionInputType) => void
}

export const QuestionInputDefault = {
    title: '输入框标题',
    placeholder: '请输入...'
}