import HomeComponent from '@/components/_pages/home/HomeComponent'
import { getBannerRequested } from '@/store/slices/bannerSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function HomeContainer() {
  const dispatch = useDispatch()
  const banner = useSelector((state) => state.banner)

  useEffect(() => {
    dispatch({
      type: getBannerRequested.toString()
    })
  }, [])
  return (
    <HomeComponent
      banner={banner}
    />
  )
}

export default HomeContainer