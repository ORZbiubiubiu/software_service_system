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
         getMsgUrl: "/show_messages",
         getServiceUrl: "/search",
         sendMsgUrl: "send_server_message",
         updateUrl:"/update_state",
         msgItems:[],
         serviceItems:[],
         serverName:"hzq",
         sendName:"",
         justMessage:""
    },
    mounted:function(){
        this.getService();
    },
    methods: {
        getMsg(){
            axios.post(this.getMsgUrl, {
                getName:this.serverName
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
                    })
                    .then((response) => {

                    })
                    .catch(function (error) {
                        console.log(error);
                     });
        },
        update(){
            axios.post(this.updateUrl, {
                    servername:this.serverName,
                    serverstate:"已经完成",
                    sid:"aaa"
                })
                .then((response) => {
                    this.serviceItems = response.data.data.list ;
                })
                .catch(function (error) {
                    console.log(error);
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
