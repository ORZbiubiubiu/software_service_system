<template>
            <div id="service">
                <div class="headline">
                    <span class="title">您正在申请售后的产品有:</span>
                </div>
                <el-table ref="serviceTable" :data="serviceData.slice((currentPage-1)*pagesize,currentPage*pagesize)" key="1">
                    <el-table-column prop="softwareName" label="产品名称" width="200">
                    </el-table-column>
                    <el-table-column prop="serverName" label="服务人员" width="100">
                    </el-table-column>
                    
                    <el-table-column label="当前状态">
                        <template slot-scope="scope">
                            <span v-if="serverState(scope.row.serviceState)==1">正在处理</span>
                            <span v-if="serverState(scope.row.serviceState)==-1">正在切换服务人员</span>
                            <span v-if="serverState(scope.row.serviceState)==0">已经完成</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" size="medium" @click="toggleExpand(scope.row)">{{scope.row.expansion ? '收起' : '查看详情'}}</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column type="expand" width="1">
                        <template slot-scope="props">
                            <el-form label-position="left" inline class="demo-table-expand">
                                <el-form-item label="产品名称" width="300px">
                                    <span>{{ props.row.softwareName }}</span>
                                </el-form-item>
                                <el-form-item label="服务人员">
                                    <span>{{ props.row.serverName }}</span>
                                </el-form-item>
                                <el-form-item label="问题类型">
                                    <span>{{ props.row.serviceKind }}</span>
                                </el-form-item>
                                <el-form-item label="问题描述">
                                    <span>{{ props.row.serviceInfo }}</span>
                                </el-form-item>
                                <el-form-item label="当前状态">
                                    <span v-if="serverState(props.row.serviceState)==1">正在处理</span>
                                    <span v-if="serverState(props.row.serviceState)==-1">你的服务人员遇到了一些问题，因此他正在申请换人</span>
                                    <span v-if="serverState(props.row.serviceState)==0">已经完成</span>
                                </el-form-item>
                            </el-form>
                        </template>
                    </el-table-column>
                </el-table>
                <div  class="page h-center" v-if="serviceData.length != 0">
                    <el-pagination
                            background
                            layout="prev, pager, next,jumper"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-size="pagesize"
                            :total="serviceData.length">
                    </el-pagination>
                </div>
            </div>  
</template>

<script>
export default {
    name:"service",
    data(){
        return{
            currentPage:1,
            pagesize:7,
        }
        
    },
    computed:{
        username(){
            return this.$store.state.username
        },
        token(){
            return this.$store.state.token
        },
        serviceData(){
            return this.$store.state.serviceData
        }
    },
    mounted:function(){
        this.getService();
    },
    methods:{
        getService(){
                     this.$axios.post("/client/user_search", {
                         userName:this.username
                         },{
                                headers:{
                                           'token':this.token
                                        },
                                withCredentials : true
                         })
                         .then((response) => {
                             this.$store.commit("setServiceData",response.data.data.list) ;
                             console.log(this.serviceData);
                             //动态获取收件人的输入建议
                             var receivers=[];
                             this.serviceData.map(item => {
                                   item.expansion = false;
                                   receivers.push({"value":item.serverName});
                                 });
                             this.$store.commit("setReceivers",receivers);
                             console.log(receivers);
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
        handleCurrentChange: function(currentPage){
               this.currentPage = currentPage;
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
        }
    }
}
</script>

<style>
#service{
    position:relative;
}
.headline{
    height:60px;
    font-size:24px;
    line-height:60px;
    color:#fff;
    background-color:#B3C0D1;
}
.title{
    padding:0 20px;
}
.demo-table-expand{
    font-size:0;
}

.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>