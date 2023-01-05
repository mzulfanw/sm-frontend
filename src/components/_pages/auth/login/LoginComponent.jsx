import React, { useState } from 'react'
import { useForm } from '@/hooks/useForm'
import LoginForm from './LoginForm'
import Button from '@/components/_shared/forms/Button'
import PropTypes from 'prop-types'
import { formatEmail } from '@/libs/validation'
import { useNavigate } from 'react-router-dom'
import ForgetPassword from './ForgetPassword'

function LoginComponent({
  handleLogin = () => { },
  handleReset = () => { }
}) {
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(false)

  const [initialValues] = useState({
    email: '',
    password: ''
  })

  const validate = (fieldOfValues = values) => {
    let temp = { ...errors }

    if ('email' in fieldOfValues)
      temp.email = fieldOfValues.email
        ? (
          formatEmail(fieldOfValues.email)
            ? ''
            : 'Email should have format @xxx'
        )
        : 'Email is required'

    if ('password' in fieldOfValues)
      temp.password = fieldOfValues.password ? '' : 'Password is required'

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
    if (validate()) {
      const payload = {
        email: values.email,
        password: values.password
      }
      handleLogin(payload)
    }
  }

  return (
    <section className='mx-auto mt-10 max-w-md'>
      <h1 className='text-white text-center text-2xl mb-14'>Login</h1>
      <form onSubmit={(e) => { handleSubmit(e) }}>
        <LoginForm
          values={values}
          errors={errors}
          onChange={handleInputChange}
        />
        <Button
          type='submit'
          title='Sign in'
        />
      </form>
      <p
        className='text-white mt-5 cursor-pointer'
        onClick={() => { setOpenModal(true) }}
      >
        Forget Password?
      </p>
      <p
        className='text-white mt-5 text-center '
      >
        not have account ?
        <span
          className='hover:text-blue-600 ml-1'
          onClick={() => { navigate('/auth/register') }}
        >
          Register here
        </span>
      </p>
      <ForgetPassword
        isOpen={openModal}
        handleOpen={setOpenModal}
        handleReset={handleReset}
      />
    </section>
  )
}

LoginComponent.propTypes = {
  handleLogin: PropTypes.func,
  handleReset: PropTypes.func
}

export default LoginComponent