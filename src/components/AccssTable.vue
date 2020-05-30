
<template>
  <div  class="function">
    
     <div id="accessHead">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                        @select="handleSelect">
                        <el-menu-item index="1">售后服务人员</el-menu-item>
                        <el-menu-item index="2">客户</el-menu-item>
                    </el-menu>
                </div>
                <div id="access_dialog">
                    <el-dialog v-bind:title="dia_solution" :visible.sync="dialogFormVisible">

                        <p>
                            <span>用户账户:</span>
                            <span>{{userId}}</span>
                        </p>
                        <p>
                            <span>用户角色:</span>
                            <span>{{userRole}}</span>
                        </p>
                        <p>
                            <span>账号状态:</span>
                            <span>{{accountStatus}}</span>
                        </p>




                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="commit()">确 定</el-button>
                        </div>
                    </el-dialog>
                </div>
                <div id="access_setting_holder">
                    <el-table :data="tableData" style="width:100%"     v-loading="loading"
                        element-loading-text="拼命加载中"
                        element-loading-spinner="el-icon-loading"
                        element-loading-background="rgba(0, 0, 0, 0.8)">
                        <el-table-column label="用户账户" width="185">
                            <template slot-scope="scope">
                                <div slot="reference" class="name-wrapper">
                                    <el-tag size="medium">{{ scope.row.userId }}</el-tag>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column label="角色" width="255">
                            <template slot-scope="scope">


                                <div slot="reference" class="name-wrapper">
                                    <el-tag size="medium">{{ scope.row.userRole }}</el-tag>
                                </div>

                            </template>
                        </el-table-column>
                        <el-table-column label="账号状态" width="100">
                            <template slot-scope="scope">
                                <span>{{ scope.row.accountStatus }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="解决方式" width="295">
                            <template slot-scope="scope">
                                <select name="" width="164" v-model="scope.row.values"  >
                                    <option value="" selected:disabled style="display:none">请选择</option>
                                    <option value="冻结" v-if="current === '售后服务人员'">冻结</option>
                                     <option value="升级为高级服务人员" v-if=" Upgradeable(scope.row.userRole)">升级为高级服务人员</option>
                                     <option value="降级为普通服务人员" v-if=" Releasable(scope.row.userRole)">降级为普通服务人员</option>
                                    <option value="在职" v-if="current === '售后服务人员'">在职</option>
                                    <option value="正常" v-if="current === '客户'">正常</option>
                                    <option value="冻结" v-if="current === '客户'">冻结</option>


                                </select>
                                <el-button size="mini" id="accessBtn"
                                    @click="solution( scope.row.id,scope.row.userId ,scope.row.userRole, scope.row.accountStatus ,scope.row.values)">
                                    提交</el-button>
                            </template>

                        </el-table-column>

                    </el-table>
                </div>

                <div class="paging" id="access_page">
                    <el-pagination background layout="prev, pager, next" v-bind:total="total"
                        v-bind:current-page="current_page" v-bind:page-size="page_size"
                        @current-change="handleCurrentChange"  >
                    </el-pagination>
                </div>
    
  </div>
</template>

<script>
 
export default {
     mounted:function () {
                console.log("AT mounted")
    } ,
    created:function () { 
        console.log("AT created")
        access_setting_page_getdata(1,this);
        
     },
       computed: {
    // 计算属性的 getter
   
  },
    data:() =>{
        return {

            loading:true,
                //导航栏
            activeIndex: '1',
            currentIndx: '1 ',
            //分页器
             page_size: 10, //每頁条目数er
            total: 35, //总条目数
            current_page: 1 ,//当前页数，
            //dialog
            dialogFormVisible: false,
            id: "",
            changeState: "",
            userId: "",
            userRole: "",
            accountStatus: "",
            dia_solution: "",
            feedbackinf: "",
            way1: true,
            way2: false,
            way3: false,
            //table
             current: "售后服务人员",
             tableData:[
                 {
                id: "",
                "userId": "韭菜卷大葱7",
                "userRole": "userRole1",
                "accountStatus": "封禁中",
                values: ""
            }, {
                id: "",
                "userId": "韭菜卷大葱6",
                "userRole": "userRole1",
                "accountStatus": "冻结中",
                values: ""
            }, {
                id: "",
                "userId": "韭菜卷大葱5",
                "userRole": "userRole1",
                "accountStatus": "封禁中",
                values: ""
            }
             ]
        }
        
    } ,
  name: 'AccessTable',

methods: {
         Upgradeable: function (role ) {
        
            if (role=="普通售后") {
                return true
            }
            
        
       
      return false
    },
    Releasable:function (role ) {
       
            if (role=="高级售后") {
                return true
            }
            
       
       
      return false
    },
        commit: function () {
             console.log("commit");
            
            console.log(data)
                if (this.userRole == "客户") {
                    var data ={
                "id": this.id,
                "userState": this.changeState,
            }
                      console.log("CustomerPermissionSettingReques");

                     this.$axios.post("/admin/CustomerPermissionSettingRequest",data,{
                    headers:{
                        'token':sessionStorage.getItem("token")
                    }}).then(response=>{
                       
                            if (response.data.data.message == "用户权限修改成功！") {
                                this.dialogFormVisible = false;
                                this.$message({
                                    message: '客户权限修改成功！',
                                    type: 'success'
                                });

                                access_setting_page_getdata1(this.current_page,this);
                            } else {
                               
                                this.$message({
                                    message: '客户权限修改失败！',
                                    type: 'error'
                                });
                            }
                    
                    });
                   

                } else if (this.userRole == "售后服务人员") {
                       data ={
                "id": this.id,
                "serverState": this.changeState,
            }
                      console.log("permissionSettingserverRequest");
                     this.$axios.post("/admin/permissionSettingserverRequest",data,{
                    headers:{
                        'token':sessionStorage.getItem("token")
                    }}).then(response=>{
                         //console.log(response.data.data.message+"6666")
                         
                            if (response.data.data.message == "维护人员权限修改成功！") {
                                this.dialogFormVisible = false;
                                this.$message({
                                    message: '售后服务人员权限修改成功',
                                    type: 'success'
                                });

                                access_setting_page_getdata(this.current_page,this);
                            } else {
                               
                                this.$message({
                                    message: '售后服务人员权限修改失败！',
                                    type: 'error'
                                });
                            }
                    
                    });

                   
                }
                  this.dialogFormVisible = false;

        },
        handleSelect(key, keyPath) {//导航栏选择
         console.log("handleSelect");
        console.log(key + " " + this.activeIndex);
        this.currentIndx = key;
        console.log(this.currentIndx)
        if (this.currentIndx == '1') {
            this.current = "售后服务人员";
            this.current_page=1;
            console.log("售后服务人员")
            access_setting_page_getdata(1,this);

        } else if (this.currentIndx == '2') {
            this.current = "客户";
            console.log("客户导航栏")
             this.current_page=1;
             access_setting_page_getdata1(1,this);
        }
    },
    solution(Id, userId, userRole, accountStatus, way) {//表格按钮提交
      console.log("solution");
        this.changeState = way;
        this.id = Id;
        this.userId = userId;
        this.userRole = userRole;
        this.accountStatus = accountStatus;
        this.dia_solution = way;

        this.way1 = false;
        this.way2 = false;
        this.way3 = true;

        if (way == accountStatus) {

            this.$message({
                message: userId + " 已处于" + accountStatus + "   中！",
                type: 'warning'
            });
        } else if (way == "") {
            this.$message({
                message: "请选择解决方式！",
                type: 'warning'
            });

        } else {
            this.dialogFormVisible = true;
        }



    },
    handleCurrentChange:function  (i){
         console.log(this.$route.params.token);
          console.log("handleCurrentChange");
            this.current_page=i;
             if (this.current == "客户") {
                    access_setting_page_getdata1(i,this);
                } else {
                    access_setting_page_getdata(i,this);
                }

    }
        

    
}
  
}

 function access_setting_page_getdata(i,that) { //根据页数获取售后服务人员信息 function access_setting_page_getdata(i) { //根据页数获取售后服务人员信息
          console.log("access_setting_page_getdata");
          that.loading=true;
         var data = {
            pageNo: i,
            pageSize: that.page_size
        };
        
        
        that.$axios.post("/admin/getServerList",data,{
                    headers:{
                        'token': sessionStorage.getItem("token")
                    }}).then(res=>{
                        console.log(res.data)
                         var list = res.data.list;
                that.total = Number(res.data.message);
                that.tableData = [];
                 console.log("售后服务人员列表：");
                for (var index = 0; index < list.length; index++) {
                    var element = list[index];
                    // var totalPage = data.totalPage;
                    // access_page_vm.total = totalPage * data_temp.access_page_vm.pageSize;
                   var userRoleList= element.role;
                   var item;
                   if (userRoleList.includes(4)) {
                         item={ 
                             "id": element.id,
                                "userId": element.name,
                                "userRole":  "高级售后" ,
                                "accountStatus": element.userState
                            }
                   }else{
                           item={ 
                               "id": element.id,
                                "userId": element.name,
                                "userRole":  "普通售后" ,
                                "accountStatus": element.userState
                            }
                   }
                   

                   that.tableData.push(item)
                 
                    console.log(that.tableData[index]);

                }
                  that.loading=false;
                    
                });


 }
 function access_setting_page_getdata1(i,that) {//获取客户列表
      console.log("access_setting_page_getdata1");
        that.loading=true;
         console.log( that.$route.params.token);
        var data = {
            pageNo: i,
            pageSize: that.page_size
        };

         that.$axios.post("/admin/getCustomerList",data,{
                    headers:{
                        'token': sessionStorage.getItem("token")
                    }}).then(res=>{
                        var list = res.data.list;
                         console.log(res.data.message);
                that.total = Number(res.data.message);
                that.tableData = [];
                 console.log("客户列表：");

                for (var index = 0; index < list.length; index++) {
                    var element = list[index];
                   
                     
                    that.tableData.push({
                         "id": element.id,
                        "userId": element.name,
                        "userRole": element.role,
                        "accountStatus": element.userState
                    })
                    console.log(that.tableData[index]);

                }
                  that.loading=false;

                    });


 }
</script>

 
<style scoped>
  .function{

     position: relative;
     top: -260px;
     left: 600px;
   width: 900px;
     
 }
 #access_page{
    position: relative;
     left: 400px;
 }
#accessBtn{
    margin-left: 15px;
}
</style>
