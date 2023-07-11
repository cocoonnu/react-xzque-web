import React, { FC, useEffect, useState } from 'react'
import { Empty } from 'antd'
import styles from './index.module.scss'
import { useAppSelector, useAppDispatch } from '@/store'
import { updataSelectedProps } from '@/store/modules/componentsReducer'
import { ComponentConfigType, getComponentConfig, ComponentPropsType } from '@/components/QuestionComponents'

const ComponentProp: FC = () => {
    const dispatch = useAppDispatch()
    const { selectedId, componentList } = useAppSelector(state => state.components)
    const selectComponent = componentList.find(c => c.fe_id === selectedId)
    const [componentConfig, setComponentConfig] = useState<ComponentConfigType>(null)
    
    useEffect(() => {
        if (selectComponent) {
            setComponentConfig(getComponentConfig(selectComponent.type))
        }
    }, [selectComponent])

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
                    <PropComponent {...selectComponent.props} onChange={onChange} />
                </div>
            )
        } else {
            return <Empty description='加载组件属性失败' style={{ marginTop: 10 }} />
        } 
    }
    return (
        <div>
            {selectComponent ? randerComponent() : randerEmpty()}
        </div>
    )
}

export default ComponentProp