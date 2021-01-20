import { dataHandler, http } from '@/server';
import { HTTP_SERVER_ADDRESS_1, HTTP_SERVER_ADDRESS_2, HTTP_SERVER_ADDRESS_APIKEY } from '@/config';

const API_TYPES = {
  REAL_TIME: '/ncov',
  STATISTICS: '/ncovcity',
  RUMOR: '/rumour',
};

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
  },
  actions: {
    fetchRTData({ state }) {
      if (state.RTData) return;
      return http({
        url: `${HTTP_SERVER_ADDRESS_1}${API_TYPES.REAL_TIME}/index?key=${HTTP_SERVER_ADDRESS_APIKEY}`
      }).then( res => {
        console.log(dataHandler(res, 'newslist'));
      })
    },
    fetchSTData({ state }) {
      if (state.STData) return;
      return http({
        url: `${HTTP_SERVER_ADDRESS_1}${API_TYPES.STATISTICS}/index?key=${HTTP_SERVER_ADDRESS_APIKEY}`
      }).then( res => {
        console.log(dataHandler(res));
      })
    },
    fetchRMData({ state }) {
      if (state.RMData) return;
      return http({
        url: `${HTTP_SERVER_ADDRESS_1}${API_TYPES.RUMOR}/index?key=${HTTP_SERVER_ADDRESS_APIKEY}`
      }).then( res => {
        console.log(dataHandler(res));
      })
    },
    fetchTRData({ state }) {
      if (state.RMData) return;
      return http({
        url: `${HTTP_SERVER_ADDRESS_2}`
      }).then( res => {
        console.log(dataHandler(res));
      })
    }
  },
}