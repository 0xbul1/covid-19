import { HTTP_SERVER_ADDRESS_MAP_1, HTTP_SERVER_ADDRESS_MAP_2, } from '@/config';
import {
  CHINA_JSON, PROVINCE_JSON,
  SET_CHINA_JSON, SET_PROVINCE_JSON,
  GET_CHINA_JSON, GET_PROVINCE_JSON,
  API_RESULTS_MAP, META_PATH_MAP,
} from '../constants'
import { actionCreatorMap } from '../actionCreator'
export default {
  namespaced: true,
  state: {
    [CHINA_JSON]: undefined,
    [PROVINCE_JSON]: undefined,
  },
  mutations: {
    [SET_CHINA_JSON](state, payload) {
      state[CHINA_JSON] = payload;
    },
    [SET_PROVINCE_JSON](state, payload) {
      state[PROVINCE_JSON] = payload;
    },
  },
  actions: {
    [GET_CHINA_JSON]({ state, commit }) {
      actionCreatorMap({state, commit},{
        stateUrl: CHINA_JSON, 
        mutation: SET_CHINA_JSON,
        url : HTTP_SERVER_ADDRESS_MAP_1,
        result : API_RESULTS_MAP[CHINA_JSON],
      })
    },
    [GET_PROVINCE_JSON]({ state, commit }, {province}) {
      actionCreatorMap({state, commit},{
        stateUrl: PROVINCE_JSON, 
        mutation: SET_PROVINCE_JSON,
        url : HTTP_SERVER_ADDRESS_MAP_2 + province + META_PATH_MAP, 
        result : API_RESULTS_MAP[PROVINCE_JSON]
      })
    },
  },
}