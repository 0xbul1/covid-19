import {
  REAL_TIME,
  SET_REAL_TIME,
  API_TYPES,
  API_RESULTS,
  META_PATH
} from './constants'
import { dataHandler, http } from '@/server';
import { HTTP_SERVER_ADDRESS_1, HTTP_SERVER_ADDRESS_APIKEY } from '@/config';

export function actionCreator({state, commit},
  {
    stateUrl = REAL_TIME, 
    mutation = SET_REAL_TIME, 
    url = HTTP_SERVER_ADDRESS_1, 
    type = API_TYPES[REAL_TIME], 
    result = API_RESULTS[REAL_TIME],
    key = HTTP_SERVER_ADDRESS_APIKEY, 
    path = META_PATH,
  }) {
    if (state[stateUrl]) return;
    return http({
      url: url + type + path + key
    }).then(res => {
      commit(mutation, dataHandler(res, result));
    })
  }