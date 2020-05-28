<template>
                    <div id="server-cards">
                        <div class="nodata" v-if="serviceItems.length == 0 ">暂无售后服务</div>
                        <el-card class="box-card" :key="index" v-for="(item,index) in serviceItems.slice((currentPage-1)*pagesize,currentPage*pagesize)" >
                            <el-row :gutter="20">
                                <el-col :span="3">软件名称:</el-col>
                                <el-col :span="5">{{item.softwareName}}</el-col>
                                <el-col :span="3">当前状态:</el-col>
                                <el-col :span="5">
                                        <span v-if="isServer(item.serviceState)">正在处理</span>
                                        <span v-if="!isServer(item.serviceState)">正在切换服务人员</span>
                                </el-col>
                                <el-col :span="3">服务人员:</el-col>
                                <el-col :span="5">{{item.serverName}}</el-col>
                            </el-row>

                            <el-divider></el-divider>
                            <el-row :gutter="20">
                                <el-col :span="3">问题类型:</el-col>
                                <el-col :span="21">{{item.serviceKind}}</el-col>
                            </el-row>
                            <el-row class="detail">
                                <el-col :span="24">具体描述:</el-col>
                            </el-row>
                            <div class="service-detail">{{item.serviceInfo}}</div>
                        </el-card>
                        <div  class="page h-center" v-if="serviceItems.length != 0">
                            <el-pagination
                                    background
                                    layout="prev, pager, next,jumper"
                                    @current-change="serviceHandleCurrentChange"
                                    :current-page="currentPage"
                                    :page-size="3"
                                    :total="serviceItems.length">
                            </el-pagination>
                        </div>
                    </div>
</template>

<script>
export default {
    name:"myService",
    data(){
        return{
            serviceItems:[],
            currentPage:1,
            pagesize:3,
        }
    }
}
</script>

<style>
.nodata{
    color:#909399;
    margin:20px 0;
    font-size:24px;
}

#server-cards{
    margin:100px;
    position:relative;
    
}

.box-card{
    margin-bottom:10px;
    font-size:18px;
}

</style>