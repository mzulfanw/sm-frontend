import ProfileComponent from '@/components/_pages/protected/profile/ProfileComponent'
import { getUserRequested } from '@/store/slices/userSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

function ProfileContainer({
  token
}) {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state.user)

  useEffect(() => {
    dispatch({
      type: getUserRequested.toString()
    })
  }, [])
  return (
    <ProfileComponent
      user={selector}
      token={token}
    />
  )
}

ProfileContainer.propTypes = {
  token: PropTypes.string
}

export default ProfileContainer