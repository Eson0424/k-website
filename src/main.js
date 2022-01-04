import Vue from 'vue'
import App from './App.vue'
import tools from './utils/tools/tools'
import '@/assets/css/reset.css'
// 引入路由
import router from '@/router'
Vue.prototype.tools = tools
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  // 注册路由
  router,
}).$mount('#app')