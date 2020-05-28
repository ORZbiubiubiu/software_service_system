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
import Header from "../client/Header";
export default {
    name:"server",
    components:{Header},
    data(){
        return{
            funcs: [
                  {
                    fncname: "我的售后",index:"0"
                  },
                  {
                    fncname: "售后提醒", index: "1"
                  },
                  {
                    fncname: "售后管理", index:"2"
                  },
                  {
                    fncname: "用户交互", index: "3"
                  },
                ]
        }
    },
    
methods: {
     
     handleSelect(key, keyPath) {
              console.log(key,keyPath);
                    if(key==0){
                      this.$router.push({path:'/server/myService'})
                    }
                    if(key==1){
                      this.$router.push({path:'/server/getMsg' })
                    }
                    if(key==2){
                      this.$router.push({path:'/server/management' })
                    }
                    if(key==3){
                      this.$router.push({path:'/server/sendMsg' })
                    }
        }
}
}
</script>

<style>
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