
<template>
  <div  >
    
   <el-form     label-width="80px" id="loginform">
            <el-form-item label="">
                <el-input v-model="userName" placeholder="请输入用户名" maxlength="18"></el-input>
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
                        if (this.message=="") {
                            
                            // location.href = "administrator.html?" + "username=" + this.userName;
                            var pwd = this.passWord;
                            // pwd = hex_md5(pwd);
                            // pwd = hex_md5(pwd);
                            console.log("51654664545");
                            var tmp = JSON.stringify({
                                "name": this.userName,
                                "pwd": pwd,

                            });


                            // 假设登录成功 用户为管理员
                           
                            sessionStorage.setItem("name", this.userName);
                            console.log( sessionStorage.getItem("name"))
                            
                            sessionStorage.setItem("token", "session");
                            sessionStorage.setItem("role", "admin");
                            //this.$router.push("/client");
                             this.$router.push(  {name:'ServiceTable',params:{name:this.userName}})
                           
                         
                             //this.$router.push('/admin') 
                             
                            //console.log(pwd)
                            
                        /*  $.ajax({
                                type: "POST",
                                contentType: "application/json; charset=utf-8",
                                dataType: "json",
                                url: "/login",
                                data: tmp,
                                success: function (response) {
                                    console.log(response);
                                    if (response.data != null || response.msg== null && response.data.msg == "success" ) {
                                        this.$message({
                                            message: "登录成功！！",
                                            type: 'success'
                                        });
                                    
                                        var type = response.data.role;
                                        session = response.data.session_id;
                                        //console.log(type + "    " + session)
                                        if (type=="1") {
                                            sessionStorage.setItem("name", this.userName);
                                            sessionStorage.setItem("token", session);
                                            window.location.href = "client";
                                        } else if (type =="2") {
                                            sessionStorage.setItem("name", this.userName);
                                            sessionStorage.setItem("token", session);
                                            window.location.href = "server";
                                        } else if (type == "3"){
                                            sessionStorage.setItem("name", this.userName);
                                            sessionStorage.setItem("token", session);
                                            window.location.href = "admin";
                                        }

                                    } else {
                                        if (response.msg == "账号已冻结") {
                                            this.$message({
                                                message: "账号已冻结",
                                                type: 'error'
                                            });
                                             
                                        } else if (response.msg == "账户或者密码错误") {
                                            this.$message({
                                                message: "账户或密码错误",
                                                type: 'error'
                                            });
                                            this.message = "账户或密码错误！"
                                        }
                                        
                                    }
                                }
                            });   */

                        }
                        
                    }
                }
}
  
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
</style>
