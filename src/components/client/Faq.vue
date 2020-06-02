<template>
    <div id="search">
        <div id="search-bar-content" >
            <el-row :gutter="20">
                <el-col :span="16"><el-input v-model="faqInfo" placeholder="请输入内容"></el-input></el-col>
                <el-col :span="6"><el-button type="primary" @click="getFaq" icon="el-icon-search">搜索</el-button></el-col>
            </el-row>
        </div>
        <div id="type-nav" class="clearfix">
            
                <el-menu default-active="0" class="nav-center el-menu-demo" @select="handleSelect" mode="horizontal">
                    <el-menu-item v-bind:index="item.index" :key="index" v-for="(item, index) in types">
                        {{item.name}}
                    </el-menu-item>
                </el-menu>
            
        </div>
        
        <div id="posts" >
            
            <div id="result">搜索结果:</div>
            <div class="nodata" v-if="faqData.length == 0">很抱歉,暂时没有与{{searchHistory}}相匹配的搜索结果。</div>
            <div class="post" :key="index" v-for="(item,index) in faqData.slice((currentPage-1)*pagesize,currentPage*pagesize)">
                <el-card class="box-card" >
                    <div slot="header" class="clearfix">
                        <span>标题:{{item.faqName}}</span>
                        <span class="date">发布日期:{{item.faqDate}}</span>
                        <span class="sname">软件名称:{{item.faqSoftware}}</span>
                    </div>
                    <div>
                        解决方法:
                    </div>
                    <div>
                        {{item.faqInfo}}
                    </div>
                </el-card>
            </div>
            <div  class="page h-center" v-if="faqData.length != 0">
                <el-pagination
                        background
                        layout="prev, pager, next,jumper"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-size="pagesize"
                        :total="faqData.length">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:"faq",
    data(){
        return{
            types:[
                {
                    name: "全部",
                    index:  '0'
                },
                {
                    name: "登录异常",
                    index:  '1'
                },
                {
                    name: "界面无法显示",
                    index:  '2'
                },
                {
                    name: "显示信息有误",
                    index:  '3'
                },
                {
                    name: "其他",
                    index:  '4'
                },
               ],
         faqData:[],
         searchHistory:"",
         index: 0,
         faqType:null,
         faqInfo:"",
         pagesize: 2,
         currentPage: 1
        }
    },
    computed:{
        username(){
            return this.$store.state.username;
        },
        token(){
            return this.$store.state.token;
        }
    },
    mounted:function(){
        this.getFaq()
    },
    methods:{
            handleSelect(key, keyPath) {

                      console.log(key, keyPath);
                      key = Number(key);

                      this.faqType=this.types[key].name;
                      if(key==0){
                        this.faqType=null;
                      }
                      this.getFaq();
                      this.index = key;

                   },
            getFaq(){
                 this.$axios.post("/client/type_faq", {
                                         faqType:this.faqType,
                                         faqInfo:this.faqInfo
                                         },{
                                              headers:{
                                                        'token':this.token
                                              },
                                              withCredentials : true
                                         })
                                         .then((response) => {

                                             this.faqData = response.data.data.list ;

                                             this.searchHistory=this.faqInfo;
                                         })
                                         .catch(function (error) {
                                             console.log(error);
                                         });
            },
            handleCurrentChange: function(currentPage){
                                    this.currentPage = currentPage;
                                    console.log(this.currentPage)  //点击第几页
                            },
    }
}
</script>

<style>
#search{
    margin: 0;
    padding-top: 1px;
    min-height: 90%;
    position: relative;
}
#search-bar-content{
    margin-left: 500px;
    width:500px;
    margin-top: 49px;
}

#type-nav{
    margin-top:20px;
}

.nav-center{    
    padding-left: 500px;
    
}



#result{
    margin-left:150px;
    color:#909399;
    margin-bottom:20px;
    font-size:30px;
}

.nodata{
    color:#909399;
    margin:50px 0 0 150px;
    font-size:24px;
}

#posts{
    padding:30px;
    margin:20px 100px;
    width:1200px;
    background-color:#fff;
}

.post{
    margin-left: 200px;
    margin-bottom:10px;
    
}

.box-card{
    width: 900px;
    height: 200px;
    margin-bottom: 20px;
}

.date{
    float:right;
    padding:3px 0;
}

.sname{
    float:right;
    margin-right:10px;
    padding:3px 0;
}
</style>