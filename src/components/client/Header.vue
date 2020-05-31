
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
                     <el-link @click="logout" :underline="false">退出</el-link>
                </div>
            </div>
    </div>
</template>

<script>
 
export default {
    data:() =>{
        return {
             
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
    
    logout(){

            this.$axios.post("/logout",{
                token:this.token
            }).then( (response)=>{
                
                sessionStorage.clear();
                this.$store.commit("clearToken");
                this.$router.push("/login");
                this.$message({
                    type: 'success',
                    message: '退出成功!'
                });
                
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
    height: 100px;
    
}

.el-link.el-link--default {
    color: white;
    font-size: 16px;
}

#title{
    margin:0;
    left:3%;
    color: #fff;
}

#userinfo{
    right: 3%;
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

</style>
