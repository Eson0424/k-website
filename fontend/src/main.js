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

// 测试获取数据
import { reqCategoryList } from '@/api'
reqCategoryList();

// 引入仓库
import store from '@/store'

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  // 注册路由
  router,
  // 注册仓库： 组件实例的身上会多一个$store属性
  store
}).$mount('#app')