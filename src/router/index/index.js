import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import routes from '@/router/index/routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes
})

router.beforeEach((to, from, next) => {
  window.console.log(`路由从---${from.path}到----${to.path}`)
  document.title = to.meta.title
  if (to.meta.requireAuth) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        },
        replace: true
      })
    }
  } else {
    next()
  }
})

export default router
