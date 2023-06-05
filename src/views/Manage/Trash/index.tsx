import React, { FC, useState } from 'react'
import { Empty, Tag, Table, Space, Button, Spin } from 'antd'
import styles from '../common.module.scss'
import ListSearch from '@/components/ListSearch'
import useLoadQueList from '@/hooks/useLoadQueList'
import ListPagination from '@/components/ListPagination'


const Trash: FC = () => {
    const { data: questionData, loading } = useLoadQueList({ isDeleted: true })
    const { list: questionList = [] } = questionData || { list: [] }
    const { total = 0 } = questionData || { total: 0 }


    const [selectedIds, setSelectedIds] = useState<string[]>([])


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

    const randerQuestionTable = () => {
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

        const randerEmpty = (<Empty description='当前暂无回收站数据' style={{ marginTop: 100 }} />)

        return questionList.length > 0 ? TableEl : randerEmpty
    }


    return (
        <div className={styles.container}>

            <div className={styles.header}>
                <span className={styles.title}>回收站</span>

                <ListSearch />
            </div>

            <div className={styles.body}>
                { loading ? <Spin /> : randerQuestionTable() }
            </div>

            <div className={ styles.footer }>
                { !loading && <ListPagination total={total} /> }
            </div>

        </div>
    )
}

export default Trash