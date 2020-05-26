import Vue from 'vue'
 

import './plugins/element.js'
 
import router from './router/router_index.js'
 import App from './App'
import Menu_Admin from './components/Menu_Admin.vue'
import login  from './components/login.vue'
import myheader from './components/Header.vue'
Vue.config.productionTip = false
 
  new Vue({
        router: router,
    render: h => h(App)
  
}).$mount('#app')
 
/* new Vue({
   render: h => h(ServiceTable),
}).$mount('#holder') */
