import React from 'react'
import PropTypes from 'prop-types'
import Input from '@/components/_shared/forms/Input'

function EditForm({
  values,
  errors,
  onChange = () => { }
}) {
  console.log(values)
  return (
    <div
      className='mb-14'
    >
      <Input
        label='Name'
        name='name'
        value={values.name}
        error={errors.name}
        onChange={onChange}
        type='text'
        placeholder='Enter Name'
      />
      <Input
        label='Phone'
        name='phone'
        value={values.phone}
        error={errors.phone}
        onChange={onChange}
        type='text'
        placeholder='Enter Phone'
      />
    </div>
  )
}

EditForm.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  onChange: PropTypes.func
}

export default EditForm