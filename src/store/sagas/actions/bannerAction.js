import { get } from '@/libs/interceptors'

/**
 * Get Banner 
 * 
 * @returns 
 */
export const getBannerAction = () => {
  return get(`/banner?is_active=1`)
}