import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderData:[],
    softwareNames:[],
    username:'',
    token:'',

  },
  mutations: {
    updateOrder(state,data){
      state.orderData=data;
    },
    setUsername(state,username){
      state.username=username;
    },
    setToken(state,token){
      state.token=token;
    }
  },
  actions: {
  },
  modules: {
  }
})
