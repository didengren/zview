import Vue from 'vue'
import App from './App'
import router from './router'
import VueComponentsLib from '../src/index'
// import VueComponentsLib from '../lib/vueComponentsLib.min.js'
import '../lib/styl/vueComponentsLib.min.css'

Vue.use(VueComponentsLib)
Vue.config.productionTip = false
// 开启debug模式
Vue.config.debug = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
