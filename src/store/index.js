import Vue from 'vue'
import Vuex from 'vuex'

import covid from './covid'
import map from './map'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    covid, // 疫情模块
    map, // 地图模块
  }
})
