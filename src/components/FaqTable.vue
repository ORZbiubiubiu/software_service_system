
<template>
  <div class="function">
    
    <div id="faqhead">
 
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                        @select="handleSelect">

                        <el-menu-item index="0">修改/删除</el-menu-item>
                        <el-menu-item index="1">添加</el-menu-item>
                    </el-menu>
               
                </div>
                <div id="faqcenter">
                    <div id="modifyfaqarea"   v-if="modifyshow">
                    <div id="search" class="v-center">
                         
                            <el-input  id="search-bar" maxlength="40" @change="faqsearch"
                                placeholder="请输入内容" v-model="keyword">
                                <i slot="prefix" class="el-input__icon el-icon-search"></i>
                            </el-input>
                       
                        
                       
                    </div>

                        <div id="modifylist">
                            <el-table :data="items" style="width: 100%"  v-loading="loading"
                            element-loading-text="拼命加载中"
                            element-loading-spinner="el-icon-loading"
                            element-loading-background="rgba(0, 0, 0, 0.8)">
                                <el-table-column label="标题" width="150">
                                    <template slot-scope="scope">
                            
                                        <span style="margin-left: 10px">{{ scope.row.faqtitle }}</span>
                                    </template>
                                </el-table-column>
                            
                            
                                <el-table-column label="类型" width="150">
                                    <template slot-scope="scope">
                                        <span style="margin-left: 10px">{{ scope.row.faqType }}</span>
                                      <!--   <el-popover  >
                            
                                            <div    >
                                                <el-tag size="medium">{{ scope.row.faqType }}</el-tag>
                                            </div>
                                        </el-popover> -->
                                    </template>
                                </el-table-column>
                                <el-table-column label="详细信息" width="370">
                                    <template slot-scope="scope">
                                        <el-input type="textarea" :rows="2" v-model="scope.row.faqdetails">
                                        </el-input>
                            
                                    </template>
                                </el-table-column>
                                <el-table-column label="操作">
                                    <template slot-scope="scope">
                                        <el-button size="mini" @click="modify(scope.row.id,scope.row.faqdetails)">修改</el-button>
                                        <el-button size="mini" type="danger" @click="del(scope.row.id)">删除</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>

                           

                        </div>
                        <div class="paging" id="faq_page">
                            <el-pagination background layout="prev, pager, next" v-bind:total="total"
                                v-bind:current-page="current_page" v-bind:page-size="page_size"
                                @current-change="handleCurrentChange" >
                            </el-pagination>
                        </div>
                    </div>
                    <div id="addarea" class="faqarea" v-if="addshow">
                        <el-form id="faqForm" label-width="80px">
                          
                            <el-form-item label="目标软件" id="faqtarget"  >
                                <el-select v-model="faqSoftware" placeholder="请选择目标软件" v-loading="loading_targetsoftware"
                                element-loading-text="拼命加载中"
                                element-loading-spinner="el-icon-loading"
                                element-loading-background="rgba(0, 0, 0, 0.8)">
                                    <el-option v-bind:key="item.targetsoftware" v-bind:label="item.targetsoftware" v-bind:value="item.targetsoftware" v-for="item in items_add"></el-option>

                                </el-select>
                            </el-form-item>
                            <el-form-item label="标题">
                                <el-input v-model="faqName"></el-input>
                            </el-form-item>
                            <el-form-item label="类型">
                                <el-select v-model="faqType" placeholder="请选择类型">
                                    <el-option label="登陆异常" value="登陆异常"></el-option>
                                    <el-option label="界面无法显示" value="界面无法显示"></el-option>
                                    <el-option label="显示信息有误" value="显示信息有误"></el-option>
                                    <el-option label="其他" value="其他"></el-option>

                               <!--      .登陆异常，2.界面无法显示，3.显示信息有误，4.其他 -->

                                </el-select>
                            </el-form-item>

                            <el-form-item label="问题描述">
                                <el-input type="textarea" v-model="faqDescription"></el-input>
                            </el-form-item>
                            <el-form-item label="解决方法">
                                <el-input type="textarea" v-model="faqInfo"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="commit">立即创建</el-button>
                                <el-button type="primary" @click="cancel">取消</el-button>
                            </el-form-item>


                        </el-form>
                        

                    </div>
                </div>
  </div>
</template>

<script>
 
