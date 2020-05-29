
<template>
  <div class="header">
            <h1 id="title" class="v-center" >
                软件售后服务系统
            </h1>
            
            <div id="userinfo" class="v-center">
                <div id="avatar">
                    <i class="el-icon-s-custom"></i>
                </div>
                <span id="username">
                        {{username}}
                    </span>
                <div id="logout">
                    <a href="" @click="logout" id="btn-logout" >退出</a>
                </div>
            </div>
    </div>
</template>

<script>
 
export default {
    data:() =>{
        return {
             searchInfo:""
        }
        
    } ,
    computed:{
        username(){
            return this.$store.state.username;
        },
        token(){
            return this.$store.state.token;
        }
    },
  name: 'myheader',

methods: {
    search(){
            sessionStorage.setItem("searchInfo",this.searchInfo);
            window.location.href = "/faq";
    },
    logout(){

            this.$axios.post("/logout",{
                token:this.token
            }).then( (response)=>{

                window.location.href = "/login";
            }).catch(function (error) {
                console.log(error);
            });
        }
}
  
}
</script>

 
<style scoped>
 
 .header {
     
    margin:0;
    position: relative;
    background-color: rgba(39, 110, 81, 1);
    height: 10%;
}

#title{
    margin:0;
    left:3%;
    color: #fff;
}

#search{
    left:40%;
    width: 550px;
}

#userinfo{
    right: 5%;
}

#username{
    color: white;
}

#avatar{
    display: inline-block;
    font-size: 40px;
    padding: 5px;
    color: white;
}

#logout{
    display: inline-block;
    margin-left: 20px;
}

#btn-logout{
    text-decoration: none;
    color: white;
}


</style>
