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
    <Main></Main>
  </div>
</template>

<script>
 import Header from "./Header";
 import Main from "./Main";
export default {
    components:{Header,Main},
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
                 ]
        }
        
    } ,
  name: 'client',

methods: {
     handleSelect(key, keyPath) {

                    console.log(key, keyPath);
                    //   key = Number(key);
                    //   this.currentPage=1;
                    //   if (key == 0) {
                    //     this.getOrder();
                    //   }
                    //   if (key == 1 || key==3) {
                    //     this.getService();
                    //   }
                    //   if (key != 2) {
                    //     this.form.softwareName="";
                    //   }
                    //   if (key == 4){
                    //     this.getMsg();
                    //   }
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
    margin-top: 50px;
    margin-left: 50px;
}   
</style>
