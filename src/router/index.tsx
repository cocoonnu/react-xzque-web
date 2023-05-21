import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import Home from '@/views/Home'
import Login from '@/views/Login'
import NotFound from '@/views/NotFound'
import Register from '@/views/Register'
import ManageLayout from '@/layouts/ManageLayout'
import List from '@/views/Manage/List'
import Star from '@/views/Manage/Star'
import Trash from '@/views/Manage/Trash'
import QuestionLayout from '@/layouts/QuestionLayout'
import Edit from '@/views/Question/Edit'
import Stat from '@/views/Question/Stat'
import React from 'react'

export default createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,

        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },

            {
                path: 'manage',
                element: <ManageLayout />,

                children: [
                    {
                        path: 'list',
                        element: <List />,
                    },
                    {
                        path: 'star',
                        element: <Star />,
                    },
                    {
                        path: 'trash',
                        element: <Trash />,
                    },
                ],
            },

            {
                path: '*',
                element: <NotFound />
            },
        ]
    },

    {
        path: '/question',
        element: <QuestionLayout />,
        
        children: [
            {
                path: 'edit/:id',
                element: <Edit />,
            },
            {
                path: 'stat/:id',
                element: <Stat />,
            },
        ],
    }
])