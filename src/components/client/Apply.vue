<template>
            <div id="apply-service">
                <div id="card">
                    <el-card class="box-card">
                        <span>亲爱的用户:</span>
                        <el-divider></el-divider>
                        <p>
                            &nbsp;&nbsp;&nbsp;十分感谢您使用我们的产品，但是感到抱歉的是您现在准备申请售后服务！我们将以最快的速度处理您即将提交的问题！
                            感谢您的信赖！
                        </p>
                    </el-card>
                </div>
                <div id="apply-form">
                    <el-form ref="applyform" :rules="applyServiceRules" :model="form" label-width="80px">
                        <el-form-item label="软件名称" prop="softwareName">
                            <el-autocomplete
                                    v-model="form.softwareName"
                                    :fetch-suggestions="querySearchAsyncSoftware"
                                    placeholder="请输入软件名称"
                                    @select="softwareNameSelect"
                            ></el-autocomplete>
                        </el-form-item>
                        <el-form-item label="问题类型">
                            <el-select v-model="form.kind" placeholder="请选择问题类型" >
                                <el-option label="登录异常" value="登录异常"></el-option>
                                <el-option label="界面无法正常显示" value="界面无法正常显示"></el-option>
                                <el-option label="界面信息显示有误" value="界面信息显示有误"></el-option>
                                <el-option label="其他" value="其他"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="问题描述" prop="desc">
                            <el-input type="textarea" v-model="form.desc"></el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-button id="btn-commit" type="primary" @click="applyforService">提交</el-button>
                            <el-button id="btn-reset" @click="resetApplyForm">重置</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
</template>

<script>
var softwarenames=[];
var validateSoftwareName = (rule, value, callback) => {
        var flag = false;
        if (!value) {
          return callback(new Error('软件名称不能为空'));
        }
        softwarenames.map((item) =>{
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
export default {
    name:"apply",
    data(){
        return{
            
            form: {
                   softwareName: '',
                   kind: '',
                   desc: ''
                 },
            applyServiceRules:{
                softwareName:[
                    {validator:validateSoftwareName,trigger: 'blur'}
                ],
                desc:[
                    {validator:validateDescription,trigger:'blur'}
                ]
         }
        }
    },
    mounted:function(){
        var ip = localStorage.getItem("ip")
        var url = this.$route.path;
        var token = this.token;
        this.log(url,ip,token);
        softwarenames=this.softwareNames;
        if (this.softwareName!=null){
            this.form.softwareName=this.softwareName;
            this.$store.commit("setSoftwareName",null);
        }
    },
    computed:{
        username(){
            return this.$store.state.username
        },
        token(){
            return this.$store.state.token
        },
        softwareNames(){
            return this.$store.state.softwareNames
        },
        softwareName(){
            return this.$store.state.softwareName
        }
        
    },
    methods:{
        applyforService(){
                this.$axios.post("/client/apply_service", {
                                    userName:this.username,
                                    softwareName:this.form.softwareName,
                                    serviceKind:this.form.kind,
                                    serviceInfo:this.escape(this.form.desc)
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
        resetApplyForm() {
                this.form.softwareName='';
                this.form.kind='';
                this.form.desc='';
        },
        escape(str){
                var pattern = new RegExp("[`~@#$^&*()=|{}':;'\\[\\].<>/~@#￥……&*（）——|{}【】‘”“']");
                var rs='';
                for (var i =0;i < str.length;i++){
                    rs=rs+str.substr(i,1).replace(pattern,'');
                }
                return rs;
        },
        querySearchAsyncSoftware(queryString, cb) {
            var softwareName = this.softwareNames;
            var results = queryString ? softwareName.filter(this.createStateFilter(queryString)) : softwareName;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
              cb(results);
            }, 3000 * Math.random());
        },
        softwareNameSelect(item) {
                console.log(item);
        },
        createStateFilter(queryString) {
                return (state) => {
                  return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
        },
    }
}
</script>

<style scoped>
#apply-form{
    width:600px;
    padding-left:400px;
}
#card{
    width:100%;
    height:300px;
    position:relative;
}

.box-card{
    width:700px;
    margin-top:50px;
    margin-left: 300px;
}

#btn-commit{
    margin-left: 50px;
}

#btn-reset{
    margin-left: 50px;
}
</style>