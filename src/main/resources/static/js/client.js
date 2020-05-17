// var username = "";
// var token = "";
// const uname = new Vue({
//     el: "#username",
//
//     data:{
//         uname:""
//     },
//     mounted:function(){
//         console.log(sessionStorage.getItem(name))
//         username = sessionStorage.getItem("name");
//         token = sessionStorage.getItem("token");
//         console.log(username + token);
//         this.uname=username;
//     }
// })
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
         activeName: ''
    },
    mounted:function(){
        this.getOrder();
    },
    methods: {
        getOrder(){
             axios.post(this.getOrderUrl, {
                    serverName:this.userName
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
        applyforService(){
                axios.post(this.applyServiceUrl, {
                                    userName:this.userName,
                                    softwareName:this.form.softwareName,
                                    serviceKind:this.form.kind,
                                    serviceInfo:this.form.desc
                                })
                                .then((response) => {

                                    console.log(response.data.data.list);
                                    console.log(typeof(response.data.data.list));

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
                            })
                            .then((response) => {

                            })
                            .catch(function (error) {
                                console.log(error);
                             });
                },
        getMsg(){
                     axios.post(this.getMsgUrl, {
                         getName:this.userName
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
                         })
                         .then((response) => {
                             this.serviceData = response.data.data.list ;

                         })
                         .catch(function (error) {
                             console.log(error);
                         });
                 },
        isService(state){
            if (state == "yes"){
                return true;
            }
            else return false;
        },
        handleChange(data){
                    axios.post(this.getUpdateInfoUrl, {
                       softwareName:data
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
                  if (key == 4){
                    this.getMsg();
                  }
               },

    }
})