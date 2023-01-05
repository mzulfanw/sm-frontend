import WithAuth from '@/components/_shared/WithAuth'
import ProfileContainer from '@/containers/user/ProfileContainer'
import React from 'react'
import PropTypes from 'prop-types'

function User({
  token
}) {
  return (
    <ProfileContainer
      token={token}
    />
  )
}

User.propTypes = {
  token: PropTypes.string
}

export default WithAuth(User)