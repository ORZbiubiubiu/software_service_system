
<template>
  <div class="function">
                <el-input id="search_ipt"
                    placeholder="请输入内容" @change="search"
                    v-model="keyWord">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
                 <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                        @select="handleSelect">
                        <el-menu-item index="1">faq</el-menu-item>
                        <el-menu-item index="2">日志</el-menu-item>
                        <el-menu-item index="3">上线软件</el-menu-item>
                </el-menu>
              
                <el-table :data="faqTable"  height="462"  border  style="width: 100%" id="faqtable" v-if="faqTableShow" v-loading="faqTableLoading"
                    element-loading-text="拼命加载中"
                    element-loading-spinner="el-icon-loading"
                    element-loading-background="rgba(0, 0, 0, 0.8)">
                    <el-table-column  prop="faqName"   label="标题"  width="180">  </el-table-column>
                    <el-table-column  prop="faqType"  label="类型"  width="180">  </el-table-column>
                    <el-table-column  prop="faqInfo"  label="详细信息">  </el-table-column>
                     <el-table-column   prop="faqDate"  label="创建日期"   width="100">  </el-table-column>
                     <el-table-column   prop="faqSoftware"  label="对应软件"   width="100">  </el-table-column>
                </el-table>
                  
                 <el-table :data="logTable"  height="462"  border  style="width: 100%" id="logtable" v-if="logTableShow" v-loading="logTableLoading"
                    element-loading-text="拼命加载中"
                    element-loading-spinner="el-icon-loading"
                    element-loading-background="rgba(0, 0, 0, 0.8)">
                    <el-table-column  prop="log_level"   label="level"  width="100">  </el-table-column>
                    <el-table-column  prop="logdetail"  label="详细信息"   >  </el-table-column>
                   <el-table-column   prop="java_class"  label="java类"   width="180">  </el-table-column>
                      <el-table-column  prop="thread"  label="线程" width="180">  </el-table-column>
                    <el-table-column  prop="log_time"  label="时间" width="180">  </el-table-column>
                </el-table>
                 
                 <el-table :data="SWTable"  height="462"  border  style="width: 100%" id="SWtable" v-if="SWTableShow" v-loading="SWTableLoading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">
                    <el-table-column  prop="id"   label="软件ID"  width="180">  </el-table-column>
                    <el-table-column  prop="softwarename"  label="软件名"  width="180">  </el-table-column>
                    <el-table-column  prop="softwareinfo"  label="软件描述">  </el-table-column>
                     <el-table-column   prop="updatedate"  label="更新日期"   width="180">  </el-table-column>
                </el-table>
    
  </div>
</template>

<script>
 
