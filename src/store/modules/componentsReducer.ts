import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ComponentPropsType } from '@/components/QuestionComponents'

// 单个渲染组件内部详细信息
export type ComponentInfoType = {
  fe_id: string
  type: string
  title: string
  isHidden?: boolean
  isLocked?: boolean
  props: ComponentPropsType
}

// 仓库属性的类型
export type ComponentStateType = {
  componentList: ComponentInfoType[]
}

// 仓库action的类型
export type ComponentActionType = PayloadAction<ComponentStateType>

const ComponentsSlice = createSlice({
    name: 'components',

    initialState: {
        componentList: []
    },

    reducers: {
        // 更新仓库属性
        updateComponents: (state: ComponentStateType, action: ComponentActionType) => {
            return action.payload
        }
    },
})

export const { updateComponents } = ComponentsSlice.actions
export default ComponentsSlice.reducer

