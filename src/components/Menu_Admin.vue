
<template>

  <div class="hello">
    
     <myheader>
         </myheader>
     <el-menu   default-active="0" class="el-menu-vertical-demo" @select="handleSelect" @open="handleOpen"
                    @close="handleClose" background-color="#88cccc" text-color="#666" active-text-color="#ffd04b"
                    id="el_funcmenu" style="">
                    <el-menu-item v-bind:index="item.index" :key="item.fncname" v-for="item in funcs">
                        <i class="el-icon-setting"></i>
                        <span slot="title">{{item.fncname}}</span>
                    </el-menu-item>


        </el-menu>
        <router-view></router-view>
         
  </div>
</template>

<script>
 import  myheader  from "./Header";
export default {
   
 
     components: {
    myheader} ,
     
    data:() =>{
        return {
            id:"",
            funcs: [{
                        fncname: "售后服务异常处理",
                        index: "0"
                    },
                    {
                        fncname: "权限设置",
                        index: "1"
                    },
                    {
                        fncname: "FAQ数据库管理",
                        index: "2"
                    },
                    {
                        fncname: "关于此软件",
                        index: "3"
                    }, {
                        fncname: "添加用户",
                        index: "4"
                    }
                ]
        }
        
    }  
      
        

    ,
  name: 'Menu_Admin',
    mounted:()=>{
            console.log( "Menu_Admin");
        
    },
methods: {
    handleSelect(key, keyPath) {
 
          this.$router.push('/admin/ServiceTable').catch(err=>{

        })  

         
        //menuSelect(Number(key));
    },
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
 }
</style>
