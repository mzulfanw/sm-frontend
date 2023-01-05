import React from 'react'
import PropTypes from 'prop-types'
import { formatDate } from '@/libs/validation'

function ProfileInfo({
  user
}) {
  return (
    <div>
      <h1 className='mb-5 text-2xl'>Profile Information</h1>
      <div className='mb-5'>
        <p className='text-xl'>Name : {user?.name || 'Verif your email'}</p>
      </div>
      <div className='mb-5'>
        <p className='text-xl'>Email : {user?.email || 'Verif your email'}</p>
      </div>
      <div className='mb-5'>
        <p className='text-xl'>Email verif :  {formatDate(user?.email_verified_at) || 'Verif your email'}</p>
      </div>
      <div className='mb-5'>
        <p className='text-xl'>Phone : {user?.phone || 'Verif your email'}</p>
      </div>
    </div>
  )
}

ProfileInfo.propTypes = {
  user: PropTypes.object
}

export default ProfileInfo