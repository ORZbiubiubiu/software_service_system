<template>
            <div id="software-update-info">
                <div class="headline">
                    <span class="title">您将在此处看到您购买过的软件更新信息:</span>
                </div>
                <div id="collapse">
                    <div class="nodata h-center" v-if="orderData.length == 0">暂无数据</div>
                    <el-collapse v-if="orderData.length != 0"  v-model="activeName"  @change="handleChange" accordion>
                        <el-collapse-item :key="index"  v-for="(item,index) in orderData.slice((currentPage-1)*pagesize,currentPage*pagesize)" :name="item.softwareName" >
                            <template slot="title">
                                {{item.softwareName}}
                            </template>
                            <div class="update-data-error" v-if="updateData.length == 0">暂无更新信息</div>
                            <div class="updateInfo" v-for="(upd,index) in updateData" :key="index">
                                <span class="updateDate">更新时间:</span>
                                <span>{{upd.updateDate}}</span>
                                <br>
                                <span class="updateDetail">更新内容:</span>
                                <p>{{upd.softwareInfo}}</p>
                                <el-divider></el-divider>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
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
                </div>
            </div>
</template>

<script>
export default {
    name:"updateInfo",
    data(){
        return{
            updateData:[],
            currentPage: 1,
            pagesize:5,
            activeName:0
        }
    },
    mounted:function(){
        var ip = localStorage.getItem("ip")
        var url = this.$route.path;
        var token = this.token;
        this.log(url,ip,token);
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
    methods:{
        handleChange(data){
                    this.$axios.post("/client/show_update_info", {
                       softwareName:data
                    },{
                           headers:{
                                       'token':this.token
                           },
                           withCredentials : true
                    })
                    .then((response) => {
                       this.updateData = response.data.data.list ;
                    })
                    .catch(function (error) {
                       console.log(error);
                     });
        },
        handleCurrentChange: function(currentPage){
               this.currentPage = currentPage;
        }
    }
}
</script>

<style>
#software-update-info{
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

#collapse{
    padding:10px;
    position:relative;
}

.updateDate{
    margin-right:20px;
}

.updateDetail{
    margin-top:30px;
}

.updateInfo{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    color:#909399;
}

.nodata{
    color:#909399;
    margin:20px 0;
    font-size:24px;
}

.page{
    margin-top:20px;
}

.update-data-error{
    color:#909399;
    margin:20px 20px;
    font-size:18px;
}
</style>