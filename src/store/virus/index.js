import { dataHandler, http } from '@/server';

export default {
  namespaced: true,
  state: {
    virusData: undefined,
  },
  mutations: {
    saveVirusData(state, virusData) {
      state.virusData = virusData;
    },
  },
  actions: {
    // 实时数据RealTime
    async fetchVirusRTData() {
      return http({
        url: 'http://api.tianapi.com/txapi/ncov/index?key=964dc226dd5b57e892e6199735b6c55f'
      }).then( res => {
        console.log(dataHandler(res, 'newslist'));
      })
    }
  },
}