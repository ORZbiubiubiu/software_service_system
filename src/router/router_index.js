import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
 
import login from "../components/login.vue"
import Menu_Admin from "../components/Menu_Admin.vue"
import ServiceTable from "../components/ServiceTable.vue"
import Server from '../components/server/Server.vue'
import Client from '../components/client/Client.vue'
import Purchased from "../components/client/Purchased.vue";
import Service from "../components/client/Service";
import Apply from "../components/client/Apply";
import SendMsg from "../components/client/SendMsg";
import ReceiveMsg from "../components/client/ReceiveMsg";
import UpdateInfo from "../components/client/UpdateInfo";
import MyService from "../components/server/MyService";
// import GetMsg from "../components/server/GetMsg";
import Management from "../components/server/Management";

const routes = [
    {
        path: '/server',
        meta: {
            title: "售后服务人员"
        },
        component: Server,
        children: [ 
            {
                path:"myService",
                component: MyService
            },
            {
                path:"",
                component: MyService
            },
            {
                path:"getMsg",
                component: ReceiveMsg
            },
            {
                path:"management",
                component: Management
            },
            {
                path:"sendMsg",
                component: SendMsg
            }
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
            },
            {
                path:"",
                component:Purchased
            },
            {
                path:"service",
                component:Service
            },
            {
                path:"apply",
                component:Apply
            },
            {
                path:"sendMsg",
                component:SendMsg
            },
            {
                path:"receiveMsg",
                component:ReceiveMsg
            },
            {
                path:"updateInfo",
                component:UpdateInfo
            }
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