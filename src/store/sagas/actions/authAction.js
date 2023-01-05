import { get, post } from '@/libs/interceptors'

export const postLoginAction = (payload) => {
  return post(`/login`, payload)
}

export const postLogoutAction = () => {
  return post(`/logout`)
}

export const postRegisterAction = (payload) => {
  return post(`/register`, payload)
}

export const tokenVerif = (payload) => {
  return get(`/email/verify?token=${payload.token}`)
}

export const postResetPasswordAction = (payload) => {
  return post(`/password/reset-request`, payload)
}