import axios from 'axios'
import store from '../store'
import Toast from '../components/ui-lib/toast'

const instance = axios.create({
  timeout: 60 * 1000,
  baseURL: process.env.VUE_APP_API_DOMAIN
})

// 一些拦截器配置，用户token鉴权，发送请求显示loading,请求回来loading消失之类的
instance.interceptors.request.use(config => { // 配置发送请求的信息
  store.dispatch('showLoading')
  config.headers.authorization = `${store.state.token}`
  return config
}, error => {
  return Promise.reject(error)
})
// response拦截
instance.interceptors.response.use(response => {
  store.dispatch('hideLoading')
  window.console.log(response)
  if (response.status === 200) {
    return response
  } else {
    let err = new Error()
    err.response = response
    return Promise.reject(err)
  }
}, error => {
  store.dispatch('hideLoading')
  return Promise.reject(error)
})

const httpRequest = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data)
        .then(res => {
          resolve(res)
        })
        .catch(error => {
          if (error.response) {
            if (error.response.status === 200) {
              reject(error.response)
            }
          } else {
            Toast('请求无响应')
          }
        })
  })
}

export default {
  joke (data = {}) {
    return httpRequest('/api/joke/index', ...arguments)
  }
}
