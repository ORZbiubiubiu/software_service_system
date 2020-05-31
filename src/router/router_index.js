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
import Server_SendMsg from "../components/server/SendMsg";
import ReceiveMsg from "../components/client/ReceiveMsg";
import GetMsg from "../components/server/GetMsg";
import UpdateInfo from "../components/client/UpdateInfo";
import MyService from "../components/server/MyService";
import FAQ from "../components/client/Faq";
import Management from "../components/server/Management";

import AccssTable from '../components/AccssTable.vue'
import FaqTable from "../components/FaqTable.vue"
import SWTable from "../components/SWTable.vue"
import AddUserForm from '../components/AddUserForm.vue'
import Search from '../components/Search.vue'
const routes = [
    {
        path: '/server',
        name: 'server',
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
                name:"myService",
                component: MyService
            },
            {
                path:"getMsg",
                component: GetMsg
            },
            {
                path:"management",
                component: Management
            },
            {
                path:"sendMsg",
                component: Server_SendMsg
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
                component:Purchased,
                meta: {
                    title: "客户"
                },
            },
            {
                path:"",
                name:"purchased",
                 meta: {
                     title: "客户"
                 },
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
            },
            {
                path:"faq",
                component:FAQ
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
           
           if (sessionStorage.getItem("role") == "Admin") {
               next();  

           } else {
               alert("你没有权限访问改页面！，即将跳转到登录界面！");
               
              next({
                  name: 'Login'
              })
           }
            

         },
         afterEach: (to, from) =>{

         } ,
        component: Menu_Admin,
         children:[
           {
                path: 'ServiceTable',
                name: "ServiceTable",
                 meta: {
                     title: "管理员",
                    role: ["Admin"] //课访问改组件的角色
                 }, beforeEnter: (to, from, next) => {
                      if (to.meta.role.includes(sessionStorage.getItem("role"))) {
                         next();
                     } else {
                         alert("你没有权限访问改页面！");
                        next(false)
                     }
                    

                 },
                 
                component: ServiceTable
           }, {
                path: 'AccssTable',
                name: "AccssTable",
                meta: {
                    title: "管理员",
                     role: ["Admin"] //课访问改组件的角色
                   
                }, beforeEnter: function  (to, from, next)   {
                     if (to.meta.role.includes(sessionStorage.getItem("role"))) {
                       next();

                   } else {
                       alert("你没有权限访问改页面！");

                       next(false)
                   }

                },

                component: AccssTable
            } ,{
                path: 'FaqTable',
                name: "FaqTable",
                meta: {
                    title: "管理员",
                    role: ["Admin"] //课访问改组件的角色
                }, 
                 beforeEnter: (to, from, next) => {
                    if (to.meta.role.includes(sessionStorage.getItem("role"))) {
                        next();

                    } else {
                         alert("你没有权限访问改页面！");

                         next(false)
                    }

                },

                component: FaqTable
            }, {
                path: 'SWTable',
                name: "SWTable",
                meta: {
                    title: "管理员",
                    role:["Admin"] //课访问改组件的角色
                }, beforeEnter: (to, from, next) => {
                   
                    if (to.meta.role.includes(sessionStorage.getItem("role"))) {
                        next();

                    } else {
                        alert("你没有权限访问改页面！");

                        next(false)
                    }

                },

                component: SWTable
            }, {
                path: 'AddUserForm',
                name: "AddUserForm",
                meta: {
                    title: "管理员",
                     role: ["Admin"] //课访问改组件的角色
                }, beforeEnter: (to, from, next) => {
                     if (to.meta.role.includes(sessionStorage.getItem("role"))) {
                        next();

                    } else {
                        alert("你没有权限访问改页面！");

                        next(false)
                    }

                },

                component: AddUserForm
            },{
                path:"Search",
                name: "Search",
                meta: {
                      title: "管理员",
                      role: ["Admin"] //课访问改组件的角色
                }, beforeEnter: (to, from, next) => {
                    if (to.meta.role.includes(sessionStorage.getItem("role"))) {
                        next();

                    } else {
                        alert("你没有权限访问改页面！");

                        next(false)
                    }

                },
                component: Search
            }
            , {
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
        name:"Login",
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
    
    console.log("to.meta.title:" + to.meta.title);
    if (to.meta.title==null) {  //改网页标题
         document.title="登录"
    }else{
        document.title = to.meta.title;
       
        
    }
    
    next();
})

export default router