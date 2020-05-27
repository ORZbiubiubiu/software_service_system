import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
 
import login from "../components/login.vue"
import Menu_Admin from "../components/Menu_Admin.vue"
import ServiceTable from "../components/ServiceTable.vue"
import Server from '../components/Server.vue'
import Client from '../components/Client.vue'
import myheader from '../components/Header.vue'
import   AccssTable  from "../components/AccssTable.vue";
const routes = [
    {
        path: '/server',
        meta: {
            title: "售后服务人员"
        },
        component: Server,
        children: [

        ]
    },
    {
         path: '/client',
        meta: {
                 title: "客户"
             },
        component: Client,
         children:[

         ]
    },
    {
        path: '/admin',
        meta:{
            title:"管理员"
        } ,
        //name: "Admin",
         beforeEnter: (to, from, next) => {
            
            next();

         },
         afterEach: (to, from) =>{

         } ,
        component: Menu_Admin,
         children:[
           {
                path: 'ServiceTable',
                name: "ServiceTable",
                 meta: {
                     title: "管理员"
                 },
                 
                component: ServiceTable
           }, {
                path: 'AccssTable',
                name: "AccssTable",
                meta: {
                    title: "管理员"
                },

                component: AccssTable
            }, {
               path: '',
               redirect: 'ServiceTable',
           }
         ]

    } , {
    path: '',  //默认值
   
    redirect: '/login',

}, {
    path: '/login', //默认值
    meta: {
        title: "登录"
    },
    component: login,

}, {
    path: '/header', 
    meta: {
        title: "头部"
    },
    component: myheader,
    beforeRouteEnter:(t,f,n)=>{
        console.log("头部")
    }

}]
const router = new VueRouter({
    routes, // (缩写) 相当于 routes: routes
    mode:"history"
})
router.beforeEach((to, from, next) => {
   // console.log(to)
    if (to.meta.title==null) {  //改网页标题
         document.title="登录"
    }else{
        document.title = to.meta.title;
    }
    
    next();
})

export default router