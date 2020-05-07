import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  count: 1024
}
const mutations = {
  stateAdd (state) {
    state.count++
    console.log(state)

    console.log('state已经执行加一')
  },
  stateDrc (state) {
    state.count--
    console.log('state已经执行加一')
  },
  stateDtow (state, num) {
    state.count = state.count - num
    console.log('state已经执行减二操作')
  }
}
const actions = {
  timeout (context, num) {
    console.log(num)

    context.commit('stateDtow', num)
    console.log('延迟已经执行')
  }
}
const getters = {
  state (e) {
    console.log('getters已经被调用', e)
    return e.count + 1024
  }
}
export default new Vuex.Store({ state, mutations, actions, getters })
