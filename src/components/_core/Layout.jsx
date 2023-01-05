import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function Layout() {
  return (
    <>
      <Header />
      <main className='bg-slate-900 px-10 py-32 min-h-screen'>
        <Outlet />
      </main>
    </>
  )
}

export default Layout