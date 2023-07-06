import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ComponentPropsType } from '@/components/QuestionComponents'

export type ComponentInfoType = {
  fe_id: string
  type: string
  title: string
  isHidden?: boolean
  isLocked?: boolean
  props: ComponentPropsType
}

export type ComponentsStateType = {
  ComponentsList: ComponentInfoType[]
}

export type ComponentsActionType = PayloadAction<ComponentsStateType>

const INIT_STATE: ComponentsStateType = {
    ComponentsList: []
}

const ComponentsSlice = createSlice({
    name: 'components',

    initialState: INIT_STATE,

    reducers: {
        updateComponents: (state: ComponentsStateType, action: ComponentsActionType) => {
            return action.payload
        }
    },
})

export const { updateComponents } = ComponentsSlice.actions
export default ComponentsSlice.reducer

