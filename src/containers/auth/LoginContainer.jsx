import React from 'react'
import LoginComponent from '@/components/_pages/auth/login/LoginComponent'
import { useDispatch } from 'react-redux'
import { postLoginRequested, postResetPasswordRequested } from '@/store/slices/authSlice'

function LoginContainer() {
  const dispatch = useDispatch()

  const handleLogin = (payload) => {
    dispatch({
      type: postLoginRequested.toString(),
      payload: payload
    })
  }

  const handleReset = (payload) => {
    dispatch({
      type: postResetPasswordRequested.toString(),
      payload: payload
    })
  }

  return (
    <LoginComponent
      handleLogin={handleLogin}
      handleReset={handleReset}
    />
  )
}

export default LoginContainer