import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './filters/index'
import api from './api/http'
Vue.prototype.$api = api
Vue.config.productionTip = false
// 非正式环境添加vconsole调试
if (process.env.NODE_ENV !== 'production') {
  let VConsole = require('vconsole')
  let vConsole = new VConsole()
  window.console.log(`vconsole version: ${vConsole.version}`)
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
