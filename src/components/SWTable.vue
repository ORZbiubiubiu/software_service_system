
<template>
  <div class="function">
    
    <el-table :data="tableData" height="650" style="width: 100%"  v-loading="loading"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.8)">
        <el-table-column prop="id" label="软件ID" width="180">
        </el-table-column>
        <el-table-column prop="softwareName" label="软件名" width="180" sortable  >
        </el-table-column>
        <el-table-column prop="softwareInfo" label="软件描述">
        </el-table-column>
        <el-table-column prop="updateDate" label="更新日期" sortable>
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
 
export default {
    mounted:function () { 

                this.loading=true;
            this.$axios.post("/admin/GetSoftWareList",{},{
                    headers:{
                        'token':sessionStorage.getItem("token")
                    }}).then(res=>{
                        var list = res.data.data.list;

                            this.tableData = [];
                            console.log("售后服务软件信息：");
                              console.log(list);
                            for (let index = 0; index < list.length; index++) {
                                const element = list[index];
                                this.tableData.push({
                                     id: element.id,
                                    softwareName: element.softwareName,
                                    softwareInfo: element.softwareInfo,
                                    updateDate: element.updateDate
                                })
                              

                            }
                             this.loading=false;
                    
                })

     
     },

    data:() =>{
        return {
            loading:true,
              tableData: [  ]
        }
        
    } ,
  name: 'SWTable',

methods: {
    
}
  
}
</script>

 
<style scoped>
  .function{

     position: relative;
      top: -320px;
     left: 600px;
     width: 900px;
     
 }
</style>
