import Vue from 'vue'
import Vuex from 'vuex'

import virus from './virus'
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
    virus, // 疫情模块
    map, // 地图模块
  }
})
