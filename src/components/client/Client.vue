<template>
  <div id="content" class="clearfix">
    <Header></Header>
    <div id="menu">
            <div id="nav" class="clearfix">
                <el-col :span="24">
                    <el-menu default-active="0" class="el-menu-vertical-demo" @select="handleSelect"
                             background-color="#545c64" text-color="#fff" active-text-color="#dddddd">
                        <el-menu-item v-for="item in funcs" v-bind:index="item.index" :key="item.id">
                            <i class="el-icon-menu"></i>
                            <span slot="title">{{item.fncname}}</span>
                            
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </div>
    </div>
    <div id="main">
          <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./Header";


export default {
    components:{Header},
    data() {
        return {
             funcs: [
                  {
                    fncname: "购买过的产品",index:"0"
                  },
                  {
                    fncname: "已申请售后的产品", index: "1"
                  },
                  {
                    fncname: "申请售后", index: "2"
                  },
                  {
                    fncname: "发送消息", index:"3"
                  },
                  {
                    fncname: "我的消息", index: "4"
                  },
                  {
                    fncname: "软件更新信息" , index:"5"
                  }
                 ],
              orderData:[],
        }
        
    } ,
  name: 'client',
  mounted:function(){
    var username = sessionStorage.getItem("name");
    var token = sessionStorage.getItem("token");
    this.$store.commit("setUsername",username);
    this.$store.commit("setToken",token);
  },

methods: {
     
     handleSelect(key, keyPath) {
              console.log(key,keyPath);
                    if(key==0){
                      this.$router.push({path:'/client/purchased'})
                    }
                    if(key==1){
                      this.$router.push({path:'/client/service' })
                    }
                    if(key==2){
                      this.$router.push({path:'/client/apply' })
                    }
                    if(key==3){
                      this.$router.push({path:'/client/sendMsg' })
                    }
                    if(key==4){
                      this.$router.push({path:'/client/receiveMsg' })
                    }
                    if(key==5){
                      this.$router.push({path:'/client/updateInfo' })
                    }
                    
        }
}
  
}
</script>

 
<style scoped>
#content{
  width: 100%;
  height: 100%;
}
#menu{
    float:left;
    height: 90%;
    width:20%;
    margin: 0;
    background-color: #545c64;
}
#nav{
    float:left;
    width: 300px;
    height:90%;
    margin-top: 50px;
    margin-left: 50px;
}
#main{
    float: right;
    width: 80%;
    height: 90%;     
    margin: 0;
}


</style>
