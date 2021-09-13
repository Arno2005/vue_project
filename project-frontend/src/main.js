import Vue from 'vue'
import App from './App'
import store from './components/store'
import router from './router'


require('./plugins')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
