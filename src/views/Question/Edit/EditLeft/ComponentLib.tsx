import React, { FC } from 'react'
import { nanoid } from 'nanoid'
import { Typography } from 'antd'
import { useAppDispatch } from '@/store'
import styles from './index.module.scss'
import { addComponent } from '@/store/modules/componentsReducer'
import { ComponentConfigType } from '@/components/QuestionComponents'
import { componentConfigGroup } from '@/components/QuestionComponents'

const ComponentLib: FC = () => {
    const { Title } = Typography
    const dispatch = useAppDispatch()

    const randerComponent = (compoentConfig: ComponentConfigType) => {
        const { title, type, component, defaultProps } = compoentConfig

        const clickCompoent = () => {
            dispatch(addComponent({
                title,
                type,
                fe_id: nanoid(),
                props: defaultProps
            }))
        }

        return (
            <div key={type} className={styles.wrapper} onClick={clickCompoent}>
                <div className={styles.component}>
                    {component({ ...defaultProps })}
                </div>
            </div>
        )
    }

    return <>
        {componentConfigGroup.map((group, index) => {
            const { groupId, groupName, componentList } = group

            return (
                <div key={groupId}>
                    <Title level={3} style={{ fontSize: '16px', marginTop: index > 0 ? '20px' : '0' }}>
                        {groupName}
                    </Title>
                    <div>
                        {componentList.map(compoentConfig => randerComponent(compoentConfig))}
                    </div>
                </div>
            )
        })}
    </>
}

export default ComponentLib