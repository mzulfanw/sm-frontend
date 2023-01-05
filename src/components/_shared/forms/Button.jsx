import React from 'react'
import PropTypes from 'prop-types'

function Button({
  title,
  type = 'button',
  onClick = () => { }
}) {
  return (
    <button
      className='text-slate-900 px-5 rounded-md py-2 bg-gray-300 w-full'
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
}

export default Button