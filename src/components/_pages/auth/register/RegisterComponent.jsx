import { useForm } from '@/hooks/useForm'
import { formatEmail } from '@/libs/validation'
import React, { useState } from 'react'
import RegisterForm from './RegisterForm'
import PropTypes from 'prop-types'
import Button from '@/components/_shared/forms/Button'

function RegisterComponent({
  handleRegister = () => { }
}) {

  const [initialValues] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: ''
  })

  const validate = (fieldOfValues = values) => {
    let temp = { ...errors }

    if ('name' in fieldOfValues)
      temp.name = fieldOfValues.name ? '' : 'Name is required'

    if ('email' in fieldOfValues)
      temp.email = fieldOfValues.email
        ? (
          formatEmail(fieldOfValues.email)
            ? ''
            : 'Email should have format @xxx'
        )
        : 'Email is required'

    if ('phone' in fieldOfValues)
      temp.phone = fieldOfValues.phone
        ? (
          fieldOfValues.phone.length >= 11 && fieldOfValues.phone.length < 12
            ? ''
            : 'Phone number should has 11 number'
        )
        : 'Phone number is required'

    if ('password' in fieldOfValues)
      temp.password = fieldOfValues.password ? '' : 'Password is required'

    if ('password_confirmation' in fieldOfValues)
      temp.password_confirmation = fieldOfValues.password_confirmation
        ? (
          values.password.toLowerCase() === fieldOfValues.password_confirmation.toLowerCase()
            ? ''
            : 'Password not match'
        )
        : 'Password confirmation is required'

    setErrors({
      ...temp
    })

    if (fieldOfValues === values)
      return Object.values(temp).every(x => x === '')
  }

  const {
    values,
    errors,
    setErrors,
    handleInputChange
  } = useForm(initialValues, true, validate)

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      password: values.password,
      password_confirmation: values.password_confirmation
    }
    if (validate()) {
      handleRegister(payload)
    }

  }

  return (
    <section
      className='mx-auto mt-10 max-w-md'
    >
      <h1
        className='text-white text-center text-2xl mb-14'
      >
        Register
      </h1>
      <form onSubmit={(e) => { handleSubmit(e) }}>
        <RegisterForm
          values={values}
          errors={errors}
          onChange={handleInputChange}
        />
        <Button
          title='Sign up'
          type='submit'
        />
      </form>
    </section>
  )
}

RegisterComponent.propTypes = {
  handleRegister: PropTypes.func
}

export default RegisterComponent