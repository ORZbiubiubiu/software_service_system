
<template>
  <div id="loginBox">
    <div id="title">
        软件售后服务系统
    </div>
   <el-form     label-width="80px" id="loginform">
            <el-form-item label="">
                <el-input v-model="userName" placeholder="请输入用户名" maxlength="180"></el-input>
            </el-form-item>
            <el-form-item label="">
                <el-input v-model="passWord" show-password placeholder="请输入密码" maxlength="18"></el-input>
            </el-form-item>
            <el-form-item label="">
                <el-select v-model="Character" placeholder="请选择用户登录类型" clearable>
                    <el-option v-for="item in type" :key="item.key" :label="item.key" :value="item.key">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                 <el-button type="primary" @click="onSubmit">登录</el-button>
            
            </el-form-item>
          
             
    </el-form>
    
  </div>
</template>

<script>
 import hex_md5 from '../plugins/md5.js'
export default {
     name: 'login',
    data:() =>{
        return {
             userName:"",
            passWord:"",
            Character:"",
            message:"",
            type:[
                {
                    key:"客户"
                },
                {
                    key: "售后服务人员"
                }, {
                    key: "系统管理员"
                }
            ]
        }
        
    } ,
 

    methods: {
        onSubmit: function () {


                                           /*  sessionStorage.setItem("name", this.userName);
                                            sessionStorage.setItem("token", "session");
                                            sessionStorage.setItem("role", "Admin");
                                            this.$router.push(  {name:'ServiceTable',params:{name:this.userName}}) */

           this.message ="";
                    
                    if (this.userName == "" || this.passWord == "") {

                        if (this.userName == "") {
                            
                             this.$message({
                                            message: "用户名不可为空",
                                            type: 'error'
                                        });
                           // this.message = "用户名不可为空";
                            return ;

                        } else {
                                    //

                        }
                        if (this.passWord == "") {
                             this.$message({
                                            message: "密码不可为空",
                                            type: 'error'
                                        });
                            //this.message = "密码不可为空";

                        } else {
                                //
                               
                        }
                    } else {
                        for (const iterator of this.userName) {
                            if (iterator==" ") {
                                this.message = "用户名不可包含 空格!";
                                 this.$message({
                                            message: "用户名不可包含 空格!",
                                            type: 'error'
                                        });
                                break;
                            }
                        }
                        for (const iterator of this.passWord) {
                            if (iterator == " ") {
                                 this.$message({
                                            message: "密码不可包含 空格!",
                                            type: 'error'
                                        });
                                this.message = "密码不可包含 空格!";
                                break;
                            }
                        }
                        if (this.Character=="") {
                              this.$message({
                                            message: "请选择用户登录类型!",
                                            type: 'error'
                                        });
                            this.message="请选择用户登录类型！"
                        }
                        if (escape(this.userName)!=this.userName) {
                             this.$message({
                                            message: "用户名不可包含敏感字符",
                                            type: 'error'
                                        });
                            this.message="用户名不可包含敏感字符"
                        }
                        if (this.message=="") {
                            
                            
                            var pwd = this.passWord;
                           
                              pwd = hex_md5(pwd);
                              pwd = hex_md5(pwd);

                                //console.log(pwd)
                                
                            // xss 处理
                           // 
                           
                             //
                            // console.log(pwd+"  :  xxx")
                            var tmp = {
                                "name": this.userName,
                                "pwd":pwd,

                            };

                         this.$axios.post("/login",tmp,{
                    headers:{
                         
                    }}).then(res=>{
                       // console.log(res)
                          if (res.data.msg == "success"&&res.data.data != null || res.data.msg== null    ) {
                                       
                                        
                                        var type = res.data.data.role;
                                        var session = res.data.data.session_id;
                                        
                                        if (type=="1") {
                                            sessionStorage.setItem("name", this.userName);
                                            sessionStorage.setItem("token", session);
                                            sessionStorage.setItem("role", "Client")
                                            this.$router.push(  {name:'purchased',params:{name:this.userName}})
                                        } else if (type =="2"||type =="4") {
                                            sessionStorage.setItem("name", this.userName);
                                            sessionStorage.setItem("token", session);
                                            sessionStorage.setItem("role", "Server")
                                            this.$router.push(  {name:'myService',params:{name:this.userName}})
                                        } else if (type == "3"){
                                            sessionStorage.setItem("name", this.userName);
                                            sessionStorage.setItem("token", session);
                                            sessionStorage.setItem("role", "Admin");
                                            this.$router.push(  {name:'ServiceTable',params:{name:this.userName}})
                                        }   
                                         this.$message({
                                            message: "登录成功！！",
                                            type: 'success'
                                        });

                                    } else {
                                        if (res.data.msg == "账号已冻结") {
                                            this.$message({
                                                message: "账号已冻结",
                                                type: 'error'
                                            });
                                             
                                        } else if (res.data.msg == "账户或者密码错误") {
                                            this.$message({
                                                message: "账户或密码错误",
                                                type: 'error'
                                            });
                                            this.message = "账户或密码错误！"
                                        }
                                        
                                    }
                    
                })  

                            

                        }
                        
                    }  
                }
}
  
}

function   escape(str){
                var pattern = new RegExp("[`~@#$^&*()=|{}':;'\\[\\].<>/~@#￥……&*（）——|{}【】‘”“']");
                var rs='';
                for (var i =0;i < str.length;i++){
                    rs=rs+str.substr(i,1).replace(pattern,'');
                }
                return rs;
}
</script>

 
<style scoped>
    

#loginform{
    position: relative;
    top:200px;
    width: 500px;
    left: 35%;
    color:#fff;
}
#loginBox{
    background-color:rgb(84, 92, 100); 
    height: 100%;
 
    font-family: "Helvetica Neue";
    color: #fff;
    font-size: 30px;
}
#title{
    position: relative;
      left: 42%;
      top: 180px;
      width: 500px;
}
</style>
