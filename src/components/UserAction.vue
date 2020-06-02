
<template>
  <div class="function">
       <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                        @select="handleSelect">
                        <el-menu-item index="1">用户进入功能模块次数</el-menu-item>
                        <el-menu-item index="2">用户在功能模块停留时间</el-menu-item>
                        <el-menu-item index="3">用户请求数据</el-menu-item>
                         <el-menu-item index="4">客户申请售后服务记录</el-menu-item>
        </el-menu>
         
        <div id="EnterCount"  v-if="EnterCountshow">
                <div class="chart" id="C_EnterCount" ref="C_EnterCount"> </div>
                <div class="chart" id="S_EnterCount" ref="S_EnterCount"> </div>
        </div>
        <div id="clientLogHolder">
            <div class="chart" id="clientLog" ref="clientLog"> </div>
        </div>
    
  </div>
</template>

<script>
 
export default {
    mounted:function () {  
        this.getEnterCount();
        
            

    },
    data:() =>{
        return {
            activeIndex:"1" ,
            EnterCountshow:true
        

             
        }
        
    } ,
  name: 'UserAction',

methods: {
    handleSelect:function  (index,indexpath) {  
        if (index=="1") {
            this.getEnterCount();
            
        }else if (index=="2") {
            //用户进入功能模块次数
        }else if (index=="3") {
            //
        }else if (index=="4") {
            //客户申请售后服务记录
            this.getclientLog();
        }
        

    },
    getEnterCount: function  () { 
        var option =  option_pie ;
        this.$axios.post("/admin/getActions_c",{},{
                    headers:{
                        'token':sessionStorage.getItem("token")
                    }}).then(res=>{                     
                        var list = res.data.data.list;                                                                   
                      option.series[0].data=[];
                     for (let index = 0; index < list.length; index++) {
                         const element = list[index];
                         option.series[0].data.push({
                              name:element.Aname,
                              value:element.count
                          })           
                     }
                     option.title.text="client"
                     const chart1 = this.$refs.C_EnterCount;      
                    if (chart1) {                      
                        const myChart = this.$echarts.init(chart1 ); 
                        myChart.setOption( option);
                        window.addEventListener("resize1", function() {
                            myChart.resize();
                        });
                    }                   
                })
            //S_EnterCount
        //
        this.$axios.post("/admin/getActions_s",{},{
                    headers:{
                        'token':sessionStorage.getItem("token")
                    }}).then(res=>{
                        var option =option_pie;                                      
                        var list = res.data.data.list;                       
                      option.series[0].data=[];
                     for (let index = 0; index < list.length; index++) {
                         const element = list[index];                     
                         option.series[0].data.push({
                              name:element.Aname,
                              value:element.count
                          })          
                        }
                           option.title.text="srver"
                                        //S_EnterCount
                        const chart2 = this.$refs.S_EnterCount;
                        if (chart2) {
                            const myChart2 = this.$echarts.init(chart2 ); 
                            myChart2.setOption( option);
                            window.addEventListener("resize", function() {
                                myChart2.resize();
                            });
                        }     
        })
    },getclientLog:function () { 
      
        //getActions_clientServeceType
         this.$axios.post("/admin/getActions_clientServeice",{},{
                    headers:{
                        'token':sessionStorage.getItem("token")
                    }}).then(res=>{      
                          var option =option_pie;               
                        var list = res.data.data.list;  
                                                                        
                      option.series[0].data=[];
                     for (let index = 0; index < list.length; index++) {
                         const element = list[index];
                         option.series[0].data.push({
                              name:element.SoftName,
                              value:element.percent
                          })           
                     }
                     option.title.text="申请售后软件"
                     const chart1 = this.$refs.C_EnterCount;      
                    if (chart1) {                      
                        const myChart = this.$echarts.init(chart1 ); 
                        myChart.setOption( option);
                        window.addEventListener("resize1", function() {
                            myChart.resize();
                        });
                    }                   
                })
            this.$axios.post("/admin/getActions_clientServeceType",{},{
                    headers:{
                        'token':sessionStorage.getItem("token")
                    }}).then(res=>{
                        var option =option_pie;                                      
                        var list = res.data.data.list;  
                                   console.log(list)                           
                      option.series[0].data=[];
                     for (let index = 0; index < list.length; index++) {
                         const element = list[index];                     
                         option.series[0].data.push({
                              name:element.type,
                              value:element.percent
                          })          
                        }
                           option.title.text="问题类型"
                                        //S_EnterCount
                        const chart2 = this.$refs.S_EnterCount;
                        if (chart2) {
                            const myChart2 = this.$echarts.init(chart2 ); 
                            myChart2.setOption( option);
                            window.addEventListener("resize", function() {
                                myChart2.resize();
                            });
                        }     
        })
        }
          
    
}
  
}

