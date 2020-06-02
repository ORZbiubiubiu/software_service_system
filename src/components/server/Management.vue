<template>
  <div id="service-management" >
                    <el-table :data="serviceItems.slice((currentPage-1)*pagesize,currentPage*pagesize)"  key="1">
                        <el-table-column show-overflow-tooltip prop="softwareName" label="软件名称" width="200">
                        </el-table-column>
                        <el-table-column prop="userName"  label="申请用户"  width="200">
                        </el-table-column>
                        <el-table-column prop="serviceKind" label="问题类型" width="200">
                        </el-table-column>
                        <el-table-column label="当前状态">
                            <template slot-scope="scope">
                                <span v-if="isServer(scope.row.serviceState)">正在处理</span>
                                <span v-if="!isServer(scope.row.serviceState)">正在申请换人</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button v-if="isServer(scope.row.serviceState)" type="primary" @click="finish(scope.row.softwareName,scope.row.userName)" size="mini">完成</el-button>
                                <el-button v-if="!isServer(scope.row.serviceState)" disabled type="primary" @click="finish(scope.row.softwareName,scope.row.userName)" size="mini">完成</el-button>
                                <el-button v-if="isServer(scope.row.serviceState)" type="danger" @click="change(scope.row.softwareName,scope.row.userName)" size="mini">申请换人</el-button>
                                <el-button v-if="!isServer(scope.row.serviceState)" disabled type="danger" @click="change(scope.row.softwareName,scope.row.userName)" size="mini">申请换人</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div  class="page h-center" v-if="serviceItems.length != 0">
                        <el-pagination
                                background
                                layout="prev, pager, next,jumper"
                                @current-change="handleCurrentChange"
                                :current-page="currentPage"
                                :page-size="pagesize"
                                :total="serviceItems.length">
                        </el-pagination>
                    </div>
                </div>
</template>

<script>
export default {
    name:"management",
    data(){
        return{
            userName:'',
            softwareName:'',
            
            currentPage:1,
            pagesize:7
        }
    },
    computed:{
        username(){
            return this.$store.state.username
        },
        token(){
            return this.$store.state.token
        },
        serviceItems(){
            return this.$store.state.serviceItems
        }
        
    },
    mounted:function(){
        var ip = localStorage.getItem("ip")
        var url = this.$route.path;
        var token = this.token;
        this.log(url,ip,token);
    },
    methods:{
        handleCurrentChange: function(currentPage){
             this.currentPage = currentPage;
        },
        isServer(state){
                    if (state == "yes"){
                        return true;
                    }
                    else return false;
        },
        finish(sname,uname){
                this.softwareName=sname;
                this.userName=uname;
                this.$confirm('确定要修改该服务状态为完成吗?', '提示', {
                          confirmButtonText: '确定',
                          cancelButtonText: '取消',
                          type: 'warning'
                        }).then(() => {
                            this.$axios.post("/server/update_state", {
                                                userName:this.userName,//客户名
                                                servername:this.username,//该用户用户名 即服务人员的用户名
                                                serverstate:"finish",
                                                softwareName:this.softwareName
                                            },{
                                                    headers:{
                                                               'token':this.token
                                                    },
                                                    withCredentials : true
                                             })
                                            .then((response) => {
                                                if(response.data.data.message == 'success'){
                                                    this.$message({
                                                          type: 'success',
                                                          message: '修改成功!'
                                                    });
                                                    var serviceitem = this.serviceItems
                                                    var tempItem=[];
                                                    
                                                    for(var i=0;i<serviceitem.length;i++){
                                                        if(serviceitem[i].softwareName == this.softwareName && serviceitem[i].userName == this.userName){
                                                            continue;
                                                        }else{
                                                            tempItem.push(serviceitem[i]);
                                                        }
                                                    }
                                                     this.$store.commit("setServiceItems",tempItem);
                                                }
                                                else{
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
                      this.$axios.post("/senSer/update_state", {
                            userName:this.userName,
                            servername:this.username,
                            serverstate:"no",
                            softwareName:this.softwareName
                      },{
                            headers:{
                                        'token':this.token
                                    },
                            withCredentials : true
                        }).then((response) => {
                            if(response.data.data.message == 'success'){
                                this.$message({
                                    type: 'success',
                                    message: '申请成功,请等待管理员审核!'
                                });
                                var serviceitem = this.serviceItems
                                serviceitem.map(item => {
                                                    if(item.softwareName == this.softwareName && item.userName == this.userName){
                                                        item.serviceState="no";
                                                  }
                                });
                                this.$store.commit("setServiceItems",serviceitem);
                                
                            }else{
                                  this.$message({
                                    type: 'error',
                                    message: '申请失败，请稍后再试!'
                                  });
                            }
                      }).catch( (error) => {
                            if(error.response.status==401){
                                this.$message({
                                    type: 'error',
                                    message: '很抱歉，您暂时无权进行此操作!'
                                });
                            }  
                              console.log(error);
                         });

             }).catch(() => {
                  this.$message({
                        type: 'info',
                        message: '请求已取消'
                  });
             });
        },
    }
}
</script>

<style>
#service-management{
    position:relative;
  }
</style>