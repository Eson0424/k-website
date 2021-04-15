import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import qs from 'qs'
import router from '@/route/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.qs = qs

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
