import Vue from 'vue'


import './plugins/element.js'
 import axios from 'axios'
import router from './router/router_index.js'
import App from './App'

import Menu_Admin from './components/Menu_Admin.vue'
import login  from './components/login.vue'
import myheader from './components/Header.vue'
import xss from  'xss'
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
<<<<<<< HEAD
 Vue.prototype.$xss = xss;
  new Vue({
        router: router,
=======
 
new Vue({
    router: router,
>>>>>>> b6f1746c5fc242175249167313c882e879b1d93a
    render: h => h(App)
  
}).$mount('#app')
 

