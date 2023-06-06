import React, { FC, useState, useEffect } from 'react'
import { useRequest } from 'ahooks'
import { Empty, Tag, Table, Space, Button, Spin, message } from 'antd'
import { updateQuestionApi, deleteQuestionApi } from '@/services/question'
import styles from '../common.module.scss'
import ListSearch from '@/components/ListSearch'
import useLoadQueList from '@/hooks/useLoadQueList'
import ListPagination from '@/components/ListPagination'


const Trash: FC = () => {
    const { data: questionData, loading } = useLoadQueList({ isDeleted: true })
    const { list: questionList = [] } = questionData || { list: [] }
    const { total = 0 } = questionData || { total: 0 }

    // 内部维护的问卷数组、选中问卷id数组
    const [questionListState, setQuestionListState] = useState(questionList)
    const [selectedIds, setSelectedIds] = useState<string[]>([])

    // 表格行列属性
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

    // 禁用按钮状态
    const btnDisable = () => {
        return selectedIds.length == 0 || restoreDeleteLoading || completeDeleteLoading
    }

    // 时刻更新内部维护的问卷数组
    useEffect(() => {
        setQuestionListState(questionList)
    }, [questionList])


    // 设置恢复功能
    const { run: restoreDeleteState, loading: restoreDeleteLoading } = useRequest(
        () => {
            const promiseArr = []
            selectedIds.forEach(_id => {
                promiseArr.push(updateQuestionApi(_id, { isDelete: false }))
            })
            return Promise.all(promiseArr)
        }, 
        
        {
            manual: true,
            onSuccess() {
                message.success('恢复问卷成功')
                setQuestionListState(questionListState.filter(item => {
                    if (selectedIds.includes(item._id)) return false
                    return true
                }))   
                setSelectedIds([])
            }
        }
    )


    // 设置彻底删除功能
    const { run: completeDelete, loading: completeDeleteLoading } = useRequest(
        () => deleteQuestionApi(selectedIds),

        {
            manual: true,
            onSuccess() {
                message.success('彻底删除问卷成功')
                setQuestionListState(questionListState.filter(item => {
                    if (selectedIds.includes(item._id)) return false
                    return true
                }))   
                setSelectedIds([])
            }
        }
    )

    // 选中时的回调函数
    const onSelectedChange = (selectedRowKeys: string[]) => {
        setSelectedIds(selectedRowKeys)
    }

    const randerQuestionTable = () => {
        const TableEl = (<>
            <Space style={{ alignSelf: 'flex-start' }}>
                <Button 
                    type='primary' 
                    disabled={btnDisable()}
                    onClick={() => restoreDeleteState()}
                >恢复</Button>

                <Button 
                    danger 
                    disabled={btnDisable()} 
                    onClick={() => completeDelete()}
                >彻底删除</Button>
            </Space>

            <Table
                rowKey='_id'
                pagination={false}
                columns={tableColumns}
                dataSource={questionListState}
                style={{ width: '100%' }}
                rowSelection={{ onChange: onSelectedChange }}
            />
        </>)

        const randerEmpty = <Empty description='当前页暂无回收站数据' style={{marginTop: 100}} />

        return questionListState.length > 0 ? TableEl : randerEmpty
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