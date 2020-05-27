import Vue from 'vue'
import './plugins/axios'


import './plugins/element.js'
import axios from 'axios'
import router from './router/router_index.js'
import App from './App'

import Menu_Admin from './components/Menu_Admin.vue'
import login  from './components/login.vue'
import myheader from './components/Header.vue'
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
 
new Vue({
    router: router,
    render: h => h(App)
  
}).$mount('#app')
 

