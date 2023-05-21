import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'


const MainLayout: FC = () => {
    return (
        <div className='main-container'>
            <h1>heater</h1>
            <Outlet />
            <h1>foot</h1>
        </div>
    )
}

export default MainLayout