import Vue from 'vue'
import './plugins/axios'


import './plugins/element.js'
import router from './router/router_index.js'
import App from './App'
import store from './store'




import Menu_Admin from './components/Menu_Admin.vue'
import login from './components/login.vue'
import myheader from './components/Header.vue'


Vue.config.productionTip = false


// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
    router: router,
    store,
    render: h => h(App)
}).$mount('#app')


Vue.directive('statistic', {
    bind: function (el, binding) {
      var s = JSON.stringify
      var ip = localStorage.getItem("ip");
      var token = sessionStorage.getItem("token");
      var api_name = s(binding.value).replace(/"/g,'');
      var role = sessionStorage.getItem("role");
      var user_type = role==="Client"?"客户":"维护人员";
        el.addEventListener('click', ()=>{
            console.log(s(binding.value))
            window.axios.post("/burypoint", {
                user_type:user_type,
                api_name:api_name,
                ip:ip,
                token:token,
                },{
                     headers:{
                               'token':token
                     },
                     withCredentials : true
                })
                .then((response) => {
                    console.log("ip为"+ip+"的用户访问了一次"+api_name+"页面");
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
    }
  })

 

