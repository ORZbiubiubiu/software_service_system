import Vue from 'vue'
import './plugins/axios'


import './plugins/element.js'
import axios from 'axios'
import router from './router/router_index.js'
import App from './App'
import store from './store'




Vue.config.productionTip = false
// Vue.prototype.$Axios = axios;

new Vue({
    router: router,
    store,
    render: h => h(App)
}).$mount('#app')
 

