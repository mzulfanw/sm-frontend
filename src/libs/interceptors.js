import axios from 'axios'
import { toast } from 'react-hot-toast'
import { Logger } from './logger'
import { clearStorages, getStorage } from './storage'


/**
 * 
 * Log Responser
 * 
 * @param {*} res 
 * @returns
 */
export const logResponser = (res) => {
  if (!res) return null
  const { config } = res
  const loadTime = performance.now()
  const url = config.url.replace('/api', '')

  // * Send Response to logger 
  Logger(`${config.method.toUpperCase()} ${url}`, {
    responseTime: loadTime,
    status: res.status,
    statusText: res.statusText,
    error: res?.data?.meta?.error || '',
    message: res?.data?.meta?.message || ''
  })
}

// * Create services of axios 
const services = axios.create({
  baseURL: '/api',
  headers: {
    Authorization: {
      toString() {
        return `Bearer ${getStorage('token')}`
      }
    },
    version: import.meta.env.VITE_APP_VERSION
  }
})

/**
 * Axios interceptors 
 */
services.interceptors.response.use(function (res) {
  if (import.meta.env.NODE_ENV !== 'production')
    logResponser(res)
  return res
}, function (error) {
  console.log(error, 'interceptors')
  if (error?.response?.status === 401) {
    clearStorages(['token'])
    toast.error(`${error?.response.statusText}`, {
      duration: 4000
    })
    setTimeout(() => {
      window.location.href = '/auth/login'
    }, 5000)
  }
  const err = error?.response
  if (import.meta.env.NODE_ENV !== 'production')
    logResponser(err)

  return Promise.reject(err)
})


/**
 *
 * Function Get Axios
 *
 * @param {String} url
 * @param {*} params
 */
export const get = (url, params) => {
  return services.get(`${url}`, {
    params
  })
}

/**
 *
 * Function Post Axios
 *
 * @param {String} url
 * @param {*} body
 */
export const post = (url, body) => {
  return services.post(`${url}`, body)
}

/**
 *
 * Function Put Axios
 *
 * @param {String} url
 * @param {*} body
 */
export const put = (url, body) => {
  return services.put(`${url}`, body)
}

/**
 * 
 * Function Patch Axios 
 * 
 * @param {String} url 
 * @param {*} body
 */
export const patch = (url, body) => {
  return services.patch(`${url}`, body)
}

/**
 *
 * Function Delete Axios
 *
 * @param {String} url
 * @param {*} params
 */
export const del = (url, params) => {
  return services.delete(`${url}`, {
    params
  })
}

/**
 *
 * Custom Function getBlob response
 *
 * @param {String} url
 * @param {*} params
 */
export const getBlob = (url, params) => {
  return services.get(`${url}`, {
    params,
    responseType: 'blob'
  })
}