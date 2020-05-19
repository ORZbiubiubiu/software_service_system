var servername;
var receivers=[];
var softwareNames=[];

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


var validateReceiver = (rule, value, callback) => {
        var flag = false;
        if (!value) {
          return callback(new Error('收件人不能为空'));
        }
        receivers.map((item) =>{
            if (item.value==value){
                flag=true;
            }
        })
        if(!flag){
            return callback(new Error("您只能给您的产品维护人员发信息"))
        }
      };

var validateMessage = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('内容不能为空'));
        }
      };

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
         sendMsgRules:{
                     receiver:[
                         {validator:validateReceiver,trigger: 'blur'}
                     ],
                     msg:[
                         {validator:validateMessage,trigger:'blur'}
                     ]
               },
         flag : 0,
         getMsgUrl: "/server/show_messages",
         getServiceUrl: "/server/search",
         sendMsgUrl: "/server/send_server_message",
         updateUrl:"/server/update_state",
         msgItems:[],
         serviceItems:[],
         softwareName:'',
         getName:'',
         justMessage:'',
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
                    console.log(response.data.data.list);
                    this.serviceItems = response.data.data.list ;
                    //动态获取收件人的输入建议
                    receivers=[];      //获取之前先清空
                    this.serviceItems.map(item => {
                         receivers.push({"value":item.userName});
                    })
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        resetSendForm() {
                        this.msg.receiver='';
                        this.msg.msg='';
                      },
        sendMsg(){
             var date = new Date();
             var year=date.getFullYear(); //获取当前年份
             var mon=date.getMonth()+1; //获取当前月份
             var day=date.getDate(); //获取当前日
             var now = year + "-" + mon + "-" +day;
             this.getName=this.escape(this.msg.receiver);
             this.justMessage=this.escape(this.msg.msg);
                axios.post(this.sendMsgUrl, {
                    getName:this.getName,
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
        escape(str){
                var pattern = new RegExp("[`~@#$^&*()=|{}':;'\\[\\].<>/~@#￥……&*（）——|{}【】‘”“']");
                var rs='';
                for (var i =0;i < str.length;i++){
                    rs=rs+str.substr(i,1).replace(pattern,'');
                }
                return rs;
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
                                                serverstate:"finish",
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
                            serverstate:"no",
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
        querySearchAsync(queryString, cb) {
            var receiver = receivers;
            var results = queryString ? receiver.filter(this.createStateFilter(queryString)) : receiver;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
              cb(results);
            }, 3000 * Math.random());
        },
        createStateFilter(queryString) {
                return (state) => {
                  return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
        },
        receiverSelect(item) {
                console.log(item);
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
