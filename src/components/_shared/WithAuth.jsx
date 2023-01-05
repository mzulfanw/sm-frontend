/* eslint-disable react/display-name */
import React, { useEffect } from 'react'
import { getStorage } from '@/libs/storage'
import { useNavigate } from 'react-router-dom'

const WithAuth = (WrappedComponent) => {
  return (props) => {
    if (typeof window !== 'undefined') {

      const token = getStorage('token')
      const router = useNavigate()

      useEffect(() => {
        if (!token) {
          router('/')
        }
      }, [])
      return <WrappedComponent {...props} token={token} />
    }
    return null
  }
}

export default WithAuth