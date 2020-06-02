
<template>

<div id="adminarea">
  <myheader>
  </myheader>
  <div class="">
    
            
     <el-menu   :default-active="active" class="el-menu-vertical-demo"   @open="handleOpen" :router="router"
                    @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
                    id="el_funcmenu" style="">
                    <p></p>
            <el-menu-item v-bind:index="item.index" :key="item.fncname" v-for="item in funcs">
                <i class="el-icon-setting"></i>
                <span slot="title">{{item.fncname}}</span>
            </el-menu-item>


        </el-menu>
        
        <router-view></router-view>
         
  </div>
  </div>
</template>

<script>
 import  myheader  from "./Header";
export default {

     components: {myheader} ,
    data:() =>{
        return {
            router:true,
             active:"ServiceTable",
            funcs: [{
                        fncname: "售后服务异常处理",
                        index: "ServiceTable"
                    },
                    {
                        fncname: "权限设置",
                        index: "AccssTable"
                    },
                    {
                        fncname: "FAQ数据库管理",
                        index: "FaqTable"
                    },
                    {
                        fncname: "已上线软件",
                        index: "SWTable"
                    }, {
                        fncname: "添加用户",
                        index: "AddUserForm"
                    },{
                        fncname: "搜索",
                        index: "Search"
                    },{
                        fncname: "用户行为",
                        index: "UserAction"
                    }
                ]
        }
        
    }  
      
        

    ,
  name: 'Menu_Admin',
    mounted:function () {
            console.log( "Menu_Admin");
            let router_path = this.$route.path
            console.log("active"+this.active)  
             this.$router.push({path:'/admin/'+this.active }).catch(err=>{

            })      
        
    },
methods: {
   /*  handleSelect(key, keyPath) {
 
            //this.$router.push(  {name:'Admin',params:{name:this.userName}})
        
        if (key=="ServiceTable") {
            console.log("ServiceTable");
                this.$router.push({path:'/admin/ServiceTable' }).catch(err=>{

            })  
        }else if (key=="AccssTable") {
             console.log("AccssTable");
                 this.$router.push({path:'/admin/AccssTable' }).catch(err=>{

            })  
        }else if (key=="FaqTable") {
             this.$router.push({path:'/admin/FaqTable' }).catch(err=>{

            })  
        }else if (key=="SWTable") {
              this.$router.push({path:'/admin/SWTable' }).catch(err=>{

            })  
        }else if (key=="AddUserForm") {
             this.$router.push({path:'/admin/AddUserForm' }).catch(err=>{
        })
        }
         
        //menuSelect(Number(key));
    }, */
    handleOpen(key, keyPath) {
     /*      this.$router.push('./bar').catch(err=>{

        }) */

        //menuSelect(Number(key));
    },
    handleClose(key, keyPath) {
        //menuSelect(Number(key));
    }
}
  
}
</script>

 
<style scoped>
 #el_funcmenu{
     display: block;
     border: 0;
      width:300px;
      top:0px;
      border-right: 1px solid #ffffff;
}
#adminarea{
    background-color: rgb(84, 92, 100); 
    height: 100%;
}
</style>