export default {

    mounted:function () { 
        let that = this;
        faq_page_getdata(1,that);
     },
    data:() =>{
        return {
            loading:true,
            loading_targetsoftware:true,
                //nav
             activeIndex: '0',
             //table
             modifyshow:true,
             addshow:false,
              items: [  {
                id: "",
                    faqType: "faqType",
                    "faqtitle": "faqtitle1",
                    "faqdetails": "faqdetails",
                    "faqdate": "20/03/05"
            }, {
                id: "",
                faqType: "faqType",
                "faqtitle": "faqtitle1",
                "faqdetails": "faqdetails",
                "faqdate": "20/03/05"
            }, {
                id: "",
                faqType: "faqType",
                "faqtitle": "faqtitle1",
                "faqdetails": "faqdetails",
                "faqdate": "20/03/05"
            }, {
                id: "",
                faqType: "faqType",
                "faqtitle": "faqtitle1",
                "faqdetails": "faqdetails",
                "faqdate": "20/03/05"
            }],
            last:"",

            // add
             items_add: [{
                "targetsoftware": "targetsoftware1",

            }, {
                "targetsoftware": "targetsoftware2",

            }, {
                "targetsoftware": "targetsoftware3",

            }],
            keyword:"",
            faqType: "",
            id: 1,
            faqName: "",
            faqDescription: "",
            faqInfo: "",
            faqSoftware: "",
            //page
             page_size: 5, //每頁条目数
            total: 20, //总条目数
            current_page: 1 //当前页数，
        }
        
    } ,
  name: 'FaqTable',

methods: {
            modify: function (id, faqInfo) {
                var data={
                    "id": id,
                    "faqInfo": escape(faqInfo)
                }
               this.$axios.post("/admin/FaqModify",data,{
                    headers:{
                        'token': sessionStorage.getItem("token")
                    }}).then(res=>{
                  if (res.data.data.code != 500) {
                            faq_page_getdata(this.current_page,this);

                            this.$message({
                                message: '修改成功！',
                                type: 'success'
                            });


                        }
                    
                });

                
            },
            del: function (id) {
                var data={
                    "id": id
                }
                 this.$axios.post("/admin/FaqDelete",data,{
                    headers:{
                        'token': sessionStorage.getItem("token")
                    }}).then(res=>{
                  if (res.data.code != 500) {
                            faq_page_getdata(this.current_page,this);
                            this.$message({
                                message: '删除成功！',
                                type: 'success'
                            });

                        }
                    
                });
               
            },
            handleSelect(key, keyPath) {
                
              
                if (key == "0") {
                    this.modifyshow=true;
                    this.addshow=false;
                    //faq_page_getdata(faq_page_vm.current_page);
                } else if (key == "1") {
                    this.addshow=true;
                    this.modifyshow=false;
                    this.loading_targetsoftware=true;
                    this.$axios.post("/admin/GetSoftWareList",{data:0},{
                    headers:{
                        'token': sessionStorage.getItem("token")
                    }}).then(res=>{
                           console.log(res.data);
                            var list = res.data.data.list;
                            this.items_add=[];
                            for (let index = 0; index < list.length; index++) {
                                const element = list[index];
                                this.items_add.push({
                                    targetsoftware: element.softwareName,
                                    id: element.id
                                })
                              
                            }
                              this.loading_targetsoftware=false;
                    
                });
                     


                }
            },
            //add
             commit: function () {
                //alert(targetsoftware_vm.faqSoftware + targetsoftware_vm.faqName + targetsoftware_vm.faqType + targetsoftware_vm.faqInfo + targetsoftware_vm.faqDescription);
                if (this.faqSoftware == "" || this.faqName == "" || this.faqInfo == "" || this.faqDescription == "" || this.faqType == "") {

                    this.$message({
                        message: '请完善所有信息！',
                        type: 'warning'
                    });
                } else {
                    //xss
                    var data =  {
                        id: this.id,
                        faqName: escape(this.faqName),
                        faqDescription: escape(this.faqDescription),
                        faqInfo:  escape(this.faqInf),
                        faqSoftware: this.faqSoftware,
                        faqType: this.faqType

                    };
                    console.log(data);
                    console.log( sessionStorage.getItem("token"));
                   
                    this.$axios.post("/admin/Faqadd",data,{
                    headers:{
                        'token': sessionStorage.getItem("token")
                    }}).then(res=>{
                          if (res.data.data.message == "success") {
                                console.log(res.data);
                                this.$message({
                                    message: '添加成功！',
                                    type: 'success'
                                });
                                 this.faqName ="";
                                   this.faqDescription = "";
                                    this.faqInfo = "";
                                   this.faqSoftware = "";  
                                   this.faqType = "";

                            } else {
                                this.$message.error('添加失败');
                            }
                    
                });
                    
                }


            },
            cancel: function () {
                this.faqName = "";
                this.faqDescription = "";
                this.faqInfo = "";
                this.faqSoftware = "";
                this.faqType = "";

            },
            faqsearch :function (keyWord) { 
                console.log("faqsearch:s"+keyWord)
                this.last = keyWord;
                    if (keyWord=="") {
                        faq_page_getdata(1,this);
                    }else{
                        console.log("btnSearch" + keyWord);
                    
                        faqserch(keyWord, 1,this);
                    }
                    
             },
            //page
             handleCurrentChange: function (p) {
                if (this.last=="") {
                    this.current_page = p;
                    faq_page_getdata(p,this);
                }else{
                    //
                    faqserch(this.last,p,this);
                }
           
            }
}
  
}

