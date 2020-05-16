$(document).ready(function () {

    var papervm=new Vue({
        el: '#pagination',
        data: function () {
            return {
                page_size: 6,//每頁条目数
                total:20,//总条目数
                current_page: 1 //当前页数，
            }

        },
        methods: {
            handleCurrentChange: function (p) {
                alert(p) ;
            },
            prev_click: function (p) {
               // alert(p);
            }, next_click: function (p) {
                //alert(p);
            }
        }
    })

    var titles = ["faqtitle", "faqtitle", "faqtitle", "faqtitle", "faqtitle", "faqtitle"];
    var details = ["faqdetails", "faqdetails", "faqdetails", "faqdetails", "faqdetails", "faqdetails"];
    var authors = ["韭菜卷大葱",  "王五", "小老弟", "小老妹", "东北爷们", "番茄炒蛋"];
    var dates = ["2020-4-12 21:19:11", "2020-4-12 21:19:11", "2020-4-12 21:19:11", "2020-4-12 21:19:11", "2020-4-12 21:19:11", "2020-4-12 21:19:11"];

    var itemvm = new Vue({
        el: "#faqlist",
        data: {
            "titles": titles, "details": details, "authors": authors, "dates": dates, 
            "items": [{
                "title": "t1", 
                "detail": "faqdetails", 
                "author":"ck",
                "date":"2020年4月12日21:33:48"
            }, {
                "title": "t1",
                "detail": "faqdetails",
                "author": "ck",
                "date": "2020年4月12日21:33:48"
            }, {
                "title": "t1",
                "detail": "faqdetails",
                "author": "ck",
                "date": "2020年4月12日21:33:48"
            }, {
                "title": "t1",
                "detail": "faqdetails",
                "author": "ck4",
                "date": "2020年4月12日21:33:48"
            }, {
                "title": "t1",
                "detail": "faqdetails",
                "author": "ck5",
                "date": "2020年4月12日21:33:48"
            }, {
                "title": "t1",
                "detail": "faqdetails",
                "author": "ck6",
                "date": "2020年4月12日21:33:48"
            }]
        }
        
    });



});
      /*
       < td >
           <
           p class = "serviceidinf" >
           <
           span >
           软件售后服务编号： <
           /span> <
       span class = "serviceid" > {
               {
                   serviceId[1]
               }
           } <
           /span> < /
           p > <
           p class = "processinf" >
           <
           span >
           当前状态： <
           /span> <
       span class = "process" > {
               {
                   serviceState[1]
               }
           } <
           /span> < /
           p > <
           p class = "applicantinf" >
           <
           span > 申请人： < /span>{{Applicants[1]}}<span class="applicant"></span > < /p> <
       p class = "reasoninf" > < span > 申请原因： < /span><span class="reason">{{Application_reason[1]}} < /
           span > < /p > <
           p class = "solutioninf" >
           <
           span > 处理方式： < /span> <select class="solution "> <
       option value = "反馈消息" > 反馈消息 < /option> <
       option value = "换人" > 换人 < /option> <
       option value = "改变状态" > 改变状态 < /option>

           <
           /select></p >
           <
           p class = "commit" > < button class = "commitbtn" > 提交 < /button></p >
           <
           /td> <
       td >
           <
           p class = "serviceidinf" >
           <
           span >
           软件售后服务编号： <
           /span> <
       span class = "serviceid" > {
               {
                   serviceId[2]
               }
           } <
           /span> < /
           p > <
           p class = "processinf" >
           <
           span >
           当前状态： <
           /span> <
       span class = "process" > {
               {
                   serviceState[2]
               }
           } <
           /span> < /
           p > <
           p class = "applicantinf" >
           <
           span > 申请人： < /span>{{Applicants[2]}}<span class="applicant"></span > < /p> <
       p class = "reasoninf" > < span > 申请原因： < /span><span class="reason">{{Application_reason[2]}} < /
           span > < /p > <
           p class = "solutioninf" >
           <
           span > 处理方式： < /span> <select class="solution "> <
       option value = "反馈消息" > 反馈消息 < /option> <
       option value = "换人" > 换人 < /option> <
       option value = "改变状态" > 改变状态 < /option>

           <
           /select></p >
           <
           p class = "commit" > < button class = "commitbtn" > 提交 < /button></p >
           <
           /td> <
       td >
           <
           p class = "serviceidinf" >
           <
           span >
           软件售后服务编号： <
           /span> <
       span class = "serviceid" > {
               {
                   serviceId[3]
               }
           } <
           /span> < /
           p > <
           p class = "processinf" >
           <
           span >
           当前状态： <
           /span> <
       span class = "process" > {
               {
                   serviceState[3]
               }
           } <
           /span> < /
           p > <
           p class = "applicantinf" >
           <
           span > 申请人： < /span>{{Applicants[3]}}<span class="applicant"></span > < /p> <
       p class = "reasoninf" > < span > 申请原因： < /span><span class="reason">{{Application_reason[3]}} < /
           span > < /p > <
           p class = "solutioninf" >
           <
           span > 处理方式： < /span> <select class="solution "> <
       option value = "反馈消息" > 反馈消息 < /option> <
       option value = "换人" > 换人 < /option> <
       option value = "改变状态" > 改变状态 < /option>

           <
           /select></p >
           <
           p class = "commit" > < button class = "commitbtn" > 提交 < /button></p >
           <
           /td>
      */