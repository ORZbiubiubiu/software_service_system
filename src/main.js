import Vue from 'vue'
 

import './plugins/element.js'
 
import router from './router/router_index.js'
import App from './App'

Vue.config.productionTip = false
 
new Vue({
    router: router,
    render: h => h(App)
  
}).$mount('#app')
 