var option_pie={ 
                    title : {
                        show:true,//显示策略，默认值true,可选为：true（显示） | false（隐藏）
                        text: '主标题',//主标题文本，'\n'指定换行
                        link:'',//主标题文本超链接,默认值true
                        target: null,//指定窗口打开主标题超链接，支持'self' | 'blank'，不指定等同为'blank'（新窗口）
                       // subtext: '副标题',//副标题文本，'\n'指定换行
                        sublink: '',//副标题文本超链接
                        subtarget: null,//指定窗口打开副标题超链接，支持'self' | 'blank'，不指定等同为'blank'（新窗口）
                        x:'center',//水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
                        y: 'top',//垂直安放位置，默认为top，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
                        textAlign: null,//水平对齐方式，默认根据x设置自动调整，可选为： left' | 'right' | 'center
                        backgroundColor: 'rgba(0,0,0,0)',//标题背景颜色，默认'rgba(0,0,0,0)'透明
                        borderColor: '#ccc',//标题边框颜色,默认'#ccc'
                        borderWidth: 0,//标题边框线宽，单位px，默认为0（无边框）
                        padding: 5,//标题内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距
                        itemGap: 10,//主副标题纵向间隔，单位px，默认为10
                        textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                            fontFamily: 'Arial, Verdana, sans...',
                            fontSize: 12,
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                        },
                        subtextStyle: {//副标题文本样式{"color": "#aaa"}
                            fontFamily: 'Arial, Verdana, sans...',
                            fontSize: 12,
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                        },
                        zlevel: 0,//一级层叠控制。默认0,每一个不同的zlevel将产生一个独立的canvas，相同zlevel的组件或图标将在同一个canvas上渲染。zlevel越高越靠顶层，canvas对象增多会消耗更多的内存和性能，并不建议设置过多的zlevel，大部分情况可以通过二级层叠控制z实现层叠控制。
                        z: 6,//二级层叠控制，默认6,同一个canvas（相同zlevel）上z越高约靠顶层。
                }, 
                tooltip: {
                    trigger: 'item',
                    formatter: "{b} : {d}% <br/> {c}"
                },  
                graphic: {
                    elements: [{
                        type: 'image',
                        style: {
                            // image: giftImageUrl,
                            width: 130,
                            height: 130
                        },
                        left: 'center',
                        top: 'center'
                    }]
                },   
                series: [{
                        type: 'pie',
                        radius: ['35%', '50%'],
                        center: ['50%', '50%'],
                        color: ['#7F71FB','#46DF6C', '#EFDD1E', '#0071FB','#D072FB','#C3F12B','#8F6C22'],
                        /*data: [ {
                                value: 126,
                                name: 'data1'
                            },
                            {
                                value: 279,
                                name: 'data2'
                            },
                            {
                                value: 52,
                                name: 'data3'
                            },
                            {
                                value: 150,
                                name: 'data4'
                            } 
                        ],*/
                        labelLine: {
                            normal: {
                                show: true,
                                length: 20,
                                length2: 20,
                                lineStyle: {
                                    color: '#fff',
                                    width: 2
                                }
                            }
                        },
                        label: {
                            normal: {
                                formatter: '{c|{b}}\n{d|{d}%}',
                                rich: {
                                    b: {
                                        fontSize: 16,
                                        color: '#12EABE',
                                        align: 'left',
                                        padding: 4
                                    },
                                    d: {
                                        fontSize: 16,
                                        align: 'left',
                                        padding: 2
                                    },
                                    c: {
                                        color: '#333',
                                        fontSize: 16,
                                        align: 'left',
                                        padding: 2
                                    }
                                }
                            }
                        }
                }]
};
 
</script>

<style scoped>
 .chart{
    width: 600px;
    height: 600px;
    display:inline-block;
    margin-left: 50px;
    
}
 .function{
    background-color:#fff;
     position: relative;
     top: -380px;
     left: 500px;
     width: 1400px;
   
     
 }
.title{
    position: relative;
   /*  left: 220px;
    top: -80px; */
}
</style>
