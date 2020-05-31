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
                                    @current-change="handleCurrentChange"
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
        orderData(){
            return this.$store.state.orderData
        }
    },
    created:function(){
        var username = sessionStorage.getItem("name");
        var token = sessionStorage.getItem("token");
        this.$store.commit("setUsername",username);
        this.$store.commit("setToken",token);
    },
    mounted:function(){
        
        this.getOrder();
    },
    methods:{
        getOrder(){
             this.$axios.post("/client/user_show_software",{
                    serverName:this.username
                },{
                      headers:{
                          'token':this.token
                      },
                   withCredentials : true
                 })
                .then((response) => {
                    var data = response.data.data.list;
                    var msg = response.data.data.message.split('#');

                    
                   data = data.filter(function(item,index){
                        for(var i = 0;i < msg.length;i++){

                            if (msg[i]==item.softwareName){
                                item.serviceState = 1;
                                return item;
                            }
                            else {
                                item.serviceState = 0;
                            }
                        }

                        return item;
                   })
                    this.$store.commit("setOrder",data);

                    var softwareNames=[];
                    for(var i=0 ;i<this.orderData.length;i++){
                        
                        if(this.orderData[i].serviceState==0){
                             softwareNames.push({"value":this.orderData[i].softwareName});//动态获取没有申请售后的软件名称
                        }
                    }

                    console.log(softwareNames);
                    this.$store.commit("setSoftwareNames",softwareNames);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        handleCurrentChange: function(currentPage){
               this.currentPage = currentPage;
        },
        viewDetail(sname){
            this.$router.push({path:'/client/service' });
        },

        apply(sname){
            this.$router.push({path:'/client/apply' })
            this.$store.commit("setSoftwareName",sname);
        }
    }

}
</script>

<style>
#purchased{
    position:relative;
}
.el-header{
    background-color: #B3C0D1;
    color: #fff;
    font-size:24px;
    line-height: 60px;
}
</style>