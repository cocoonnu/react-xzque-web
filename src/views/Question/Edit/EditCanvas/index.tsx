import React, { FC, MouseEvent } from 'react'
import { Spin } from 'antd'
import classNames from 'classnames'
import styles from './index.module.scss'
import { useAppSelector, useAppDispatch } from '@/store'
import useLoadQueData from '@/hooks/useLoadQueData'
import { ComponentInfoType, changeSelectedId } from '@/store/modules/componentsReducer'
import { getComponentConfig } from '@/components/QuestionComponents'

const EditCanvas: FC = () => {
    const dispatch = useAppDispatch()
    const { componentList, selectedId } = useAppSelector(state => state.components)
    const { loading: queDataLoading } = useLoadQueData()

    const clickComponent = (event: MouseEvent, componentInfo: ComponentInfoType) => {
        event.stopPropagation()
        dispatch(changeSelectedId(componentInfo.fe_id))
    }

    const randerComponent = (componentInfo: ComponentInfoType) => {
        const { type = '' } = componentInfo
        const componentConfig = getComponentConfig(type)
        if (componentConfig) {
            return componentConfig.component({...componentInfo.props})
        }
    }

    const randerComponentList = () => {
        const componentFilterList = componentList.filter(item => !item.isHidden)
        return componentFilterList.map((componentInfo: ComponentInfoType) => {
            const componentWrapperClass = {
                [styles['component-wrapper']]: true,
                [styles['selected']]: selectedId === componentInfo.fe_id,
                [styles['locked']]: componentInfo.isLocked
            }

            return (
                <div 
                    key={componentInfo.fe_id}
                    onClick={(event) => clickComponent(event, componentInfo)}
                    className={classNames(componentWrapperClass)} 
                >
                    <div className={styles.component}>
                        {randerComponent(componentInfo)}
                    </div>
                </div>
            )
        })
    }

    const randerSpin = () => {
        return <Spin style={{ marginTop: '15px', width: '100%' }} />
    }

    return (
        <div className={ styles['edit-canvas'] }>
            {queDataLoading ? randerSpin() : randerComponentList()} 
        </div>
    )
}

export default EditCanvas