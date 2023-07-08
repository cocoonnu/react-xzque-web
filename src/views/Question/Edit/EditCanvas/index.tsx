import React, { FC } from 'react'
import { Spin } from 'antd'
import styles from './index.module.scss'
import { useAppSelector } from '@/store'
import useLoadQueData from '@/hooks/useLoadQueData'
import { ComponentInfoType } from '@/store/modules/componentsReducer'
import { getComponentConfig } from '@/components/QuestionComponents'

const EditCanvas: FC = () => {
    const { componentList } = useAppSelector(state => state.components)
    const { loading: queDataLoading } = useLoadQueData()

    const randerCompoent = (componentInfo: ComponentInfoType) => {
        const { type = '' } = componentInfo
        const componentConfig = getComponentConfig(type)
        if (componentConfig) {
            return componentConfig.component({...componentInfo.props})
        }
    }

    if (queDataLoading) {
        return <Spin style={{ marginTop: '10px', width: '100%' }}/>
    }

    return (
        <div className={ styles['edit-canvas'] }>
            {
                componentList.map((componentInfo: ComponentInfoType) => (
                    <div className={styles['component-wrapper']} key={componentInfo.fe_id}>
                        <div className={styles.component}>
                            { randerCompoent(componentInfo) }
                        </div>
                    </div>                    
                ))
            }
        </div>
    )
}

export default EditCanvas