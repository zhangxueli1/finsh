
import Vue from 'vue'
import app from './app'
import router from './router'
import store from './store'
import './mock/mockServer'


new Vue({
  el: '#app',
  router,
  store,
  render:h => h(app)
})
