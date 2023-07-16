import { useAppSelector } from '@/store'

const useSelectedComponent = () => {
    const { selectedId, componentList, copyComponent } = useAppSelector((state) => state.components)
    const selectedComponent = componentList.find(c => c.fe_id === selectedId)
    const isLocked = selectedComponent ? selectedComponent.isLocked : false
    const isHidden = selectedComponent ? selectedComponent.isHidden : false

    return { selectedId, selectedComponent, isHidden, isLocked, copyComponent }
}

export default useSelectedComponent