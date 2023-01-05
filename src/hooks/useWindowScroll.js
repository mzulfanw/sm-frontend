import { useEffect, useCallback, useState } from 'react'


export const useWindowScroll = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const listeners = useCallback(() => {
    setPos({ x: window.scrollX, y: window.scrollY })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', listeners)
    return () => window.removeEventListener('scroll', listeners)
  }, [listeners])

  return pos
}