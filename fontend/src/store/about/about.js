// about模块的数据
const state = {
  count: 1,
}
const mutations = {
  ADD() {
    this.state.about.count++
  },
  REDUCE() {
    this.state.about.count--
  }
}
const actions = {
  add({ commit }) {
    commit('ADD');
  },
  reduce({ commit }) {
    commit('REDUCE');
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}