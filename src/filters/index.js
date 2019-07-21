import Vue from 'vue'
Vue.filter('uppercase', function (val) {
  window.console.log(val)
  return String(val).toUpperCase()
})
