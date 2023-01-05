import WithAuth from '@/components/_shared/WithAuth'
import EditContainer from '@/containers/user/EditContainer'
import React from 'react'

function Edit() {
  return (
    <EditContainer />
  )
}

export default WithAuth(Edit)