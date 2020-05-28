
<template>
  <div class="header_top">
            <h1 id="title">
                软件售后服务系统
            </h1>
            
            <div id="userHead">

                <div class="el-icon-s-custom" id="head_icon"></div>
                <div id="userName"  > {{username}}</div>
                <span id="logout" @click="logout">退出</span>

 
            </div>
    </div>
</template>

<script>
 
    
    export default {
        data:() =>{
            return {
                username:"1" 
            }
            
        } ,
    name: 'myheader',
    mounted:function (){
        console.log("mounted -h")
        
             this.username=this.$route.params.name;
             console.log(this.$route.params.token);
            
                console.log(   sessionStorage.getItem("role"));
    } ,

    methods: {
        

        logout: function () {
            console.log(this.$route.params.name+"logout");
                
             this.$router.replace('/login').catch(err=>{

        })  
         /*    type: "GET", */
            // contentType: "application/json; charset=utf-8",
            // dataType: "json",
           /*  url: "/logout",
            headers: {
                "token": sessionStorage.getItem("token")
            }, */
            // data: JSON.stringify({
            //     username:name
            // }),
          /*   success: function (response) {
                location.href = "login"
            }
        }); */
          }
        
    }
    
    }
</script>

 
<style scoped>
 
 .header_top{
  width: 100%;
    height: 83px;
    position: relative;
    top:   0px;
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
     margin-right: 50px;
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
