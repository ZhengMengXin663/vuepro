import Vue from 'vue'
import App from './App.vue'
import router from './router/'
// Vue.component('Split',Split)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
