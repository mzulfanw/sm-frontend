import React from 'react'
import PropTypes from 'prop-types'
import Input from '@/components/_shared/forms/Input'

function LoginForm({
  values,
  errors,
  onChange = () => { }
}) {
  return (
    <div
      className='mb-14'
    >
      <Input
        label='Email *'
        name='email'
        type='text'
        value={values.email}
        error={errors.email}
        onChange={onChange}
        placeholder='Enter Email'
      />

      <Input
        label='Password *'
        name='password'
        type='password'
        value={values.password}
        error={errors.password}
        onChange={onChange}
        placeholder='Enter Password'
      />
    </div>
  )
}

LoginForm.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  onChange: PropTypes.func
}

export default LoginForm