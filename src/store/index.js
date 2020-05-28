import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderData:[],
    softwareNames:[],
    username:'cli_hhy',
    token:'',

  },
  mutations: {
    updateOrder(state,data){
      state.orderData=data;
    }
  },
  actions: {
  },
  modules: {
  }
})
