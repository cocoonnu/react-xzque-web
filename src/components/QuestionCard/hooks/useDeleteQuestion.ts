import { useState } from 'react'
import { useRequest } from 'ahooks'
import { message } from 'antd'
import { updateQuestionApi } from '@/services/question'

function useDeleteQuestion(_id: string) {
    const [deleteState, setDeleteState] = useState(false)

    const { run: updateDeleteState, loading: deleteLoading } = useRequest(
        () => updateQuestionApi(_id, { isDelete: !deleteState }), {
            manual: true,
            onSuccess() {
                setDeleteState(!deleteState)
                message.success('删除问卷成功')
            }
        }
    )

    return { updateDeleteState, deleteLoading, deleteState }
}

export default useDeleteQuestion