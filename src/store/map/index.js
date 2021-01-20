import { http } from '@server';

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

  },
}