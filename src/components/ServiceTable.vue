<template>
<div>


        <el-dialog v-bind:title="service_dialog_vm.solution" :visible.sync="service_dialog_vm.dialogFormVisible">
                    <p>
                        <span> 软件售后服务编号:</span>
                        <span>{{service_dialog_vm.serviceId}}</span>
                    </p>
                    <p>
                        <span>当前状态:</span>
                        <span>{{service_dialog_vm.serviceState}}</span>
                    </p>
                    <p>
                        <span>申请人:</span>
                        <span>{{service_dialog_vm.Applicant}}</span>
                    </p>
                    <p>
                        <span>申请原因:</span>
                        <span>{{service_dialog_vm.Application_reason}}</span>
                    </p>
                    

                   
                    

                   

                    <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="commit">确 定</el-button>
                    </div>
                </el-dialog>
         <el-table :data="tableData" style="width: 100%">
                    <el-table-column label="软件售后服务编号" width="164">
                        <template slot-scope="scope">
                            <div slot="reference" class="name-wrapper">
                                <el-tag size="medium">{{ scope.row.serviceId }}</el-tag>
                            </div>

                        </template>
                    </el-table-column>
                    <el-table-column label="当前状态" width="164">
                        <template  >
                            <span>异常</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="申请人" width="164">
                        <template slot-scope="scope">

                            <div slot="reference" class="name-wrapper">
                                <el-tag size="medium">{{ scope.row.Applicants }}</el-tag>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="申请原因" width="164">
                        <template slot-scope="scope">
                            <span style="overflow: hidden">{{ scope.row.Application_reason }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="解决方式" width="164">
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
            service_dialog_vm:{
                msgid:"",
                serviceId:"",
                serviceState:"",
               
                Application_reason:"",
                Applicant:""
            },
              msgid: "",
            dialogFormVisible: false,
            serviceId: "1",
           
            serviceState: "1",
            Application_reason: "1",
            Applicant: "1",
            feedbackinf: "1",
            change_name: "",
            way1: true,
            way2: false,
            way3: false,
            tableData: [
                {
                mesid: "",
                "serviceId": "SDA1000",
                "serviceState": "正在处理",
                "Applicants": "东北爷们",
                "Application_reason": "韭菜卷大葱不好吃",
                solution: ""
            } ]
            }
    },
    methods: {

            solution(serviceId, serviceState, Applicants, Application_reason, solution, mesid) {
                 this.service_dialog_vm.msgid = mesid;
            console.log(serviceId+serviceState+Applicants+Application_reason+solution)
                if (solution == "") {
                    alert("请选择解决方式！");
                } else {
                this.service_dialog_vm.serviceId = serviceId;
                  this.service_dialog_vm.dialogFormVisible=true;
                  
  

                    


                }


            }
        }
}
</script>