import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex);
// // state: 仓库存储数据的地方
// const state = {
//   count: 1,
// }

// // mutations: 修改state的唯一手段
// const mutations = {
//   ADD(state) {
//     this.state.count++;
//   }
// }

// // actions: 处理action，可以书写自己的业务逻辑，可以处理异步
// const actions = {
//   // 这里可以书写业务逻辑 但是不能修改state
//   add({ commit }) {
//     commit('ADD')
//   }
// }

// // getters: 理解为计算属性，用于简化仓库数据，让组件获取仓库数据更加方便
// const getters = {}

// // 对外暴露store类的实例
// export default new Vuex.Store({
//   state,
//   mutations,
//   actions,
//   getters
// });

// vuex模块式开发
// 引入每一个模块的小仓库
import home from "./home/home";
import about from "./about/about";

export default new Vuex.Store({
  // 
  modules: {
    home,
    about,
  }
})