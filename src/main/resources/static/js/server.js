var servername;

const name = new Vue({
    el: '#username',
    data:{
        servername:''
    },
    mounted:function(){
        servername = sessionStorage.getItem("name");
        this.servername = sessionStorage.getItem("name");
    }
});

const logout = new Vue({
    el: '#logout',
    data:{
        url:'/logout',
        token:sessionStorage.getItem("token")
    },
    methods:{
        logout(){

            axios.post(this.url,{
                token:this.token
            }).then( (response)=>{

                window.location.href = "/login";
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
})




const server_func = new Vue({
    el: '.center',
    data:{
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
                ],
         msg: {
                receiver:'',
                msg: ''
              },
         flag : 0,
         getMsgUrl: "/server/show_messages",
         getServiceUrl: "/server/search",
         sendMsgUrl: "/server/send_server_message",
         updateUrl:"/server/update_state",
         msgItems:[],
         serviceItems:[],
         softwareName:'',
         serverName:sessionStorage.getItem("name"),
         userName:"",
         token :sessionStorage.getItem("token"),
         pagesize:7,
         currentPage:1
    },
    mounted:function(){
        this.getService();
    },
    methods: {
        getMsg(){
            axios.post(this.getMsgUrl, {
                getName:this.serverName,
            },{
                headers:{
                            'token':this.token
                },
                withCredentials : true
            })
                .then((response) => {
                    this.msgItems = response.data.data.list ;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        getService(){
             axios.post(this.getServiceUrl, {
                    servername:this.serverName
                },{
                         headers:{
                                     'token':sessionStorage.getItem('token')
                                 },
                         withCredentials : true
                })
                .then((response) => {
                    this.serviceItems = response.data.data.list ;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        sendMsg(){
             var date = new Date();
             var year=date.getFullYear(); //获取当前年份
             var mon=date.getMonth()+1; //获取当前月份
             var day=date.getDate(); //获取当前日
             var now = year + "-" + mon + "-" +day;
                axios.post(this.sendMsgUrl, {
                    getName:this.msg.receiver,
                    sendName:this.serverName,
                    justMessage:this.msg.msg,
                    messageDate:now
                    },{
                         headers:{
                                    'token':sessionStorage.getItem('token')
                                 },
                         withCredentials : true
                    })
                    .then((response) => {
                                if(response.data.data.message=="success"){
                                        this.$message({
                                             type: 'success',
                                             message: '发送成功'
                                        });
                                        this.msg.receiver ="";
                                        this.msg.msg = ""
                                    }else{
                                        this.$message({
                                             type: 'error',
                                             message: '发送失败，请稍后再试!'
                                        });
                                    }
                    })
                    .catch(function (error) {
                        console.log(error);
                     });
        },
        finish(sname,uname){
                this.softwareName=sname;
                this.userName=uname;
                this.$confirm('确定要修改该服务状态为完成吗?', '提示', {
                          confirmButtonText: '确定',
                          cancelButtonText: '取消',
                          type: 'warning'
                        }).then(() => {
                            axios.post(this.updateUrl, {
                                                userName:this.userName,
                                                servername:this.serverName,
                                                serverstate:"已完成",
                                                softwareName:this.softwareName
                                            },{
                                                    headers:{
                                                               'token':sessionStorage.getItem('token')
                                                    },
                                                    withCredentials : true
                                             })
                                            .then((response) => {
                                                 if(response.data.data.message == 'success'){
                                                     this.$message({
                                                           type: 'success',
                                                           message: '修改成功!'
                                                     });
                                                 }else{
                                                    this.$message({
                                                           type: 'error',
                                                           message: '修改失败，请稍后再试!'
                                                    });
                                                 }
                                            })
                                            .catch(function (error) {
                                                console.log(error);
                                            });
                        }).catch(() => {
                          this.$message({
                            type: 'info',
                            message: '修改请求已取消'
                          });
                        });

        },
        change(sname,uname){
             this.softwareName=sname;
             this.userName=uname;
             this.$confirm('确定提交换人申请吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
             }).then(() => {
                      axios.post(this.updateUrl, {
                            userName:this.userName,
                            servername:this.serverName,
                            serverstate:"异常",
                            softwareName:this.softwareName
                      }).then((response) => {
                            if(response.data.data.message == 'success'){
                                this.$message({
                                    type: 'success',
                                    message: '申请成功,请等待管理员审核!'
                                });
                            }else{
                                  this.$message({
                                    type: 'error',
                                    message: '申请失败，请稍后再试!'
                                  });
                            }
                      }).catch(function (error) {
                              console.log(error);
                         });

             }).catch(() => {
                  this.$message({
                        type: 'info',
                        message: '请求已取消'
                  });
             });
        },
        isServer(state){
                    if (state == "yes"){
                        return true;
                    }
                    else return false;
                },
        handleSelect(key, keyPath) {

                  console.log(key, keyPath);
                  key = Number(key);

                  this.flag = key;
                  if (key == 1) {
                    this.getMsg();
                  }
                  if (key == 0) {
                    this.getService();
                  }
               },

        handleCurrentChange: function(currentPage){
                        this.currentPage = currentPage;
                        console.log(this.currentPage)  //点击第几页
                },
    }
})
