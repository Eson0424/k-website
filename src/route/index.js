import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/desktop/DefaultDesktop.vue'
import MenuIndex from '@/views/menu/MenuIndex.vue'
import WorksIndex from '@/views/works/WorksIndex.vue'
import ServiceIndex from '@/views/service/ServiceIndex.vue'
import BlogIndex from '@/views/blog/BlogIndex.vue'
import AboutIndex from '@/views/about/AboutIndex.vue'
import ContactIndex from '@/views/contact/ContactIndex.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:'/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/menu',
    name: 'Menu',
    component: MenuIndex
  },
  {
    path: '/works',
    name: 'Works',
    component: WorksIndex
  },
  {
    path: '/service',
    name: 'Service',
    component: ServiceIndex
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogIndex
  },
  {
    path: '/about',
    name: 'About',
    component: AboutIndex
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactIndex
  },
  {
	path: '/home',
	component: Home,
	// childern:[
	// 	{
	// 		path:'/home/tj',
	// 		component: () => import('../views/home/tj.vue')
	// 	},
	// 	{
	// 		path:'/home/gz',
	// 		component: () => import('../views/home/gz.vue')
	// 	},
	// 	{
	// 		path:'/home/jx',
	// 		component: () => import('../views/home/jx.vue')
	// 	}
	// ]定义动态路由
  },
//   {
// 	  path:'/home/:type',
// 	  component:Home
//   },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router