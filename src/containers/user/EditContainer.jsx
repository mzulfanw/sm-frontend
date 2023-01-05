import EditComponent from '@/components/_pages/protected/edit/EditComponent'
import { getUserRequested, postUpdateUserRequested } from '@/store/slices/userSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function EditContainer() {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state.user)

  const handleUpdate = (payload) => {
    dispatch({
      type: postUpdateUserRequested.toString(),
      payload: payload
    })
  }

  useEffect(() => {
    dispatch({
      type: getUserRequested.toString()
    })
  }, [])
  return (
    <EditComponent
      user={selector}
      handleUpdate={handleUpdate}
    />
  )
}

export default EditContainer