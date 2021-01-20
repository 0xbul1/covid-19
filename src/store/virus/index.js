import { dataHandler, http } from '@/server';
import { HTTP_SERVER_ADDRESS_1, HTTP_SERVER_ADDRESS_2, HTTP_SERVER_ADDRESS_APIKEY } from '@/config';

const API_TYPES = {
  REAL_TIME: '/ncov',
  STATISTICS: '/ncovcity',
  RUMOR: '/rumour',
};
const API_RESULTS = {
  REAL_TIME: 'newslist',
  STATISTICS: 'newslist',
  RUMOR: 'newslist',
  TREND: 'results',
};

const META_PATH = '/index?key';

export default {
  namespaced: true,
  state: {
    RTData: undefined, // 实时-REAL_TIME
    STData: undefined, // 统计-STATISTICS
    RMData: undefined, // 谣言-RUMOR
    TRData: undefined, // 趋势-TREND
  },
  mutations: {
    saveRTData(state, RTData) {
      state.RTData = RTData;
    },
    saveSTData(state, STData) {
      state.STData = STData;
    },
    saveRMData(state, RMData) {
      state.RMData = RMData;
    },
    saveTRData(state, TRData) {
      state.TRData = TRData;
    },
  },
  actions: {
    fetchData({state, commit}, 
    {
      stateUrl = 'RTData', 
      mutation = 'saveRTData', 
      url = HTTP_SERVER_ADDRESS_1, 
      type = API_TYPES.REAL_TIME, 
      result = API_RESULTS.REAL_TIME,
      key = HTTP_SERVER_ADDRESS_APIKEY, 
      path = META_PATH,
    }) {
      console.log(stateUrl);
      if (state[stateUrl]) return;
      return http({
        url: url + result + path + key
      }).then(res => {
        commit(mutation, dataHandler(res, type));
      })
    },
    fetchRTData({ state, commit }) {
      if (state.RTData) return;
      return http({
        url: `${HTTP_SERVER_ADDRESS_1}${API_TYPES.REAL_TIME}/index?key=${HTTP_SERVER_ADDRESS_APIKEY}`
      }).then( res => {
        commit('saveRTData', dataHandler(res, `${API_RESULTS.REAL_TIME}`));
      })
    },
    fetchSTData({ state, commit }) {
      if (state.STData) return;
      return http({
        url: `${HTTP_SERVER_ADDRESS_1}${API_TYPES.STATISTICS}/index?key=${HTTP_SERVER_ADDRESS_APIKEY}`
      }).then( res => {
        commit('saveSTData', dataHandler(res, `${API_RESULTS.STATISTICS}`));
      })
    },
    fetchRMData({ state, commit }) {
      if (state.RMData) return;
      return http({
        url: `${HTTP_SERVER_ADDRESS_1}${API_TYPES.RUMOR}/index?key=${HTTP_SERVER_ADDRESS_APIKEY}`
      }).then( res => {
        commit('saveRMData', dataHandler(res, `${API_RESULTS.RUMOR}`));
      })
    },
    fetchTRData({ state, commit }) {
      if (state.TRData) return;
      return http({
        url: `${HTTP_SERVER_ADDRESS_2}`
      }).then( res => {
        commit('saveTRData', dataHandler(res, `${API_RESULTS.TREND}`));
      })
    }
  },
}