export default {
    data:() =>{
        return {
            faqTableLoading:false,
            logTableLoading:false,
            SWTableLoading:false,
            //

             keyWord:"",
             activeIndex:"1",
             faqTableShow:true,
             logTableShow:false,
             SWTableShow:false,
             
             faqTable:[/* {
                     faqType: "faqType",
                    "faqName": "faqtitle1",
                    "faqInfo": "faqdetails",
                    "faqDate": "20/03/05",
                    faqSoftware:"111"
             } */],
             
              logTable:[/* {
                  log_level:"info",
                  logdetail:"",
                  java_class:"",
                  thread:"",
                  log_time:""
              } */],
             
              SWTable:[/* {
                    id: "element.id",
                    softwarename: "element.softwareName",
                    softwareinfo: "element.softwareInfo",
                    updatedate: "element.updateDate"
              } */]
        }
        
    } ,
  name: 'Search',

methods: {
    search:function(keyword){
         var data;
        if (this.faqTableShow) {
            console.log("faq搜索:"+this.keyWord);
            this.faqTableLoading=true;
              data={   faq_search: this.keyWord  };
              this.$axios.post("/admin/e_faq_search",data,{
                    headers:{
                        'token': sessionStorage.getItem("token")
                    }}).then(res=>{
                          console.log("faq搜索结果" );
                            console.log( res);
                          this.faqTable=res.content;
                          //时间格式处理
                          for (let index = 0; index <  this.faqTable.length; index++) {
                            this.faqTable[index].faqDate=this.faqTable[index].faqDate.substring(0,10);
                              
                          }
                             this.faqTableLoading=false;

                    
                });
        }else if (this.logTableShow) {
            console.log("log搜索:"+this.keyWord);
               data={   log_search: this.keyWord  };
            
          this.logTableLoading=true;
            this.$axios.post("/admin/e_faq_search",data,{
                headers:{
                    'token': sessionStorage.getItem("token")
                }}).then(res=>{
                        console.log("log搜索结果:" );
                        console.log( res);
                        this.logTable=res.content;
                        //时间格式处理
                        for (let index = 0; index <  this.logTable.length; index++) {
                            this.logTable[index].log_time=this.logTable[index].log_time.substring(0,10);
                            
                        }
                        this.logTableLoading=false;
                        
                
            });
        }else{
            this.SWTableLoading=true;
             console.log("软件搜索:"+this.keyWord);
               data={   software_search: this.keyWord  };
           

            //sw
             this.$axios.post("/admin/e_software_search",data,{
                    headers:{
                        'token': sessionStorage.getItem("token")
                    }}).then(res=>{
                          console.log("软件搜索结果" );
                            console.log( res);
                          this.SWTable=res.content;
                          //时间格式处理
                          for (let index = 0; index <  this.SWTable.length; index++) {
                            this.SWTable[index].updatedate= this.SWTable[index].updatedate.substring(0,10);
                              
                          }
                          this.SWTableLoading=false;

                    
                });

        }

    },
    handleSelect:function (index,indexpath) { 
        var data;
        if (index=="1") {

            this.faqTableLoading=true;
            //faq
             console.log("faq搜索"+this.keyWord);
            data={   faq_search: this.keyWord  };
            this.faqTableShow=true;
            this.logTableShow=false;
            this.SWTableShow=false;


            //search
            this.$axios.post("/admin/e_faq_search",data,{
                    headers:{
                        'token': sessionStorage.getItem("token")
                    }}).then(res=>{
                          console.log("faq搜索结果" );
                            console.log( res);
                          this.faqTable=res.content;
                          //时间格式处理
                          for (let index = 0; index <  this.faqTable.length; index++) {
                            this.faqTable[index].faqDate=this.faqTable[index].faqDate.substring(0,10);
                              
                          }
                            this.faqTableLoading=false;

                    
                });

        } else if (index=="2") {
            this.logTableLoading=true;
              console.log("log搜索"+this.keyWord);
            data={   log_search: this.keyWord  };
            this.faqTableShow=false;
            this.logTableShow=true;
            this.SWTableShow=false;
          
            this.$axios.post("/admin/e_log_search",data,{
            headers:{
                'token': sessionStorage.getItem("token")
            }}).then(res=>{
                    console.log("log搜索结果:" );
                    console.log( res);
                    this.logTable=res.content;
                    //时间格式处理
                    for (let index = 0; index <  this.logTable.length; index++) {
                        this.logTable[index].log_time=this.logTable[index].log_time.substring(0,10);
                        
                    }
                    this.logTableLoading=false;
                    
            
        });
            //log
        } else if (index=="3") {
            this.SWTableLoading=true;
             console.log("软件搜索"+this.keyWord);
             data={   software_search: this.keyWord  };
            this.faqTableShow=false;
            this.logTableShow=false;
            this.SWTableShow=true;

            //sw
             this.$axios.post("/admin/e_software_search",data,{
                    headers:{
                        'token': sessionStorage.getItem("token")
                    }}).then(res=>{
                          console.log("软件搜索结果" );
                            console.log( res);
                          this.SWTable=res.content;
                          //时间格式处理
                          for (let index = 0; index <  this.SWTable.length; index++) {
                            this.SWTable[index].updatedate= this.SWTable[index].updatedate.substring(0,10);
                              
                          }
                          this.SWTableLoading=false;

                    
                });

        }

    },
    
}
  
}
</script>

 
<style scoped>
 .function{
    position: relative;
     top: -320px;
     left: 600px;
     width: 1100px;
     background-color: #fff;
 }
</style>
