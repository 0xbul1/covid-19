import { dataHandler, http } from '@/server';
import { DEFAULT_STRING } from './constants'
export function actionCreatorCovid({state, commit},
  {
    stateUrl, 
    mutation, 
    url, 
    type, 
    result,
    key = DEFAULT_STRING, 
    path = DEFAULT_STRING,
  }) {
    if (state[stateUrl]) return;
    return http({
      url: url + type + path + key
    }).then(res => {
      commit(mutation, dataHandler(res, result));
    })
  }

export function actionCreatorMap({state, commit},{
  stateUrl,
  mutation,
  url,
  result,
}) {
  if (state[stateUrl]) return;
  return http({
    url: url
  }).then(res => {
    commit(mutation, dataHandler(res, result));
  })
}