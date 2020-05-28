
<template>
  <div class="function">
     <el-form label-width="140px" id="user_add_form">
                    <div id="addheight"></div>
                    <el-form-item label="用户名称">
                        <el-input v-model="username" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="用户密码">
                        <el-input v-model="password" show-password></el-input>
                    </el-form-item>
                    <el-form-item label="用户密码确认">
                        <el-input v-model="password_check" show-password></el-input>
                    </el-form-item>
                    <el-form-item label="用户类型">

                        <el-select v-model="usertype" placeholder="请选择" clearable>
                            <el-option v-for="item in usertypes" :key="item.type" :label="item.type" :value="item.type">
                            </el-option>
                        </el-select>

                    </el-form-item>
                    <el-form-item label="负责软件" v-if="usertype === '售后服务人员'"  v-loading="loading_SWLT"
                        element-loading-text="拼命加载中"
                        element-loading-spinner="el-icon-loading"
                        element-loading-background="rgba(0, 0, 0, 0.8)">
                        <el-select v-model="serverSoftware" placeholder="请选择" clearable>
                            <el-option v-for="item in list" :key="item.name" :label="item.name" :value="item.name">
                            </el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即添加</el-button>
                        <el-button @click="cancel">取消</el-button>
                    </el-form-item>
                    

                </el-form>

    
  </div>
</template>

<script>
  import hex_md5 from '../plugins/md5.js'
export default { 
    mounted:function () { 
        this.loading_SWLTtre;
        this.$axios.post("/admin/GetSoftWareList",{},{
                    headers:{
                        'token': sessionStorage.getItem("token")
                    }}).then(res=>{
                          console.log(res.data);
                     var list = res.data.data.list;
                     this.list=[];
                     for (let index = 0; index < list.length; index++) {
                          const element = list[index];
                         this.list.push({
                               name: element.softwareName,
                         })
                        
                        
                     }
                     this.loading_SWLT=false;
                    
                });

        


     },
    data:() =>{
       
        return {
            loading_SWLT:true,
            //

              username: "",
            password: "",
            password_check: "",
            message: "",
            usertype: "",
            list: [{
                name: 123

            }],
            serverSoftware: "",
            usertypes: [{
                type: "客户"
            }, {
                type: "售后服务人员"
            }]
        }
        
    } ,
  name: 'AddUserForm',

methods: {
     onSubmit: function () {
                // alert(this.username + this.password + this.password_check + this.usertype);
                this.message = "";
                if (this.username == "") {
                     this.$message({
                        message: '用户名不可为空',
                        type: 'warning'
                    });
                    this.message = "用户名不可为空";
                } else if (this.password == "") {
                     this.$message({
                        message: '密码不可为空',
                        type: 'warning'
                    });
                    this.message = "密码不可为空";
                } else if (this.password_check == "") {
                     this.$message({
                        message: '请确认密码！',
                        type: 'warning'
                    });
                    this.message = "请确认密码！";
                } else if (this.usertype == "") {
                    this.$message({
                        message: '请选择用户类型',
                        type: 'warning'
                    });
                    this.message = "请选择用户类型";
                } else if (this.serverSoftware == "" && this.usertype == "售后服务人员") {
                    this.$message({
                        message: '请选择负责软件',
                        type: 'warning'
                    });
                   this.message = "请选择负责软件";
                }

                for (const iterator of this.username) {
                    if (iterator == " ") {
                         this.$message({
                        message: '用户名称不可包含空格！',
                        type: 'warning'
                    });
                        this.message = "用户名称不可包含空格！";
                    }
                }
                if (this.password != this.password_check) {
                     this.$message({
                        message: '两次密码输入不一致！',
                        type: 'warning'
                    });
                    this.message = "两次密码输入不一致！";
                } else {
                    for (const iterator of this.password) {
                        if (iterator == " ") {
                             this.$message({
                                message: '密码不可包含空格',
                                type: 'warning'
                            });
                            this.message = "密码不可包含空格";
                        }
                    }
                }
                if (this.message == "") {
                    // console.log(this.username + this.password + this.usertype + this.serverSoftware)
                    var pwd = this.password;
                      pwd = hex_md5(pwd);
                    pwd = hex_md5(pwd);  
                    var tmp =  {
                        username: this.username,
                        password: pwd,
                        usertype: this.usertype,
                        software: this.serverSoftware
                    };
                        this.$axios.post("/admin/adduser",tmp,{
                    headers:{
                        'token': sessionStorage.getItem("token")
                    }}).then(res=>{
                          if (res.data.data.message == "success") {
                                this.$message({
                                    message: this.username + "  " + "添加成功!",
                                    type: 'success'
                                });
                                this.username = "";
                                this.password = "";
                                this.password_check = "";
                                this.message = "";
                            }else{
                                this.$message({
                                    message: this.username + "  " + "添加失败!",
                                    type: 'error'
                                });
                            }

                    
                });
                   
                }




            },
            cancel: function () {
               
                this.username = "";
                this.password = "";
                this.password_check = "";
                this.message = "";
                this.serverSoftware=""
                this.usertype="";

            }
}
  
}
</script>

 
<style scoped>
  .function{
padding-top: 70px;
     position: relative;
     top: -260px;
     left: 600px;
     width: 900px;
     background-color: #fff;
     padding-bottom: 50px;
     
 }
 #user_add_form{
     padding-right: 50px;
 }
</style>
