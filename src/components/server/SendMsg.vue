<template>
            <div id="sendMsg" >
                <el-form ref="sendform" :rules="sendMsgRules" :model="msg" label-width="80px">
                    <el-form-item label="收件人" prop="receiver">
                        <el-autocomplete
                                v-model="msg.receiver"
                                :fetch-suggestions="querySearchAsync"
                                placeholder="请选择收件人"
                                @select="receiverSelect"
                        ></el-autocomplete>
                    </el-form-item>
                    <el-form-item label="内容" prop="msg">
                        <el-input type="textarea" v-model="msg.msg"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button id="btn-commit" type="primary" @click="sendMsg">提交</el-button>
                        <el-button id="btn-reset" @click="resetSendForm">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
</template>

<script>
var adress = [];
var validateReceiver = (rule, value, callback) => {
        var flag = false;
        if (!value) {
          return callback(new Error('收件人不能为空'));
        }
        adress.map((item) =>{
            if (item.value==value){
                flag=true;
            }
        })
        if(!flag){
            return callback(new Error("您只能给申请维护的客户发信息"))
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

export default {
    name:"server-sendmsg",
    data(){
        return{
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
            getName:"",
            justMessage:""
        }
    },
    mounted:function(){
        var ip = localStorage.getItem("ip")
        var url = this.$route.path;
        var token = this.token;
        this.log(url,ip,token);
        adress = this.receivers;
    },
    computed:{
        username(){
            return this.$store.state.username
        },
        token(){
            return this.$store.state.token
        },
        receivers(){
            return this.$store.state.receivers
        }
    },
    methods:{
        sendMsg(){
                     var date = new Date();
                     var year=date.getFullYear(); //获取当前年份
                     var mon=date.getMonth()+1; //获取当前月份
                     var day=date.getDate(); //获取当前日
                     var now = year + "-" + mon + "-" +day;

                     this.getName=this.escape(this.msg.receiver);
                     this.justMessage=this.escape(this.msg.msg);

                        this.$axios.post("/server/send_server_message", {
                            getName:this.getName,
                            sendName:this.username,
                            justMessage:this.justMessage,
                            messageDate:now
                            },{
                                headers:{
                                           'token':this.token
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
        resetSendForm() {
                this.msg.receiver='';
                this.msg.msg='';
        },
        escape(str){
                var pattern = new RegExp("[`~@#$^&*()=|{}':;'\\[\\].<>/~@#￥……&*（）——|{}【】‘”“']");
                var rs='';
                for (var i =0;i < str.length;i++){
                    rs=rs+str.substr(i,1).replace(pattern,'');
                }
                return rs;
        },
        querySearchAsync(queryString, cb) {
            var receiver = this.receivers;
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
        }
    }
}
</script>
    
<style>
#sendMsg{
    width:500px;
    position:relative;
    top:200px;
    left:500px;
    }
#btn-commit{
    margin-left: 50px;
}

#btn-reset{
    margin-left: 50px;
}
</style>