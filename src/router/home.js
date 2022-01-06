// home 页面的路由管理
export default [{
  path: '/home',
  name: 'Home',
  component: resolve => require(['@/views/home/Home.vue'], resolve),
  meta: {
    show: true
  }
}]