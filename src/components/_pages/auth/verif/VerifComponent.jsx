import Button from '@/components/_shared/forms/Button'
import React from 'react'
import PropTypes from 'prop-types'

function VerifComponent({
  tokenVerif,
  handleVerif = () => { }
}) {

  const handleSubmit = () => {
    const payload = {
      token: tokenVerif
    }
    handleVerif(payload)
  }

  return (
    <section
      className='mx-auto mt-10 max-w-md'
    >
      <Button
        title='Verif Email'
        onClick={handleSubmit}
      />
    </section>
  )
}

VerifComponent.propTypes = {
  tokenVerif: PropTypes.string,
  handleVerif: PropTypes.func
}

export default VerifComponent