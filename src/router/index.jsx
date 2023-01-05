import Layout from '@/components/_core/Layout'
import Login from '@/pages/auth/Login'
import Register from '@/pages/auth/Register'
import Verif from '@/pages/auth/verif/Verif'
import Home from '@/pages/Home'
import Edit from '@/pages/protected/Edit'
import User from '@/pages/protected/User'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/auth/register',
        element: <Register />
      },
      {
        path: '/auth/login',
        element: <Login />
      },
      {
        path: '/verif/:token',
        element: <Verif />
      },
      {
        path: '/protected/user',
        element: <User />
      },
      {
        path: '/protected/user/edit/:id',
        element: <Edit />
      }
    ]
  }
])