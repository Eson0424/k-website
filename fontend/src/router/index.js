import Vue from "vue";
import VueRouter from 'vue-router';
Vue.use(VueRouter);
// 备份VueRouter中的push方法
let originPush = VueRouter.prototype.push;
// 重写VueRouter中的push方法
VueRouter.prototype.push = function(location, resolve, reject) {
    if (resolve && reject) {
      originPush.call(this, location, resolve, reject)
    } else {
      originPush.call(this, location, () => {}, () => {})
    }
  }
  // replace
let originReplace = VueRouter.prototype.push;
// 重写VueRouter中的push方法
VueRouter.prototype.replace = function(location, resolve, reject) {
    if (resolve && reject) {
      originReplace.call(this, location, resolve, reject)
    } else {
      originReplace.call(this, location, () => {}, () => {})
    }
  }
  // 引入route block
import homeRoutes from './home'
// 引入路由组件
import About from '@/views/about/About.vue'
import Login from '@/views/login/Login.vue'
import Projects from '@/views/projects/Projects.vue'
// 配置路由
export default new VueRouter({
  mode: 'history',
  routes: [
    ...homeRoutes,
    {
      path: '/',
      redirect: '/home', // 重定向
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        show: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        show: false
      }
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
      meta: {
        show: true
      }
    },
  ],
});