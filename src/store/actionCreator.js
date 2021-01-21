import { dataHandler, http } from '@/server';

export function actionCreator({state, commit},
  {
    stateUrl, 
    mutation, 
    url, 
    type, 
    result,
    key = '', 
    path = '',
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