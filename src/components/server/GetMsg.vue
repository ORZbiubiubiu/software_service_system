<template>
                    <div id="emails">
                        <el-table :data="msgItems.slice((currentPage-1)*pagesize,currentPage*pagesize)" key="0">
                            <el-table-column type="expand">
                                <template slot-scope="props">
                                    <el-form label-position="left" inline class="demo-table-expand">
                                        <el-form-item label="内容" width="300px">
                                            <span>{{ props.row.justMessage }}</span>
                                        </el-form-item>
                                        <el-form-item label="发件人" >
                                            <span>{{ props.row.sendName }}</span>
                                        </el-form-item>
                                        <el-form-item label="发送日期">
                                            <span>{{ props.row.messageDate }}</span>
                                        </el-form-item>
                                    </el-form>
                                </template>
                            </el-table-column>
                            <el-table-column show-overflow-tooltip prop="justMessage" label="内容" width="300">
                            </el-table-column>
                            <el-table-column prop="sendName"  label="发件人"  width="200">
                            </el-table-column>
                            <el-table-column prop="messageDate" label="发送日期" >
                            </el-table-column>
                        </el-table>
                        <div  class="page h-center" v-if="msgItems.length != 0">
                            <el-pagination
                                    background
                                    layout="prev, pager, next,jumper"
                                    @current-change="handleCurrentChange"
                                    :current-page="currentPage"
                                    :page-size="pagesize"
                                    :total="msgItems.length">
                            </el-pagination>
                        </div>
                    </div>
</template>

<script>
export default {
    name:"getMsg",
    data(){
        return{
            msgItems:[],
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
        }
    },
    mounted:function(){
        this.getMsg();
    },
    methods:{
        getMsg(){
            this.$axios.post("/server/show_messages", {
                getName:this.username,
            },{
                headers:{
                            'token':this.token
                },
                withCredentials : true
            })
                .then((response) => {
                    this.msgItems = response.data.data.list ;
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
#emails{
    position:relative;
    width:1000px;
    margin:100px;
    padding-left:200px;
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

.el-tooltip__popper{
    display:none;
  }

  .page{
      margin-top:20px;
  }
</style>