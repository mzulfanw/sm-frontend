import { get, post } from '@/libs/interceptors'

export const getProfileAction = () => {
  return get(`/user-profile`)
}

export const postUpdateUserAction = (payload) => {
  return post(`/user-profile/update`, payload)
}