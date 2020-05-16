$(document).ready(function () {
$("#b1").click(function () {
    var Faq = {};
    Faq.id = "11";
    Faq.faqName = "前端来的";
    Faq.faqDescription = "前端来的问题描述";
    Faq.faqInfo = "abc";
    Faq.faqSoftware = "xx";
    Faq.faqDate = null;
    var faq = JSON.stringify(Faq);
    $.ajax({
        type: "post",
        url: "addfaq",
        dataType: "json",
        data: faq,
        contentType: "application/json;charset=UTF-8",
        success: function (data, textStatus) {
            alert("add成功");
        },
        complete: function (XMLHttpRequest, textStatus) {
        },
        error: function () {
            alert("add失败");
        }
    });
});

$("#b2").click(function () {

        $  .ajax({
            url : "/getFaq",
            dataType : "json",
            type : "GET",
            success : function(data) {
                alert(data.list[1].id);
            }
        });
    });

    //update
    $("#b3").click(function () {
        var Faq = {};
        Faq.id = "11";
        Faq.faqInfo = "ABC";
        var faq = JSON.stringify(Faq);
        $.ajax({
            type: "post",
            url: "updatefaq",
            dataType: "json",
            data: faq,
            contentType: "application/json;charset=UTF-8",
            success: function (data, textStatus) {
                alert("update成功");
            },
            complete: function (XMLHttpRequest, textStatus) {
            },
            error: function () {
                alert("update失败");
            }
        });


    });
    //delete
    $("#b4").click(function () {
        var Faq = {};
        Faq.id = "11";
        var faq = JSON.stringify(Faq);
        $.ajax({
            type: "post",
            url: "delete",
            dataType: "json",
            data: faq,
            contentType: "application/json;charset=UTF-8",
            success: function (data, textStatus) {
                alert("delete成功");
            },
            complete: function (XMLHttpRequest, textStatus) {
            },
            error: function () {
                alert("delete失败");
            }
        });
    });
    $("#b6").click(function () {
        var User = {};
        User.id = "2";
        User.userState = "发送消息";
        var user = JSON.stringify(User);
        $.ajax({
            type: "post",
            url: "updateuser",
            dataType: "json",
            data: user,
            contentType: "application/json;charset=UTF-8",
            success: function (data, textStatus) {
                alert("updateuser成功");
            },
            complete: function (XMLHttpRequest, textStatus) {
            },
            error: function () {
                alert("updateuser失败");
            }
        });
    });
    $("#b5").click(function () {
        alert("b5");
        $.get("/getUsers",function(data){
            alert(data.list[0].id);
            $(data).each(function (index, element) {
                alert("id:"+data[index].id+" userName:"+data[index].userName+" userPassword" +data[index].userPassword+" userSoftword" +data[index].userSoftword+" userState" +data[index].userState);
            });
        });
    });
    $("#b7").click(function () {
        alert("b7");
        /*$.get("/search",function(data){
            alert(data.list[0].faqName);
            $(data).each(function (index, element) {
                alert("id:"+data[index].id+" faqName:"+data[index].faqName+data[index].faqDescription);
            });
        });*/
        var faq = {};
        faq.faqName="问题1";
        var Faq=JSON.stringify(faq);
        alert("11");
        $.ajax({
            type: "post",
            url: "/search",
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: Faq,
            success: function (data, textStatus) {
                alert("注册成功");
                alert("id:"+data[0].id+" faqName:"+data[0].faqName+data[0].faqDescription);

            },
            complete: function (XMLHttpRequest, textStatus) {},
            error: function () {
                //alert("id:"+data[0].id+" faqName:"+data[0].faqName+data[0].faqDescription);
                alert("注册失败");
            }});
    });
    $("#b8").click(function () {
        alert("b8");
        var faq = {};
        faq.faqName="问题1";
        var Faq=JSON.stringify(faq);
        alert(faq.faqName);
        $.ajax({
            type: "post",
            url: "search1",
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: Faq,
            success: function (data, textStatus) {
                alert("注册成功");
                alert("id:"+data[0].id+" faqName:"+data[0].faqName+data[0].faqDescription);

            },
            complete: function (XMLHttpRequest, textStatus) {},
            error: function () {
                //alert("id:"+data[0].id+" faqName:"+data[0].faqName+data[0].faqDescription);
                alert("注册失败");
            }});
    });
    $("#b9").click(function () {
        alert("b9");
        $.get("/getExlist",function(data){


            alert(data.list[0].serviceid);
            $(data).each(function (index, element) {
                //前端接收后台传送的数据并且处理
                alert("id:"+data[index].serviceid);
                //前端接收后台传送的数据并且处理
            });
            //前端接收后台传送的数据并且处理
        });
    });
    $("#b10").click(function () {
        alert("b10");
        var faq = {};
        faq.serverName="B100";
        var Faq=JSON.stringify(faq);
        alert(faq.serverName);
        $.ajax({
            type: "post",
            url: "getrePlaceName",
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: Faq,
            success: function (data, textStatus) {
                alert("注册成功");
                alert("id:"+data[0].serverName);

            },
            complete: function (XMLHttpRequest, textStatus) {},
            error: function () {
                //alert("id:"+data[0].id+" faqName:"+data[0].faqName+data[0].faqDescription);
                alert("注册失败");
            }});
    });
    $("#b11").click(function () {
        alert("b11");
        var faq = {};
        faq.username="B1000";
        faq.password="123456";
        faq.usertype="客户";
        faq.software=null;
        var Faq=JSON.stringify(faq);

        $.ajax({
            type: "post",
            url: "addUerorServer",
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: Faq,
            success: function (data, textStatus) {
                alert("注册成功");
                alert(data.message);
                //alert("id:"+data[0].serverName);

            },
            complete: function (XMLHttpRequest, textStatus) {},
            error: function () {
                //alert("id:"+data[0].id+" faqName:"+data[0].faqName+data[0].faqDescription);
                alert("注册失败");
            }});
    });
})
/*$.get("load",function(data){
    //前端接收后台传送的数据并且处理
    $("#course").innerHTML = data[0].name+data[0].age+data[1].name+data[1].age;

    $(data).each(function (index, element) {

        //前端接收后台传送的数据并且处理
        alert("name:"+data[index].name);
        alert("age:"+data[index].age);
        //前端接收后台传送的数据并且处理
    });
    //前端接收后台传送的数据并且处理
});

var userArr = new Array();
var user = {};
user.userName = "zs";
user.pwd = "sdg34";
user.ckpwd = "1fgh";

userArr.push(user);
var user1 = {};
user1.userName = "qwe";
user1.pwd = "qw";
user1.ckpwd = "1ghj";
userArr.push(user1);

alert(userArr[0].pwd)
$.ajax({
    type: "post",
    url: "qwe",
    dataType: "json",
    data: {
        "js": JSON.stringify(userArr)
    },
    success: function (data, textStatus) {
        alert("注册成功");
    },
    complete: function (XMLHttpRequest, textStatus) {},
    error: function () {
        alert("注册失败");
    }

        <script th:inline="javascript" >
    //websocket连接相关参数
    var imData={};
imData.userUid=[[${userUid}]];
imData.imServerPort=[[${imServerPort}]];
//以类的形式进行调用
var websocketHtml5 = new WebSocketHtml5(imData);
//创建websocket
websocketHtml5.createWebSocket();
//获取接收到的数据
var receive = function(resData){
    if(resData!=undefined) {
        $("#recvContent").append('<div style="width:300px;text-align:left;"><span >'+resData.fromUser + '发送：' + resData.content + '</span></div><br/>');
    }
};
//发送信息回车键
$("#txt").keydown(function(event){
    if(event.keyCode==13){
        $("#button").click();
    }
});
//按钮点击事件
$("#button").click(function(){
    var object={}
    object.content = $("#txt").val();
    object.toUser = $("#toUser").val();
    object.fromUser= imData.userUid;
    $("#txt").val("");
    $("#recvContent").append('<div style="width:300px;text-align:right;"><span >发送给'+object.toUser + '：' + object.content + '</span></div><br/>');
    websocketHtml5.send(object);
});
</script>*/