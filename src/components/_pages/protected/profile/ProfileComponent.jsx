import React from 'react'
import PropTypes from 'prop-types'
import ProfileInfo from './ProfileInfo'
import ProfileButton from './ProfileButton'

function ProfileComponent({
  token,
  user
}) {
  return (
    <section className='mx-auto max-w-md text-white'>
      <ProfileInfo
        user={user?.profile}
      />
      <ProfileButton
        token={token}
        userId={user?.profile?.id}
      />
    </section>
  )
}

ProfileComponent.propTypes = {
  token: PropTypes.string,
  user: PropTypes.object
}

export default ProfileComponent