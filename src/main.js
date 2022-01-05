import Vue from 'vue'
import App from './App.vue'
// css reset
import '@/assets/css/reset.css'
// 引入vue awesome swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 使用vue awesome swiper插件
Vue.use(VueAwesomeSwiper);
// 引入路由
import router from '@/router'
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  // 注册路由
  router,
}).$mount('#app')