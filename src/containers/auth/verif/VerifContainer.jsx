import VerifComponent from '@/components/_pages/auth/verif/VerifComponent'
import { postTokenVerifRequested } from '@/store/slices/authSlice'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

function VerifContainer() {
  const dispatch = useDispatch()
  const { token } = useParams()

  const handleVerif = (payload) => {
    dispatch({
      type: postTokenVerifRequested.toString(),
      payload: payload
    })
  }
  return (
    <VerifComponent
      tokenVerif={token}
      handleVerif={handleVerif}
    />
  )
}

export default VerifContainer