import Toast from '@/components/ui-lib/toast'
import store from '@/store'
const Home = () => import('@/views/news/Home')
// const About = () => import('@/views/About')
let oRoutes = {}
let arrRoutes = [
  'Mine',
  'About'
]
for (const path of arrRoutes) {
  oRoutes[path.slice(path.lastIndexOf('/') + 1)] = resolve => {
    store.dispatch('showLoading')
    import(`@/views/news/${path}`)
      .then(module => {
        store.dispatch('hideLoading')
        resolve(module)
      })
      .catch(() => {
        store.dispatch('hideLoading')
        Toast('网络连接繁忙，请重试')
      })
  }
}
export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      requireAuth: false,
      title:'Home主页'
    },
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      requireAuth: false,
      title:'About关于'
    },
    component: oRoutes['About']
  },
  {
    path: '/mine/test',
    name: 'Mine',
    meta: {
      requireAuth: false,
      title: 'mine我的'
    },
    component: oRoutes['Mine']
  }
]
