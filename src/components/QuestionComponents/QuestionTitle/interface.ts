export type QuestionTitleType = {
    text: string
    level: 1 | 2 | 3 | 4 | 5
    isCentered: boolean
}

export const QuestionTitleDefault = {
    text: '一行标题',
    level: 1,
    isCenter: false
}