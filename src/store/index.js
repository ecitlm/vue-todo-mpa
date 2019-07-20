import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import user from './modules/user'
import storage from '../assets/js/base/storage'

Vue.use(Vuex)
const state = {
  loading: false,
  loadingSum: 0,
  token: storage.get('token')
}

export default new Vuex.Store({
  modules: {
    user
  },
  state,
  mutations,
  actions
})
