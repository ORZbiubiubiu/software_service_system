import Vue from 'vue'
import './plugins/axios'


import './plugins/element.js'
import router from './router/router_index.js'
import App from './App'
import store from './store'




import Menu_Admin from './components/Menu_Admin.vue'
import login  from './components/login.vue'
import myheader from './components/Header.vue'


Vue.config.productionTip = false


new Vue({
    router: router,
    store,
    render: h => h(App)
}).$mount('#app')


Vue.directive('statistic', {
    bind: function (el, binding) {
      var s = JSON.stringify
      console.log("in log:")
        el.addEventListener('click', ()=>{

            console.log(s(binding.value))
            console.log(s(binding.expression))
        })
    }
  })

 
Vue.prototype.log = function (url,ip,token){//log是函数名,对访问页面进行统计
    console.log(url + "    " +ip + "    "+token);
    this.$axios.post("/burypoint", {
        url:url,
        ip:ip,
        token:token,
        },{
             headers:{
                       'token':token
             },
             withCredentials : true
        })
        .then((response) => {
            console.log("ip为"+ip+"的用户访问了一次"+url+"页面");
        })
        .catch(function (error) {
            console.log(error);
        });
  }