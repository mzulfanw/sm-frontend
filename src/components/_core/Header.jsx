import React, { useCallback } from 'react'
import Button from '../_shared/forms/Button'
import { useWindowScroll } from '@/hooks/useWindowScroll'
import { Link, useNavigate } from 'react-router-dom'
import { getStorage } from '@/libs/storage'
import { useDispatch } from 'react-redux'
import { postLogoutRequested } from '@/store/slices/authSlice'

function Header() {
  const { y } = useWindowScroll()
  const router = useNavigate()
  const dispatch = useDispatch()

  const token = getStorage('token')

  // const handleLogout = () => {
  //   dispatch({
  //     type: postLogoutRequested.toString()
  //   })
  // }

  const handleLogout = useCallback(() => {
    dispatch({
      type: postLogoutRequested.toString()
    })
  }, [])

  return (
    <header
      className={`fixed top-0 px-10 py-5 bg-blue-300/30 backdrop-blur-md w-full z-50 ${y > 90 ? 'border-b border-white' : ''}`}
    >
      <nav
        className='flex flex-row justify-between items-center'
      >
        <h1
          className='text-white text-2xl cursor-pointer'
          onClick={() => { router('/') }}
        >
          Rocketship.
          <span
            className='ml-3'
          >
            🚀
          </span>
        </h1>
        <div className='flex items-center gap-5'>
          {
            !token && (
              <Button
                title='Sign In'
                onClick={() => { router('/auth/login') }}
              />
            )
          }
          {
            token && (
              <>
                <Link
                  to='/protected/user'
                  className='text-white hover:border-b-2 hover:border-white'
                >
                  Profile
                </Link>
                <Button
                  title='Logout'
                  onClick={handleLogout}
                />
              </>
            )
          }
        </div>
      </nav>
    </header>
  )
}

export default Header