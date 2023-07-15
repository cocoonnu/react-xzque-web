import { useEffect } from 'react'
import { useRequest } from 'ahooks'
import { useAppDispatch } from '@/store'
import { updateComponents } from '@/store/modules/componentsReducer'
import { getQuestionDataApi } from '@/services/question'
import { useLocation } from 'react-router-dom'

// 加载单个问卷详细信息函数
const useLoadQueData = () => {
    const dispatch = useAppDispatch()
    const { pathname } = useLocation()
    const id: string = pathname.split('/').pop()

    const { loading, run } = useRequest(getQuestionDataApi, {
        manual: true,
        onSuccess(data) {
            // data: 某个问卷页面的详细信息数据
            const componentList = data?.componentList
            if (componentList) {
                dispatch(updateComponents({ componentList }))
            }
        },
    })

    useEffect(() => {
        run(id)
    }, [id])

    return { loading }
}

export default useLoadQueData