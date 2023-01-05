import React from 'react'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

function App() {
  return (
    <>
      <Toaster
        position='top-right'
        reverseOrder={false}
        containerStyle={{ top: '100px' }}
      />
      <RouterProvider
        router={router}
      />
    </>

  )
}

export default App