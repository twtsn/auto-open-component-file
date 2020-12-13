import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    item: {name: ''}
  },
  mutations: {
    set_item(state, data){
      state.item = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
