import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
 
import login from "../components/login.vue"
import Menu_Admin from "../components/Menu_Admin.vue"
import ServiceTable from "../components/ServiceTable.vue"
import AccssTable from '../components/AccssTable.vue'
import Server from '../components/Server.vue'
import Client from '../components/client/Client.vue'
import Purchased from "../components/client/Purchased.vue";
import FaqTable from "../components/FaqTable.vue"
import SWTable from "../components/SWTable.vue"
import AddUserForm from '../components/AddUserForm.vue'
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
        name:"client",
        component: Client,
         children:[
            {
                path:"purchased",
                component:Purchased
            }
         ]
    },
    {
        path: '/admin',
        meta:{
            title:"管理员"
        } ,
        //name: "Admin",
         beforeEnter:function   (to, from, next)   {
            console.log("beforeEnter-Admin ")
            let router_path = to.path
            console.log(router_path) 
             console.log(from.path)
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
                 }, beforeEnter: (to, from, next) => {
                     console.log("beforeEnter-ServiceTable ")
                     next();

                 },
                 
                component: ServiceTable
           }, {
                path: 'AccssTable',
                name: "AccssTable",
                meta: {
                    title: "管理员"
                   
                }, beforeEnter: (to, from, next) => {
                    console.log("beforeEnter-AccssTable ")
                    next();

                },

                component: AccssTable
            } ,{
                path: 'FaqTable',
                name: "FaqTable",
                meta: {
                    title: "管理员"
                },

                component: FaqTable
            }, {
                path: 'SWTable',
                name: "SWTable",
                meta: {
                    title: "管理员"
                },

                component: SWTable
            }, {
                path: 'AddUserForm',
                name: "AddUserForm",
                meta: {
                    title: "管理员"
                },

                component: AddUserForm
            }, {
               path: '',
               redirect: 'ServiceTable',
           }
         ]

    } , 
    {
        path: '',  //默认值
        redirect: '/login',
    }, 
    {
        path: '/login', //默认值
        meta: {
            title: "登录"
        },
        component: login,
    }  
]

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