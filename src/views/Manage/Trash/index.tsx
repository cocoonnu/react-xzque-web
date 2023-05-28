import React, { FC, useState } from 'react'
import { Empty, Tag, Table, Space, Button } from 'antd'
import styles from '../common.module.scss'
import ListSearch from '@/components/ListSearch'


const Trash: FC = () => {
    const [selectedIds, setSelectedIds] = useState<string[]>([])

    const [questionList] = useState([
        {
            _id: 'q1',
            title: '问卷1',
            isPublished: false,
            isStar: false,
            answerCount: 5,
            createdAt: '3月10日 13:23'
        },
        {
            _id: 'q2',
            title: '问卷2',
            isPublished: true,
            isStar: false,
            answerCount: 5,
            createdAt: '3月10日 13:23'
        },
        {
            _id: 'q3',
            title: '问卷3',
            isPublished: false,
            isStar: true,
            answerCount: 5,
            createdAt: '3月10日 13:23'
        },
    ])

    const tableColumns = [
        {
            title: '标题',
            dataIndex: 'title',
        },
        {
            title: '是否发布',
            dataIndex: 'isPublished',
            render: (isPublished: boolean) => {
                return isPublished ? <Tag color='processing'>已发布</Tag> : <Tag>未发布</Tag>
            },
        },
        {
            title: '答卷',
            dataIndex: 'answerCount',
        },
        {
            title: '创建时间',
            dataIndex: 'createdAt',
        },
    ]

    const onSelectedChange = (selectedRowKeys: string[]) => {
        setSelectedIds(selectedRowKeys)
    }


    // 表格渲染
    const TableEl = (<>
        <Space style={{ alignSelf: 'flex-start' }}>
            <Button type='primary' disabled={selectedIds.length == 0}>
                恢复
            </Button>

            <Button danger disabled={selectedIds.length == 0} >
                彻底删除
            </Button>
        </Space>

        <Table
            rowKey='_id'
            pagination={false}
            columns={tableColumns}
            dataSource={questionList}
            style={{ width: '100%' }}
            rowSelection={{ onChange: onSelectedChange }}
        />
    </>)

    return (
        <div className={styles.container}>

            <div className={styles.header}>
                <span className={styles.title}>回收站</span>

                <ListSearch />
            </div>

            <div className={styles.body}>
                {questionList.length < 2 && 
                    <Empty description='当前暂无回收站数据' style={{ marginTop: 100 }} />
                }

                {questionList.length > 2 && TableEl}
            </div>

            {/* <div className={ styles.footer }>分页器</div> */}

        </div>
    )
}

export default Trash