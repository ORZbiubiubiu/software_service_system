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
         form: {
                   sofwareName: '',
                   kind: '',
                   desc: ''
                 },
         msg: {
                receiver:'',
                msg: ''
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
                    console.log(msg);
                   this.orderData = data.filter(function(item,index){
                        for(var i = 0;i < msg.length;i++){

                            if (msg[i]==item.softwareName){
                                item.serviceState = 1;
                                return item;
                            }
                            else item.serviceState = 0;
                        }

                        return item;
                   })

                    console.log(this.orderData);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        toogleExpand(row) {
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
            //获取不到table
            let table = this.$refs.serviceTable;
            console.log(this.$refs.serviceTable);
            this.serviceData.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize).map((item) => {
              if ( sname == item.softwareName) {
                table.toggleRowExpansion(item, true);
              }
            });
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
                                    serviceInfo:this.form.desc
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
        sendMsg(){
                     var date = new Date();
                     var year=date.getFullYear(); //获取当前年份
                     var mon=date.getMonth()+1; //获取当前月份
                     var day=date.getDate(); //获取当前日
                     var now = year + "-" + mon + "-" +day;
                        axios.post(this.sendMsgUrl, {
                            getName:this.msg.receiver,
                            sendName:this.userName,
                            justMessage:this.msg.msg,
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

                             this.serviceData.map(item => {
                                   item.expansion = false
                                 });

                         })
                         .catch(function (error) {
                             console.log(error);
                         });
                 },
        isServer(state){
            if (state == "yes"){
                return true;
            }
            else return false;
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

                  this.index = key;
                  if (key == 0) {
                    this.getOrder();
                  }
                  if (key == 1) {
                    this.getService();
                  }
                  if (key == 1) {
                    this.form.softwareName="";
                  }
                  if (key == 4){
                    this.getMsg();
                  }
               },
        handleCurrentChange: function(currentPage){
                        this.currentPage = currentPage;
                        console.log(this.currentPage)  //点击第几页
                },
    }
})