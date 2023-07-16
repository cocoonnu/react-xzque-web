import { ComponentStateType } from '../modules/componentsReducer'

// 操作之后更新选中组件id
export const getNewSelected = (state: ComponentStateType, selectedId: string) => {
    // componentFilterList 是删除或隐藏选中组件之前的可见组件列表
    const componentFilterList = state.componentList.filter(item => !item.isHidden)
    const filterIndex = componentFilterList.findIndex(c => c.fe_id === selectedId)

    let newSelectedId = ''
    if (filterIndex === 0) {
        newSelectedId = componentFilterList[1]?.fe_id || ''
    } else {
        componentFilterList.forEach((c, index) => {
            if (index === filterIndex - 1) newSelectedId = c.fe_id
        })
    }

    return newSelectedId
}