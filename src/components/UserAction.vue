
<template>
  <div class="function">
       <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                        @select="handleSelect">
                        <el-menu-item index="1">用户进入功能模块次数</el-menu-item>
                        <el-menu-item index="2">用户在功能模块停留时间</el-menu-item>
                        <el-menu-item index="3">用户请求数据</el-menu-item>
                         <el-menu-item index="4">客户申请售后服务记录</el-menu-item>
        </el-menu>
        <div id="EnterCount" >
                <div class="chart" id="C_EnterCount" ref="C_EnterCount"></div>
                <div class="chart" id="S_EnterCount" ref="S_EnterCount"></div>
        </div>
    
  </div>
</template>

<script>
 
export default {
    mounted:function () {  
        const chart1 = this.$refs.C_EnterCount;
            if (chart1) {
            const myChart = this.$echarts.init(chart1 ); 
            myChart.setOption(this.C_EnterCount_option);
            window.addEventListener("resize", function() {
            myChart.resize();
            });
            }
            

    },
    data:() =>{
        return {
            activeIndex:"1",
            C_EnterCount_option:{  
                tooltip: {
                trigger: 'item',
                formatter: "{b} : {d}% <br/> {c}"
                },  graphic: {
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
                },   series: [{
                    type: 'pie',
                    radius: ['35%', '50%'],
                    center: ['50%', '50%'],
                    color: ['#46DF6C', '#EFDD1E', '#0071FB','#D072FB'],
                    data: [{
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
                    ],
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
        }

             
        }
        
    } ,
  name: 'UserAction',

methods: {
    handleSelect:function  (index,indexpath) {  

    },
    
}
  
}
</script>

<style scoped>
 .chart{
    width: 500px;
    height: 500px;
}
 

</style>
