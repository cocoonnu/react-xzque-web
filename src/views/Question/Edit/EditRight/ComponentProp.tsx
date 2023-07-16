import React, { FC, useEffect, useState } from 'react'
import { Empty } from 'antd'
import styles from './index.module.scss'
import { useAppDispatch } from '@/store'
import useSelectedComponent from '@/hooks/useSelectedComponent'
import { updataSelectedProps } from '@/store/modules/componentsReducer'
import { ComponentConfigType, getComponentConfig, ComponentPropsType } from '@/components/QuestionComponents'

const ComponentProp: FC = () => {
    const dispatch = useAppDispatch()
    const { selectedId, selectedComponent, isLocked } = useSelectedComponent()
    const [componentConfig, setComponentConfig] = useState<ComponentConfigType>(null)
    
    useEffect(() => {
        if (selectedComponent) {
            setComponentConfig(getComponentConfig(selectedComponent.type))
        }
    }, [selectedComponent])

    const onChange = (props: ComponentPropsType) => {
        if (selectedId) dispatch(updataSelectedProps({id: selectedId, props}))
    }

    const randerEmpty = () => {
        return <Empty description='当前未选中组件' style={{marginTop: 10}} />
    }

    const randerComponent = () => {
        const PropComponent = componentConfig?.propComponent
        if (PropComponent) {
            return (
                <div className={ styles.wrapper }>
                    <PropComponent {...selectedComponent.props} onChange={onChange} disabled={isLocked} />
                </div>
            )
        } else {
            return <Empty description='加载组件属性失败' style={{ marginTop: 10 }} />
        } 
    }
    return (
        <div>
            {selectedComponent ? randerComponent() : randerEmpty()}
        </div>
    )
}

export default ComponentProp