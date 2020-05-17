$(document).ready(function () {


    var log_vm= new Vue({
        el: "#loginblock",
        data:{
            userName:"",
            passWord:"",
            Character:"",
            message:"",
            type:[
                {
                    key:"客户"
                },
                {
                    key: "售后服务人员"
                }, {
                    key: "系统管理员"
                }
            ]
        },
        methods:{
            onSubmit: function () {
                alert(log_vm.userName + log_vm.passWord + log_vm.Character)
                if (log_vm.userName == "" || log_vm.passWord == "") {

                    if (log_vm.userName == "") {
                        log_vm.message = "用户名不可为空";

                    } else {


                    }
                    if (log_vm.passWord == "") {
                        log_vm.message = "密码不可为空";

                    } else {

                    }
                } else {
                    for (const iterator of log_vm.userName) {
                        if (iterator==" ") {
                            log_vm.message = "用户名不可包含 空格!";
                            break;
                        }
                    }
                    for (const iterator of log_vm.passWord) {
                        if (iterator == " ") {
                            log_vm.message = "密码不可包含 空格!";
                            break;
                        }
                    }
                    if (log_vm.Character=="") {
                        log_vm.message="请选择用户登录类型！"
                    }
                    if (log_vm.message=="") {
                        // location.href = "administrator.html?" + "username=" + log_vm.userName;
                        var tmp = JSON.stringify({
                            "name": log_vm.userName,
                            "pwd": log_vm.passWord,

                        });
                        console.log(tmp)
                        $.ajax({
                            type: "POST",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            url: "/login",
                            data: tmp,
                            success: function (response) {
                                console.log(response)
                                if (response.data.msg == "success") {
                                    alert("登陆成功！！！");
                                    var type = response.data.role;
                                    var session = response.data.session_id;
                                    console.log(type + "    " + session)
                                    if (type=="1") {
                                        sessionStorage.setItem("name", log_vm.userName);
                                        sessionStorage.setItem("token", session);
                                        window.location.href = "client";
                                    } else if (type =="2") {
                                        sessionStorage.setItem("name", log_vm.userName);
                                        sessionStorage.setItem("token", session);
                                        window.location.href = "server";
                                    } else if (type == "3"){
                                        sessionStorage.setItem("name", log_vm.userName);
                                        sessionStorage.setItem("token", session);
                                        window.location.href = "admin";
                                    }

                                } else {
                                    alert("登陆失败！！！");
                                }
                            }
                        });

                    }
                    /* $.ajax({
                         type: "get",
                         url: "api/login",
                         data: {
                             "userName": name,
                             "passWord": pwd,
                             "Character": character
                         },
                         dataType: "json",
                         success: function (data) {
                             if (data.message == "success") {
                                 alert("登陆成功！！！");
                             }
                         },
                         error: function (data) {
                             if (data.message == "fail") {
                                 alert("登陆失败！！！");
                             }
                             $("#namemessage").text("");
                             $("#pwdmessage").text("用户名或者密码不正确！");
                         }
                     });*/
                }
            }
        }

    });

});