//搜索
    function faqserch(keyWord, pageNo,that) {
        var data = {
            faqInfo: keyWord,
            pageNo: pageNo,
            pageSize: that.page_size
        };
        that.current_page = pageNo;
        console.log("faqserch"  )
        console.log(data );
        that.$axios.post("/admin/getsearchFaqList",data,{
                    headers:{
                        'token': sessionStorage.getItem("token")
                    }}).then(response=>{
                          var list = response.data.data.list;
                            //console.log(response.data);
                            console.log(Number(response.data.data.message)+"totle");
                            that.total = Number(response.data.data.message);
                            console.log(list.length);

                            that.items = [];
                for (let index = 0; index < list.length; index++) {
                    
                    const element = list[index];
                    that.items.push({
                         id: element.id,
                        "faqtitle": element.faqName,
                        faqType: element.faqType,
                        "faqdetails": element.faqInfo,
                        "faqdate": element.faqDate
                    })
                    
                }
                 
                    
                });
        /* $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: "/admin/getsearchFaqList",
            data: JSON.stringify(data),
            headers: { "token": sessionStorage.getItem("token")},
            success: function (response) {

                var list = response.data.list;
                console.log(response.data);
                console.log(Number(response.data.message));
                faq_page_vm.total = Number(response.data.message);
                console.log(list.length);

                faq_vm.items = [];
                $.each(list, function (indexInArray, element) {

                    Vue.set(faq_vm.items, indexInArray, {
                        id: element.id,
                        "faqtitle": element.faqName,
                        faqType: element.faqType,
                        "faqdetails": element.faqInfo,
                        "faqdate": element.faqDate
                    });


                });


            }
        }); */


    }   

 function faq_page_getdata(i,that) {
     that.loading=true;
        //参数i ：用户点击下方分页器的页数
        //从服务器获取数据
        console.log(" faq_page_getdata")
        var data =  {
            pageNo: i,
            pageSize: that.page_size
        } ;
        that.current_page=i;

         that.$axios.post("/admin/getFaqList",data,{
                    headers:{
                        'token': sessionStorage.getItem("token")
                    }}).then(res=>{
                         var list = res.data.data.list;
                           console.log(res.data.data)
                that.total = Number(res.data.data.message);
                that.items = [];
                 console.log("faq");
                for (var index = 0; index < list.length; index++) {
                   var element = list[index];
                  //console.log(element.id);
                    that.items.push({
                         "id": element.id,
                        "faqtitle": element.faqName,
                        "faqType": element.faqType,
                        "faqdetails": element.faqInfo,
                        "faqdate": element.faqDate
                    })
                 
                    console.log(that.items[index]);

                }
                  that.loading=false;
                    
                });
       

        //将数据加载到 faq_vm 中
}
function   escape(str){
                var pattern = new RegExp("[`~@#$^&*()=|{}':;'\\[\\].<>/~@#￥……&*（）——|{}【】‘”“']");
                var rs='';
                for (var i =0;i < str.length;i++){
                    rs=rs+str.substr(i,1).replace(pattern,'');
                }
                return rs;
}
</script>

 
<style scoped>
  .function{
    background-color:#fff;
     position: relative;
     top: -320px;
     left: 600px;
     width: 900px;
   
     
 }
 #search {
    position: absolute;
    top:  30px;
    width: 550px;
    left: 300px;
}
 #faq_page{
      position: relative;
      left: 350px;
 }
 #search-bar {
    
    bottom: 5px ;
    border-radius: 10px;
    padding-left: 10px;
    height: 27px;
    width: 100px;
     
}
#btnSearch {
    float: right;
    width: 100px;
    margin-right: 120px;
    border:0;
    border-radius: 10px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #409EFF;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}
 #faqForm{
     margin-top: 20px;
     
 }
 #addarea{
     padding-bottom: 50px;
 }
</style>
