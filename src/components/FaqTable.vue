
<template>
  <div class="functions">
    
    <div id="faqhead">

                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                        @select="handleSelect">

                        <el-menu-item index="0">修改/删除</el-menu-item>
                        <el-menu-item index="1">添加</el-menu-item>
                    </el-menu>
               
                </div>
                <div id="faqcenter">
                    <div id="modifyfaqarea" class="faqarea faqshow">
                    <div id="search" class="v-center">
                        <input type="text" id="search-bar" maxlength="40">
                        
                        <a   id="btnSearch">搜索</a>
                    </div>

                        <div id="modifylist">
                            <el-table :data="items" style="width: 100%">
                                <el-table-column label="标题" width="130">
                                    <template slot-scope="scope">
                            
                                        <span style="margin-left: 10px">{{ scope.row.faqtitle }}</span>
                                    </template>
                                </el-table-column>
                            
                            
                                <el-table-column label="类型" width="130">
                                    <template slot-scope="scope">
                                        <el-popover trigger="hover" placement="top">
                            
                                            <div slot="reference" class="name-wrapper">
                                                <el-tag size="medium">{{ scope.row.faqType }}</el-tag>
                                            </div>
                                        </el-popover>
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
                                @current-change="handleCurrentChange" @prev-click="prev_click" @next-click="next_click">
                            </el-pagination>
                        </div>
                    </div>
                    <div id="addarea" class="faqarea">
                        <el-form id="faqForm" label-width="80px">
                            <span style="color: #ffffff;">12</span>
                            <el-form-item label="目标软件" id="faqtarget">
                                <el-select v-model="faqSoftware" placeholder="请选择目标软件">
                                    <el-option v-bind:key="item.targetsoftware" v-bind:label="item.targetsoftware" v-bind:value="item.targetsoftware" v-for="item in items"></el-option>

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
    data:() =>{
        return {
             
        }
        
    } ,
  name: 'FaqTable',

methods: {
    
}
  
}
</script>

 
<style scoped>
 
</style>
