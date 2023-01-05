import React, { useState } from 'react'
import PropTypes from 'prop-types'
import EditForm from './EditForm'
import { useForm } from '@/hooks/useForm'
import Button from '@/components/_shared/forms/Button'

function EditComponent({
  user,
  handleUpdate = () => { }
}) {
  const [initialValues] = useState({
    name: user?.profile?.name || '',
    phone: user?.profile?.phone || ''
  })

  const validate = (fieldOfValues = values) => {
    let temp = { ...errors }

    if ('name' in fieldOfValues)
      temp.name = fieldOfValues.name ? '' : 'Name is required'

    if ('phone' in fieldOfValues)
      temp.phone = fieldOfValues.phone ? '' : 'Phone is required'

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
        id: user?.profile?.id,
        name: values.name,
        phone: values.phone
      }
      handleUpdate(payload)
    }
  }

  return (
    <section
      className='mx-auto max-w-md text-white'
    >
      <h1 className='text-2xl mb-5'>Update Profile</h1>
      <form onSubmit={(e) => { handleSubmit(e) }}>
        <EditForm
          values={values}
          errors={errors}
          onChange={handleInputChange}
        />
        <Button
          title='Edit'
          type='submit'
        />
      </form>
    </section>
  )
}

EditComponent.propTypes = {
  user: PropTypes.object,
  handleUpdate: PropTypes.func
}

export default EditComponent