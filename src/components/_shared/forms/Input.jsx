import React from 'react'
import PropTypes from 'prop-types'

function Input({
  name,
  value,
  error,
  label,
  type,
  onChange = () => { },
  ...other
}) {
  return (
    <div className='mb-10'>
      <p
        className='text-white mb-2'
      >
        {label}
      </p>
      <input
        type={type}
        name={name}
        value={value}
        autoComplete='off'
        onChange={onChange}
        className={`bg-white w-full py-2 px-2 text-black rounded-md border-2 focus:outline-none ${error ? 'focus:ring-red-500 focus:ring-2' : 'focus:ring-blue-500 focus:ring-2'}`}
        {...other}
      />
      {
        error && (
          <span
            className='block mt-2 text-red-500'
          >
            {error}
          </span>
        )
      }
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.any,
  label: PropTypes.string,
  onChange: PropTypes.func
}

export default Input