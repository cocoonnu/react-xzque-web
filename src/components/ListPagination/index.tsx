import React, { FC, useEffect, useState } from 'react'
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom'
import { LIST_PAGE_KEY, LIST_PAGE_SIZE_KEY } from '@/constant'
import { LIST_PAGE_SIZE } from '@/constant'
import type { PaginationProps } from 'antd'
import { Pagination } from 'antd'

type PropsType = {
    total: number
}

const ListPagination: FC<PropsType> = (props: PropsType) => {
    const nav = useNavigate()
    const { pathname } = useLocation()
    const [searchParams] = useSearchParams()

    const [current, setCurrent] = useState(1)
    const [pageSize, setPageSize] = useState(LIST_PAGE_SIZE)

    useEffect(() => {
        setCurrent(parseInt(searchParams.get(LIST_PAGE_KEY)) || 1)
        setPageSize(parseInt(searchParams.get(LIST_PAGE_SIZE_KEY)) || LIST_PAGE_SIZE)
    }, [searchParams])

    const onChange: PaginationProps['onChange'] = (page, pageSize) => {
        searchParams.set(LIST_PAGE_KEY, page.toString())
        searchParams.set(LIST_PAGE_SIZE_KEY, pageSize.toString())

        nav({
            pathname,
            search: searchParams.toString()
        })
    }

    return (
        <div >
            <Pagination 
                current={current} 
                total={props.total} 
                onChange={onChange} 
                pageSize={pageSize} 
            />
        </div>
    )
}

export default ListPagination