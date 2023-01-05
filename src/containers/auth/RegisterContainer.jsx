import RegisterComponent from '@/components/_pages/auth/register/RegisterComponent'
import React from 'react'
import { useDispatch } from 'react-redux'
import { postRegisterRequested } from '@/store/slices/authSlice'

function RegisterContainer() {
  const dispatch = useDispatch()

  const handleRegister = (payload) => {
    dispatch({
      type: postRegisterRequested.toString(),
      payload: payload
    })
  }

  return (
    <RegisterComponent
      handleRegister={handleRegister}
    />
  )
}

export default RegisterContainer