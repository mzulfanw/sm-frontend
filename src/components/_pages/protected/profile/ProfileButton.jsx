import Button from '@/components/_shared/forms/Button'
import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

function ProfileButton({
  userId,
  token
}) {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col md:flex-row items-center justify-between gap-5'>
      {
        typeof userId !== 'undefined' && (
          <div className='w-full'>
            <Button
              title='Edit'
              onClick={() => { navigate(`/protected/user/edit/${userId}`) }}
            />
          </div>
        )
      }
      {
        typeof userId === 'undefined' && (
          <div className='w-full'>
            <Button
              title='Verif Email'
              onClick={() => { navigate(`/verif/${token}`) }}
            />
          </div>
        )
      }
    </div>
  )
}

ProfileButton.propTypes = {
  userId: PropTypes.number,
  token: PropTypes.string
}

export default ProfileButton