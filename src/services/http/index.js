import axios from 'axios'
import qs from 'qs'
import merge from 'lodash/merge'

// import router from '@/router'
// import store from '@/store'
// import i18n from '@/services/i18n'
import { router, store, i18n } from '@/core-data'

// console.log('api url:', window.SITE_CONFIG.baseUrl)

/**
 * HTTP request
 */
const http = axios.create({
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  withCredentials: true,
  timeout: 1000 * 30,
  retry: 0,
  retryDelay: 1000,
})

/**
 * HTTP request interception
 */
http.interceptors.request.use(config => {
  // TODO instance.defaults.headers.common['Authorization'] = AUTH_TOKEN
  // let token = store.state.user.token
  // if (token && (new Date).getTime() <= store.state.user.expire) {
  //   config.headers['Token'] = token
  // }
  return config
}, error => {
  return Promise.reject(error)
})

/**
 * HTTP response interception
 */
http.interceptors.response.use(response => {
  // console.log('response - data:', response.data)
  if (response.data) {
    if (response.data.code !== 200) {
      console.log('server error - code:', response.data.code, 'message:', response.data.message)
    }
  }
  return response
}, error => {
  if (error.code == 'ECONNABORTED' && error.message.includes('timeout')) {
    let config = error.config
    if (config && config.retry) {
      config.__retryCount = config.__retryCount || 0
      if (config.__retryCount < config.retry) {
        config.__retryCount += 1
      
        let backoff = new Promise(function(resolve) {
          setTimeout(function() {
            resolve()
          }, config.retryDelay || 1)
        })
        
        return backoff.then(function() {
          return http(config)
        })
      }
    }
  }

  // Unknown error: unrecoverable server error
  console.log('server error - {}', JSON.stringify(error))

  return Promise.reject(error)
})

/**
 * Request url handling
 */
http.getRequestUrl = (actionName) => {
  return (process.env.NODE_ENV !== 'production' && process.env.OPEN_PROXY ? '/proxy' : window.SITE_CONFIG.baseUrl) + actionName
}

/**
 * Get request parameter handling
 * @param {*} params Parameters
 * @param {*} openDefaultParams If to open default parameters
 */
http.getRequestParams = (params = {}, openDefaultParams = false) => {
  let defaults = {
    't': new Date().getTime()
  }
  return openDefaultParams ? merge(defaults, params) : params
}

/**
 * Post request data handling
 * @param {*} data Parameters
 * @param {*} openDefaultData If to open default data
 * @param {*} contentType data content type
 *  json: 'application/json; charset=utf-8'
 *  form: 'application/x-www-form-urlencoded; charset=utf-8'
 */
http.getRequestData = (data = {}, openDefaultData = false, contentType = 'json') => {
  let defaults = {
    't': new Date().getTime()
  }
  data = openDefaultData ? merge(defaults, data) : data
  return contentType === 'json' ? JSON.stringify(data) : qs.stringify(data)
}

export default http
