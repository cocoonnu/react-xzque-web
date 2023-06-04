import React, { FC, useState, useEffect } from 'react'
import type { ChangeEvent } from 'react'
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom'
import { LIST_SEARCH_KEY } from '@/constant'
import { Input } from 'antd'
const { Search } = Input


const ListSearch: FC = () => {
    const nav = useNavigate()
    const { pathname } = useLocation()
    const [searchParams] = useSearchParams() 
    const [searchValue, setSearchValue] = useState('')

    // 监测页面url的search参数
    useEffect(() => {
        setSearchValue(searchParams.get(LIST_SEARCH_KEY))
    }, [searchParams])
    

    // 搜索时改变页面url：修改keyword字段
    const onSearch = () => {
        nav({
            pathname,
            search: `${LIST_SEARCH_KEY}=${searchValue}`
        })
    }
    
    
    // 双向数据绑定
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }

    return (
        <Search
            onSearch={onSearch}
            onChange={onChange}
            value={searchValue}
            style={{ width: 280 }}
            placeholder='请输入问卷标题...'
        />
    )
}

export default ListSearch