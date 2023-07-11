import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ComponentPropsType } from '@/components/QuestionComponents'

// 渲染组件内部详细信息
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
    selectedId: string // 当前选中的组件id
    componentList: ComponentInfoType[] // 问卷组件列表
}

// updataSelectedProps函数参数类型
type updataSelectedPropsType = {
    id: string
    props: ComponentPropsType
}

const ComponentsSlice = createSlice({
    name: 'components',

    initialState: {
        selectedId: '',
        componentList: [],
    },

    reducers: {
        // 更新仓库属性
        updateComponents: (state: ComponentStateType, action: PayloadAction<ComponentStateType>) => {
            return action.payload
        },

        // 更改选中的组件id
        changeSelectedId: (state: ComponentStateType, action: PayloadAction<string>) => {
            state.selectedId = action.payload
        },

        // 给画布添加一个渲染组件
        addComponent: (state: ComponentStateType, action: PayloadAction<ComponentInfoType>) => {
            const selectedId = state.selectedId
            if (selectedId) {
                let index = state.componentList.findIndex(c => c.fe_id === selectedId)
                index = index === -1 ? (state.componentList.length - 1) : index
                state.componentList.splice(index + 1, 0, action.payload)
            } else {
                state.componentList.push(action.payload)
            }
        },

        // 更新选中组件的props
        updataSelectedProps: (state: ComponentStateType, action: PayloadAction<updataSelectedPropsType>) => {
            const { id, props } = action.payload
            for (let index = 0; index < state.componentList.length; index++) {
                const component = state.componentList[index]
                if (component.fe_id === id) {
                    state.componentList[index].props = props
                    break
                }
            }
        }
    },
})

export const { 
    updateComponents, 
    changeSelectedId, 
    addComponent, 
    updataSelectedProps 
} = ComponentsSlice.actions
export default ComponentsSlice.reducer

