import { HTTP_SERVER_ADDRESS_COVID_1, HTTP_SERVER_ADDRESS_COVID_2, HTTP_SERVER_ADDRESS_APIKEY } from '@/config';
import {
  REAL_TIME, THE_STATISTICS, THE_RUMOR, THE_TREND,
  SET_REAL_TIME, SET_THE_STATISTICS, SET_THE_RUMOR, SET_THE_TREND,
  GET_REAL_TIME, GET_THE_STATISTICS, GET_THE_RUMOR, GET_THE_TREND,
  API_RESULTS_COVID, API_TYPES_COVID, META_PATH_COVID
} from '../constants';
import { actionCreatorCovid } from '../actionCreator';
export default {
  namespaced: true,
  state: {
    [REAL_TIME]: undefined, // 实时-REAL_TIME
    [THE_STATISTICS]: undefined, // 统计-STATISTICS
    [THE_RUMOR]: undefined, // 谣言-RUMOR
    [THE_TREND]: undefined, // 趋势-TREND
  },
  mutations: {
    [SET_REAL_TIME](state, payload) {
      state[REAL_TIME] = payload;
    },
    [SET_THE_STATISTICS](state, payload) {
      state[THE_STATISTICS] = payload;
    },
    [SET_THE_RUMOR](state, payload) {
      state[THE_RUMOR] = payload;
    },
    [SET_THE_TREND](state, payload) {
      state[THE_TREND] = payload;
    },
  },
  actions: {
    [GET_REAL_TIME]({ state, commit }) {
      actionCreatorCovid({state, commit},{
        stateUrl: REAL_TIME, 
        mutation: SET_REAL_TIME,
        url : HTTP_SERVER_ADDRESS_COVID_1, 
        type : API_TYPES_COVID[REAL_TIME], 
        result : API_RESULTS_COVID[REAL_TIME],
        key : HTTP_SERVER_ADDRESS_APIKEY, 
        path : META_PATH_COVID,
      })
    },
    [GET_THE_STATISTICS]({ state, commit }) {
      actionCreatorCovid({state, commit},{
        stateUrl: THE_STATISTICS, 
        mutation: SET_THE_STATISTICS,
        url : HTTP_SERVER_ADDRESS_COVID_1, 
        type : API_TYPES_COVID[THE_STATISTICS], 
        result : API_RESULTS_COVID[THE_STATISTICS],
        key : HTTP_SERVER_ADDRESS_APIKEY, 
        path : META_PATH_COVID,
      })
    },
    [GET_THE_RUMOR]({ state, commit }) {
      actionCreatorCovid({state, commit},{
        stateUrl: THE_RUMOR, 
        mutation: SET_THE_RUMOR,
        url : HTTP_SERVER_ADDRESS_COVID_1, 
        type : API_TYPES_COVID[THE_RUMOR], 
        result : API_RESULTS_COVID[THE_RUMOR],
        key : HTTP_SERVER_ADDRESS_APIKEY, 
        path : META_PATH_COVID,
      })
    },
    [GET_THE_TREND]({ state, commit }) {
      actionCreatorCovid({state, commit},{
        stateUrl: THE_TREND, 
        mutation: SET_THE_TREND,
        url : HTTP_SERVER_ADDRESS_COVID_2, 
        type : API_TYPES_COVID[THE_TREND], 
        result : API_RESULTS_COVID[THE_TREND],
      })
    },
  },
}