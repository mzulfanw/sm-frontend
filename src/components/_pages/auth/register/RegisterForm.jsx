import React from 'react'
import PropTypes from 'prop-types'
import Input from '@/components/_shared/forms/Input'

function RegisterForm({
  values,
  errors,
  onChange = () => { }
}) {
  return (
    <div className='mb-14'>
      <Input
        label='Name *'
        name='name'
        type='text'
        value={values.name}
        error={errors.name}
        onChange={onChange}
        placeholder='Enter Name'
      />
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
        label='Phone *'
        name='phone'
        type='text'
        value={values.phone}
        error={errors.phone}
        onChange={onChange}
        placeholder='Enter Phone'
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
      <Input
        label='Password Confirmation *'
        name='password_confirmation'
        type='password'
        value={values.password_confirmation}
        error={errors.password_confirmation}
        onChange={onChange}
        placeholder='Enter Password Confirmation'
      />
    </div>
  )
}

RegisterForm.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  onChange: PropTypes.func
}

export default RegisterForm