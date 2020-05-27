<template>
  <div id="receiveMsg">
                <el-table :data="receiveMsg.slice((currentPage-1)*pagesize,currentPage*pagesize)" key="2">
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <el-form label-position="left" inline class="demo-table-expand">
                                <el-form-item label="内容" width="300px">
                                    <span>{{ props.row.justMessage }}</span>
                                </el-form-item>
                                <el-form-item label="发件人">
                                    <span>{{ props.row.sendName }}</span>
                                </el-form-item>
                                <el-form-item label="发送日期">
                                    <span>{{ props.row.messageDate }}</span>
                                </el-form-item>
                            </el-form>
                        </template>
                    </el-table-column>
                    <el-table-column show-overflow-tooltip prop="justMessage" label="内容" width="600">
                    </el-table-column>
                    <el-table-column prop="sendName"  label="发件人"  width="200">
                    </el-table-column>
                    <el-table-column prop="messageDate" label="发送日期" >
                    </el-table-column>
                </el-table>
                <div  class="page h-center" v-if="receiveMsg.length != 0">
                    <el-pagination
                            background
                            layout="prev, pager, next,jumper"
                            @current-change="msgHandleCurrentChange"
                            :current-page="currentPage"
                            :page-size="pagesize"
                            :total="receiveMsg.length">
                    </el-pagination>
                </div>
            </div>
</template>

<script>
export default {
    name:"Receivemsg",
    data(){
        return{
            receiveMsg:[],
            currentPage:1,
            pagesize:7
        }
    },
    methods:{
         msgHandleCurrentChange: function(currentPage){
               this.currentPage = currentPage;
        },
        getMsg(){
                    //  axios.post(this.getMsgUrl, {
                    //      getName:this.userName
                    //      },{
                    //             headers:{
                    //                        'token':sessionStorage.getItem('token')
                    //                     },
                    //             withCredentials : true
                    //      })
                    //      .then((response) => {
                    //          this.receiveMsg = response.data.data.list ;
                    //      })
                    //      .catch(function (error) {
                    //          console.log(error);
                    //      });
                 }
    }
}
</script>

<style>
#receiveMsg{
    position:relative;
    width:1200px;
    margin-left:100px;
    margin-top:100px;
    padding:10px;
    }
.page{
    margin-top:20px;
}
.el-tooltip__popper{
    display:none;
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