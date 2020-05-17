var username;

const name = new Vue({
    el: '#username',
    data:{
        username:''
    },
    mounted:function(){
        username = sessionStorage.getItem("name");
        this.username = sessionStorage.getItem("name");
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
         flag : 0,
         getMsgUrl: "/server/show_messages",
         getServiceUrl: "/server/search",
         sendMsgUrl: "/serversend_server_message",
         updateUrl:"/server/update_state",
         msgItems:[],
         serviceItems:[],
         userName:sessionStorage.getItem("name"),
         token :sessionStorage.getItem("token"),
         sendName:"",
         justMessage:""
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
                    getName:this.sendName,
                    sendName:this.serverName,
                    justMessage:this.justMessage,
                    messageDate:now
                    },{
                         headers:{
                                    'token':sessionStorage.getItem('token')
                                 },
                         withCredentials : true
                    })
                    .then((response) => {

                    })
                    .catch(function (error) {
                        console.log(error);
                     });
        },
        finish(sname){
                this.$confirm('确定要修改该服务状态为完成吗?', '提示', {
                          confirmButtonText: '确定',
                          cancelButtonText: '取消',
                          type: 'warning'
                        }).then(() => {
                            axios.post(this.updateUrl, {
                                                servername:this.serverName,
                                                serverstate:"已完成",
                                                softwareName:sname
                                            },{
                                                    headers:{
                                                               'token':sessionStorage.getItem('token')
                                                    },
                                                    withCredentials : true
                                             })
                                            .then((response) => {
                                                 if(response.data.data.message == 'success') ;
                                                 this.$message({
                                                       type: 'success',
                                                       message: '修改成功!'
                                                 });
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
        change(sname){
             this.$confirm('确定提交换人申请吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
             }).then(() => {
                      axios.post(this.updateUrl, {
                            servername:this.serverName,
                            serverstate:"异常",
                            softwareName:sname
                      }).then((response) => {
                            if(response.data.data.message == 'success'){
                                this.$message({
                                    type: 'success',
                                    message: '申请成功,请等待管理员审核!'
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
        handleSelect(key, keyPath) {

                  console.log(key, keyPath);
                  key = Number(key);

                  this.flag = key;
                  if (key == 1) {
                    this.getMsg();
                  }
               },
        handleOpen(key, keyPath) {

              },
        handleClose(key, keyPath) {

              }
    }
})
