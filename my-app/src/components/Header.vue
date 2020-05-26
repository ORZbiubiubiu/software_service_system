
<template>
  <div class="header_top">
            <h1 id="title">
                软件售后服务系统
            </h1>
            
            <div id="userHead">

                <div class="el-icon-s-custom" id="head_icon"></div>
                <div id="userName">{{username}}</div>
                <span id="logout">退出</span>

 
            </div>
    </div>
</template>

<script>
 
export default {
    data:() =>{
        return {
             username:""
        }
        
    } ,
  name: 'myheader',
  mounted:()=>{
         console.log( "mounted ");
        
      this.username= this.$router.query.name;
      console.log( this.$router.query.name+"mounted ");
  },
  beforeUpdate:()=>{
 console.log( "beforeUpdate ");
  this.username=sessionStorage.getItem("name");
      console.log(sessionStorage.getItem("name")+"beforeUpdate");
  },

methods: {
    
}
  
}
</script>

 
<style scoped>
 
 .header_top{
  width: 100%;
    height: 83px;
    position: relative;
    top:   -50px;
    background-color: rgba(39, 110, 81, 1);
 }
 #title{
 float: left;
    margin-left: 50px;
    color: #fff;
 }
 
 #userHead {
    float: right;
    
    margin-top:  30px;
    height: 60px;
    color: #fff;
}
#userName {
    display: inline;
     
}

#logout {
    /*float: right;*/
    display: inline;
}

#logout:hover {
    color: #ffd04b;
    cursor: pointer;
}
</style>
