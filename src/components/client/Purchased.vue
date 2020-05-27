<template>
            <div id="purchased" >
                <el-container>
                    <el-header>您购买过的产品有:</el-header>
                    <el-main>
                        <el-table :data="orderData.slice((currentPage-1)*pagesize,currentPage*pagesize)" key="0">
                            <el-table-column prop="buyDate" label="购买日期" width="140">
                            </el-table-column>
                            <el-table-column prop="softwareName" label="产品名称" width="200">
                            </el-table-column>
                            <el-table-column prop="orderId" label="订单号">
                            </el-table-column>
                            <el-table-column label="当前状态">
                                <template slot-scope="scope">
                                    <span v-if="scope.row.serviceState == 1">正在进行售后处理</span>
                                    <span v-if="scope.row.serviceState == 0">正常</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button type="text" size="medium" @click="apply(scope.row.softwareName)" v-if="scope.row.serviceState==0">申请售后服务</el-button>
                                    <el-button type="text" size="medium" @click="viewDetail(scope.row.softwareName)" v-if="scope.row.serviceState==1">查看详情</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div  class="page h-center" v-if="orderData.length != 0">
                            <el-pagination
                                    background
                                    layout="prev, pager, next,jumper"
                                    @current-change="purchasedHandleCurrentChange"
                                    :current-page="currentPage"
                                    :page-size="pagesize"
                                    :total="orderData.length">
                            </el-pagination>
                        </div>
                    </el-main>
                </el-container>
            </div>
</template>

<script>
export default {
    name:"purchased",
    data(){
        return{
            orderData:[],
            currentPage:1,
            pagesize:7
        }
    }
}
</script>

<style>
#purchased{
    position:relative;
}
</style>