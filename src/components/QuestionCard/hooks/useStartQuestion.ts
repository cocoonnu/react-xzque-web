import { useState } from 'react'
import { useRequest } from 'ahooks'
import { message } from 'antd'
import { updateQuestionApi } from '@/services/question'

function useStartQuestion(_id: string, isStar: boolean) {
    const [starState, setStarState] = useState(isStar)

    const { run: updateStarState, loading: starLoading } = useRequest(
        () => updateQuestionApi(_id, { isStar: !starState }), {
            manual: true,
            onSuccess() {
                setStarState(!starState)
                if (!starState) message.success('设置问卷标星成功')
                else message.success('取消问卷标星成功')
            }
        }
    )

    return { updateStarState, starLoading, starState }
}

export default useStartQuestion