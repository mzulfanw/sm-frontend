import React from 'react'
import PropTypes from 'prop-types'

function Card({
  title,
  desc,
  imageUrl
}) {
  return (
    <div
      className='flex flex-col md:flex-row text-white justify-evenly items-center mb-10'
    >
      <div className='md:w-1/2'>
        <img
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className='md:w-1/4'>
        <h1 className='text-2xl mb-5 mt-5 md:mt-0'>{title}</h1>
        <p className='text-justify'>{desc}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  imageUrl: PropTypes.string
}

export default Card