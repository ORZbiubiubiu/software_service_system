var username;
var receivers=[];
var softwareNames=[];

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

const search_bar = new Vue({
    el: '#search',
    data:{
        searchInfo:"",
    },
    methods:{
        search(){
            sessionStorage.setItem("searchInfo",this.searchInfo);
            window.location.href = "/faq";
        }
    }
});


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
        if(value.length > 50){
          return callback(new Error('内容长度不能大于50'));
        }
      };


var validateSoftwareName = (rule, value, callback) => {
        var flag = false;
        if (!value) {
          return callback(new Error('软件名称不能为空'));
        }
        softwareNames.map((item) =>{
            if (item.value==value){
                flag=true;
            }
        })
        if(!flag){
            return callback(new Error("您只能为您购买过的产品申请售后服务"))
        }
      };

var validateDescription = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('问题描述不能为空'));
        }
        if(value.length > 50){
            return callback(new Error('内容长度不能大于50'));
        }
      };

const server_func = new Vue({
    el: '.center',
    data:{
         funcs: [
                  {
                    fncname: "购买过的产品",index:"0"
                  },
                  {
                    fncname: "已申请售后的产品", index: "1"
                  },
                  {
                    fncname: "申请售后", index: "2"
                  },
                  {
                    fncname: "发送消息", index:"3"
                  },
                  {
                    fncname: "我的消息", index: "4"
                  },
                  {
                    fncname: "软件更新信息" , index:"5"
                  }
                 ],
         orderData: [],
         serviceData:[],
         receiveMsg:[],
         updateData:[],
         getName:'',
         justMessage:'',
         form: {
                   softwareName: '',
                   kind: '',
                   desc: ''
                 },
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
         applyServiceRules:{
            softwareName:[
                {validator:validateSoftwareName,trigger: 'blur'}
            ],
            desc:[
                {validator:validateDescription,trigger:'blur'}
            ]
         },
         index : 0,
         getOrderUrl: "/client/user_show_software",
         applyServiceUrl: "/client/apply_service",
         sendMsgUrl: "/client/send_user_message",
         getMsgUrl: "/client/show_user_messages",
         getServiceUrl: "/client/user_search",
         getUpdateInfoUrl: "/client/show_update_info",
         userName:sessionStorage.getItem("name"),
         token :sessionStorage.getItem("token"),
         activeName: '',
         currentPage: 1,
         pagesize: 7
    },
    mounted:function(){
        this.getOrder();
    },
    methods: {
        getOrder(){
             axios.post(this.getOrderUrl, {
                    serverName:this.userName
                },{
                      headers:{
                          'token':this.token
                      },
                   withCredentials : true
                 })
                .then((response) => {
                    var data = response.data.data.list;
                    var msg = response.data.data.message.split('#');


                    softwareNames=[];
                   this.orderData = data.filter(function(item,index){
                        for(var i = 0;i < msg.length;i++){

                            if (msg[i]==item.softwareName){
                                item.serviceState = 1;
                                return item;
                            }
                            else {
                                item.serviceState = 0;
                            }
                        }

                        return item;
                   })

                    for(var i=0 ;i<this.orderData.length;i++){
                        console.log(this.orderData[i].serviceState==0);
                        if(this.orderData[i].serviceState==0){
                             softwareNames.push({"value":this.orderData[i].softwareName});//动态获取没有申请售后的软件名称
                        }
                    }

                    console.log(softwareNames);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        toggleExpand(row) {
           let table = this.$refs.serviceTable;
           console.log(this.$refs.serviceTable);
           this.serviceData.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize).map((item) => {
             if (row.id != item.id) {
               table.toggleRowExpansion(item, false)
               item.expansion=false;
             }
             else{
                item.expansion = !item.expansion;
             }
           })
           table.toggleRowExpansion(row);

        },
        viewDetail(sname){
            this.getService();
            this.index = 1;
            detail(sname);
        },

        apply(sname){
            this.index = 2;
            this.form.softwareName = sname;
        },
        applyforService(){
                axios.post(this.applyServiceUrl, {
                                    userName:this.userName,
                                    softwareName:this.form.softwareName,
                                    serviceKind:this.form.kind,
                                    serviceInfo:this.escape(this.form.desc)
                                },{
                                      headers:{
                                                'token':sessionStorage.getItem('token')
                                              },
                                      withCredentials : true
                                })
                                .then((response) => {

                                    console.log(response.data.data.message);
                                    if(response.data.data.message=="success"){
                                        this.$message({
                                             type: 'success',
                                             message: '申请成功,请耐心等待维护!'
                                        });
                                        this.form.softwareName = "";
                                        this.form.desc = "";
                                        this.form.kind = "";

                                    }else{
                                        this.$message({
                                             type: 'error',
                                             message: '服务器发生异常，请稍后再试!'
                                        });
                                    }
                                })
                                .catch(function (error) {
                                    console.log(error);
                                });
        },
        resetSendForm() {
                this.msg.receiver='';
                this.msg.msg='';
              },
        resetApplyForm() {
                this.form.softwareName='';
                this.form.kind='';
                this.form.desc='';
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
                            sendName:this.userName,
                            justMessage:this.justMessage,
                            messageDate:now
                            },{
                                headers:{
                                           'token':sessionStorage.getItem('token')
                                        },
                                withCredentials : true
                            })
                            .then((response) => {
                                    console.log(response.data.data.message);
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
        getMsg(){
                     axios.post(this.getMsgUrl, {
                         getName:this.userName
                         },{
                                headers:{
                                           'token':sessionStorage.getItem('token')
                                        },
                                withCredentials : true
                         })
                         .then((response) => {
                             this.receiveMsg = response.data.data.list ;
                         })
                         .catch(function (error) {
                             console.log(error);
                         });
                 },
        getService(){
                     axios.post(this.getServiceUrl, {
                         userName:this.userName
                         },{
                                headers:{
                                           'token':sessionStorage.getItem('token')
                                        },
                                withCredentials : true
                         })
                         .then((response) => {
                             this.serviceData = response.data.data.list ;
                             console.log(this.serviceData);
                             //动态获取收件人的输入建议
                             receivers=[];
                             this.serviceData.map(item => {
                                   item.expansion = false;
                                   receivers.push({"value":item.serverName});
                                 });
                             console.log(receivers);
                         })
                         .catch(function (error) {
                             console.log(error);
                         });
                 },
        serverState(state){
            if (state == "yes"){
                return 1;
            }
            if (state == "no"){
                return -1;
            }
            if (state == "finish"){
                return 0;
            }
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
        querySearchAsyncSoftware(queryString, cb) {
            var softwareName = softwareNames;
            var results = queryString ? softwareName.filter(this.createStateFilter(queryString)) : softwareName;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
              cb(results);
            }, 3000 * Math.random());
        },

        softwareNameSelect(item) {
                console.log(item);
        },
        handleChange(data){
                    axios.post(this.getUpdateInfoUrl, {
                       softwareName:data
                    },{
                           headers:{
                                       'token':sessionStorage.getItem('token')
                           },
                           withCredentials : true
                    })
                    .then((response) => {
                       this.updateData = response.data.data.list ;
                    })
                    .catch(function (error) {
                       console.log(error);
                     });
        },

        handleSelect(key, keyPath) {

                  console.log(key, keyPath);
                  key = Number(key);
                  this.currentPage=1;
                  this.index = key;
                  if (key == 0) {
                    this.getOrder();
                  }
                  if (key == 1 || key==3) {
                    this.getService();
                  }
                  if (key != 2) {
                    this.form.softwareName="";
                  }
                  if (key == 4){
                    this.getMsg();
                  }
               },
        purchasedHandleCurrentChange: function(currentPage){
               this.currentPage = currentPage;
                },
        serviceHandleCurrentChange: function(currentPage){
               this.currentPage = currentPage;
        },
        msgHandleCurrentChange: function(currentPage){
               this.currentPage = currentPage;
        },
        updateHandleCurrentChange: function(currentPage){
               this.currentPage = currentPage;
        },
    }
})