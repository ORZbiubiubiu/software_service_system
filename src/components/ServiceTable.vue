<template>
<div class="function">


        <el-dialog v-bind:title=" dia_title" :visible.sync="dialogFormVisible">
                    <p>
                        <span> 软件售后服务编号:</span>
                        <span>{{ serviceId}}</span>
                    </p>
                    <p>
                        <span>当前状态:</span>
                        <span>{{ serviceState}}</span>
                    </p>
                    <p>
                        <span>申请人:</span>
                        <span>{{ Applicant}}</span>
                    </p>
                    <p>
                        <span>申请原因:</span>
                        <span>{{ Application_reason}}</span>
                    </p>
                    <p>
                        <span>请选择更换人员的系统名称：</span>
                        <select name="" id=""   v-model="change_name" placeholder="请选择">
                            <option   v-for="item in serverlist" :key="item.name" :label="item.name"
                                :value="item.name"></option>
                        </select>
                    </p>
                     

                    <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="commit">确 定</el-button>
                    </div>
        </el-dialog>
         <el-table :data="tableData" style="width: 100%">
                    <el-table-column label="软件售后服务编号" width="180">
                        <template slot-scope="scope">
                            <div slot="reference" class="name-wrapper">
                                <el-tag size="medium">{{ scope.row.serviceId }}</el-tag>
                            </div>

                        </template>
                    </el-table-column>
                    <el-table-column label="当前状态" width="180">
                        <template  >
                            <span>异常</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="申请人" width="180">
                        <template slot-scope="scope">

                            <div slot="reference" class="name-wrapper">
                                <el-tag size="medium">{{ scope.row.Applicants }}</el-tag>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="申请原因" width="180">
                        <template slot-scope="scope">
                            <span style="overflow: hidden">{{ scope.row.Application_reason }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="解决方式" width="180">
                        <template slot-scope="scope">
                            <select name="" width="180" v-model="scope.row.solution">
                                <option value="" selected:disabled style="display:none">请选择</option>

                                <option value="换人">换人</option>


                            </select>
                            <el-button size="mini"
                                       @click="solution( scope.row.serviceId,scope.row.serviceState, scope.row.Applicants, scope.row.Application_reason,scope.row.solution,scope.row.mesid)">
                                提交 </el-button>
                        </template>

                    </el-table-column>
                </el-table>
                 <div class="paging" id="service_page">
                    <el-pagination background layout="prev, pager, next" v-bind:total="total"
                        v-bind:current-page="current_page" v-bind:page-size="page_size"
                        @current-change="handleCurrentChange"  >
                    </el-pagination>
                </div>
</div>
</template>
<script>
export default {
  name: 'ServiceTable',
  props: {
    msg: String
  } ,
    data:function () {  

      return {
            //每页显示 11 个
          current_page:1,
          page_size:11,
          total:34,
          //

          //
          serverlist:[{
              name:"name1"
          },{
              name:"name2"
          }],
            dialogFormVisible: false,
            msgid: "",
            serviceId: "1",
            
            serviceState: "1",
            Application_reason: "1",
            Applicant: "1",
           
            change_name: "",
           dia_title: "",
            tableData: [
                {
                    mesid: "",
                    "serviceId": "SDA1000",
                    "serviceState": "正在处理",
                    "Applicants": "东北爷们",
                    "Application_reason": "韭菜卷大葱不好吃",
                    solution: ""
                } ,{
                    mesid: "",
                    "serviceId": "SDA1000",
                    "serviceState": "正在处理",
                    "Applicants": "东北爷们",
                    "Application_reason": "韭菜卷大葱不好吃",
                    solution: ""
                }  
            ]
            }
    },
    methods: {
            handleCurrentChange:function (index) {  
                //
            },  
            solution(serviceId, serviceState, Applicant, Application_reason, solution, mesid) {
               
            //console.log(serviceId+serviceState+Applicants+Application_reason+solution)
                if (solution == "") {
                    alert("请选择解决方式！");
                } else {
                this.msgid = mesid;
                this.serviceId=serviceId;
                this.Applicant=Applicant;
                this.Application_reason=Application_reason;
                this.serviceState=serviceState;
                this.dia_title=solution;
                //获取更换人员名单
                this.$axios.post("/admin/getReplaceName",).then(res=>{
                    
                })

                this.dialogFormVisible=true;

                }


            },
             commit: function () {

                var tmp = JSON.stringify({
                    msgid: this.msgid,
                    serverName: this.change_name,
                    serviceid: this.serviceId
                });
               /*  $.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    url: "/admin/huanren",
                    headers: {
                        "token": sessionStorage.getItem("token")
                    },
                    data: tmp,
                    success: function (response) {


                        if (response.data.message == "更新成功") {
                            this.$message({
                                message: "更换售后服务人员" +  change_name + "成功!",
                                type: 'success'
                            });
                            

                        } else {
                            this.$message.error("更换售后服务人员" +  change_name + "失败!");

                        }
                        
                        //service_error_page_getdata(service_page_vm.current_page);
                    }
                }); */


                this.dialogFormVisible = false;

            }

        }
}
</script>
<style scoped>
 .function{

     position: absolute;
     top: 130px;
     left: 600px;
     
 }
 #service_page{
     position: relative;
     left: 37%;
 }
</style>