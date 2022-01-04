// 配置路由
// 引入vue
import Vue from "vue";
// 引入插件
import VueRouter from 'vue-router';
// 使用插件
Vue.use(VueRouter);
// 引入路由组件
import Home from '@/views/home/Home.vue';
import About from '@/views/about/About.vue'
import Login from '@/views/login/Login.vue'
import Register from '@/views/register/Register.vue'
// 配置对象
export default new VueRouter({
  // 具体配置
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
  ],
});