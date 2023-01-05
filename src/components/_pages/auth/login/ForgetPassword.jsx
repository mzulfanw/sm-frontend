import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from '@/components/_shared/ui/Modal'
import Input from '@/components/_shared/forms/Input'
import { useForm } from '@/hooks/useForm'
import { formatEmail } from '@/libs/validation'
import Button from '@/components/_shared/forms/Button'

function ForgetPassword({
  isOpen,
  handleOpen = () => { },
  handleReset = () => { }
}) {
  const [initialValues] = useState({
    email: ''
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
        email: values.email
      }
      handleReset(payload)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={handleOpen}
      title='Reset Password'
    >
      <form onSubmit={(e) => { handleSubmit(e) }}>
        <Input
          name='email'
          label='Email'
          value={values.email}
          error={errors.email}
          onChange={handleInputChange}
          placeholder='Enter Email'
        />
        <Button
          title='Reset'
          type='submit'
        />
      </form>
    </Modal>
  )
}

ForgetPassword.propTypes = {
  isOpen: PropTypes.bool,
  handleOpen: PropTypes.func,
  handleReset: PropTypes.func
}

export default ForgetPassword