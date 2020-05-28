<template>
  <div id="service-management" >
                    <el-table :data="serviceItems.slice((currentPage-1)*pagesize,currentPage*pagesize)"  key="1">
                        <el-table-column show-overflow-tooltip prop="softwareName" label="软件名称" width="150">
                        </el-table-column>
                        <el-table-column prop="userName"  label="申请用户"  width="150">
                        </el-table-column>
                        <el-table-column prop="serviceKind" label="问题类型" width="100">
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
                                @current-change="serviceManageHandleCurrentChange"
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
            serviceItems:[],
            currentPage:1,
            pagesize:7
        }
    }
}
</script>

<style>
#service-management{
    position:relative;
  }
</style>