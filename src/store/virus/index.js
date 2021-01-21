import { HTTP_SERVER_ADDRESS_1, HTTP_SERVER_ADDRESS_2, HTTP_SERVER_ADDRESS_APIKEY } from '@/config';
import {
  REAL_TIME, THE_STATISTICS, THE_RUMOR, THE_TREND,
  SET_REAL_TIME, SET_THE_STATISTICS, SET_THE_RUMOR, SET_THE_TREND,
  GET_REAL_TIME, GET_THE_STATISTICS, GET_THE_RUMOR, GET_THE_TREND,
  actionCreator, API_RESULTS, API_TYPES, META_PATH
} from '../constants'

export default {
  namespaced: true,
  state: {
    [REAL_TIME]: undefined, // 实时-REAL_TIME
    [THE_STATISTICS]: undefined, // 统计-STATISTICS
    [THE_RUMOR]: undefined, // 谣言-RUMOR
    [THE_TREND]: undefined, // 趋势-TREND
  },
  mutations: {
    [SET_REAL_TIME](state, REAL_TIME) {
      state[REAL_TIME] = REAL_TIME;
    },
    [SET_THE_STATISTICS](state, THE_STATISTICS) {
      state[THE_STATISTICS] = THE_STATISTICS;
    },
    [SET_THE_RUMOR](state, THE_RUMOR) {
      state[THE_RUMOR] = THE_RUMOR;
    },
    [SET_THE_TREND](state, THE_TREND) {
      state[THE_TREND] = THE_TREND;
    },
  },
  actions: {
    [GET_REAL_TIME]({ state, commit }) {
      actionCreator({state, commit},{
        stateUrl: REAL_TIME, 
        mutation: SET_REAL_TIME,
        url : HTTP_SERVER_ADDRESS_1, 
        type : API_TYPES[REAL_TIME], 
        result : API_RESULTS[REAL_TIME],
        key : HTTP_SERVER_ADDRESS_APIKEY, 
        path : META_PATH,
      })
    },
    [GET_THE_STATISTICS]({ state, commit }) {
      actionCreator({state, commit},{
        stateUrl: THE_STATISTICS, 
        mutation: SET_THE_STATISTICS,
        url : HTTP_SERVER_ADDRESS_1, 
        type : API_TYPES[THE_STATISTICS], 
        result : API_RESULTS[THE_STATISTICS],
        key : HTTP_SERVER_ADDRESS_APIKEY, 
        path : META_PATH,
      })
    },
    [GET_THE_RUMOR]({ state, commit }) {
      actionCreator({state, commit},{
        stateUrl: THE_RUMOR, 
        mutation: SET_THE_RUMOR,
        url : HTTP_SERVER_ADDRESS_1, 
        type : API_TYPES[THE_RUMOR], 
        result : API_RESULTS[THE_RUMOR],
        key : HTTP_SERVER_ADDRESS_APIKEY, 
        path : META_PATH,
      })
    },
    [GET_THE_TREND]({ state, commit }) {
      actionCreator({state, commit},{
        stateUrl: THE_TREND, 
        mutation: SET_THE_TREND,
        url : HTTP_SERVER_ADDRESS_1, 
        type : API_TYPES[THE_TREND], 
        result : API_RESULTS[THE_TREND],
        key : HTTP_SERVER_ADDRESS_APIKEY, 
        path : META_PATH,
      })
    },
  },
}