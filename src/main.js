import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { globalErrorHandler } from '@/utils/error';
import './quasar'

Vue.config.productionTip = false
Vue.config.errorHandler = globalErrorHandler;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
