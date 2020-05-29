import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderData:[],
    softwareNames:[],
    softwareName:[],
    receivers:[],
    serviceData:[],
    username:'',
    token:'',
    serviceItems:[]

  },
  mutations: {
    setOrder(state,data){
      state.orderData=data;
    },
    setUsername(state,username){
      state.username=username;
    },
    setToken(state,token){
      state.token=token;
    },
    setServiceData(state,serviceData){
      state.serviceData=serviceData;
    },
    setSoftwareNames(state,names){
      state.softwareNames=names;
    },
    setReceivers(state,receivers){
      state.receivers=receivers;
    },
    setServiceItems(state,services){
      state.serviceItems=services;
    },
    setSoftwareName(state,sname){
      state.softwareName=sname;
    }
    
  },
  actions: {
  },
  modules: {
  }
})
