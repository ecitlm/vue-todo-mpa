import axios from 'axios'
const request = axios.create({
  timeout: 60 * 1000,
  baseURL: process.env.VUE_APP_API_DOMAIN
})

const http = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    request
      .post(url, data)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        window.console.log(err)
        reject(err)
      })
  })
}
export default {
  joke () {
    return http('/api/joke/index', ...arguments)
  }
}
