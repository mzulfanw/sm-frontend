import React from 'react'
import PropTypes from 'prop-types'
import Card from '@/components/_shared/ui/Card'

function HomeComponent({
  banner
}) {
  return (
    <section className='px-5 py-32 max-w-6xl'>
      <div className=' mb-10 flex flex-row justify-between items-center'>
        <h1 className='text-4xl text-white'>Lets Explore about spaceship 🚀</h1>
      </div>

      {
        banner?.banner.map((value, index) => (
          <Card
            key={index}
            title={value?.title}
            desc={value.description}
            imageUrl={value.image_url}
          />
        ))
      }
    </section>
  )
}

HomeComponent.propTypes = {
  banner: PropTypes.object
}

export default HomeComponent