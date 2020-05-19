$(document).ready(function () {
    //售后服务异常dialog
    var name = sessionStorage.getItem("name");
    $("#userName").text(name);
    var session_id = sessionStorage.getItem("token");
   
 
    var service_dialog_vm = new Vue({
        el: '#service_dialog',
        data: {
            msgid: "",
            dialogFormVisible: false,
            serviceId: "1",
            solution: "1",
            serviceState: "1",
            Application_reason: "1",
            Applicant: "1",
            feedbackinf: "1",
            change_name: "",
            way1: true,
            way2: false,
            way3: false,
            serverlist: []
        },
        methods: {
            commit: function () {

                var tmp = JSON.stringify({
                    msgid: service_dialog_vm.msgid,
                    serverName: service_dialog_vm.change_name,
                    serviceid: service_dialog_vm.serviceId
                });
                $.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    url: "/admin/huanren",
                    headers: {
                        "token": sessionStorage.getItem("token")
                    },
                    data: tmp,
                    success: function (response) {


                        if (response.data.message == "更新成功") {
                            service_dialog_vm.$message({
                                message: "更换售后服务人员" + service_dialog_vm.change_name + "成功!",
                                type: 'success'
                            });
                            

                        } else {
                            service_dialog_vm.$message.error("更换售后服务人员" + service_dialog_vm.change_name + "失败!");

                        }
                        
                        service_error_page_getdata(service_page_vm.current_page);
                    }
                });
                service_dialog_vm.dialogFormVisible = false;

            }
        }

    });

    //售后服务异常处理页面的数据准备
    //每页显示 8  个服务异常处理


    /**seervice_table */
    var service_table_vm = new Vue({
        el: '#service_table_holder',
        data: {
            //每页显示 11 个
            tableData: [/* {
                mesid: "",
                "serviceId": "SDA1000",
                "serviceState": "正在处理",
                "Applicants": "东北爷们",
                "Application_reason": "韭菜卷大葱不好吃",
                solution: ""
            }, {
                mesid: "",
                "serviceId": "SDA1000",
                "serviceState": "正在处理",
                "Applicants": "东北爷们",
                "Application_reason": "韭菜卷大葱不好吃",
                solution: ""
            }, {
                mesid: "",
                "serviceId": "SDA1000",
                "serviceState": "正在处理",
                "Applicants": "东北爷们",
                "Application_reason": "韭菜卷大葱不好吃",
                solution: ""
            }, {
                mesid: "",
                "serviceId": "SDA1000",
                "serviceState": "正在处理",
                "Applicants": "东北爷们",
                "Application_reason": "韭菜卷大葱不好吃",
                solution: ""
            }, {
                mesid: "",
                "serviceId": "SDA1000",
                "serviceState": "正在处理",
                "Applicants": "东北爷们",
                "Application_reason": "韭菜卷大葱不好吃",
                solution: ""
            }, {
                mesid: "",
                "serviceId": "SDA1000",
                "serviceState": "正在处理",
                "Applicants": "东北爷们",
                "Application_reason": "韭菜卷大葱不好吃",
                solution: ""
            }, {
                mesid: "",
                "serviceId": "SDA1000",
                "serviceState": "正在处理",
                "Applicants": "东北爷们",
                "Application_reason": "韭菜卷大葱不好吃",
                solution: ""
            }, {
                mesid: "",
                "serviceId": "SDA1000",
                "serviceState": "正在处理",
                "Applicants": "东北爷们",
                "Application_reason": "韭菜卷大葱不好吃",
                solution: ""
            }, {
                mesid: "",
                "serviceId": "SDA1000",
                "serviceState": "正在处理",
                "Applicants": "东北爷们",
                "Application_reason": "韭菜卷大葱不好吃",
                solution: ""
            }, {
                mesid: "",
                "serviceId": "SDA1000",
                "serviceState": "正在处理",
                "Applicants": "东北爷们",
                "Application_reason": "韭菜卷大葱不好吃",
                solution: ""
            }, {
                mesid: "",
                "serviceId": "SDA1000",
                "serviceState": "正在处理",
                "Applicants": "东北爷们",
                "Application_reason": "韭菜卷大葱不好吃",
                solution: ""
            } */]

        },
        methods: {

            solution(serviceId, serviceState, Applicants, Application_reason, solution, mesid) {
                service_dialog_vm.msgid = mesid;

                if (solution == "") {

                    service_table_vm.$message({
                        message: '请选择解决方式！',
                        type: 'warning'
                    });
                } else {
                    service_dialog_vm.serviceId = serviceId;
                    service_dialog_vm.solution = solution;
                    service_dialog_vm.serviceState = serviceState;
                    service_dialog_vm.Application_reason = Application_reason;
                    service_dialog_vm.Applicant = Applicants;

                    service_dialog_vm.way1 = false;
                    service_dialog_vm.way2 = true;
                    service_dialog_vm.way3 = false;
                    var tmp = JSON.stringify({
                        serverName: Applicants
                    })

                    $.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        url: "/admin/getReplaceName",
                        headers: {
                            "token": sessionStorage.getItem("token")
                        },
                        data: tmp,
                        success: function (response) {
                            console.log(response)
                            var list = response.data.list;
                            service_dialog_vm.serverlist = [];
                            for (let index = 0; index < list.length; index++) {
                                const element = list[index];
                                Vue.set(service_dialog_vm.serverlist, index, {
                                    name: element
                                })
                            }

                        }
                    });

                    service_dialog_vm.dialogFormVisible = true;


                }


            }
        }
    });

   
    //access-dialog
    var access_dialog_vm = new Vue({
        el: '#access_dialog',
        data: {

            dialogFormVisible: false,
            id: "",
            changeState: "",
            userId: "",
            userRole: "",
            accountStatus: "",
            solution: "",
            feedbackinf: "",
            way1: true,
            way2: false,
            way3: false


        },
        methods: {
            commit: function () {


                if (access_dialog_vm.userRole == "客户") {
                    $.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        url: "/admin/CustomerPermissionSettingRequest",
                        data: JSON.stringify({

                            "id": access_dialog_vm.id,
                            "userState": access_dialog_vm.changeState,

                        }),
                        success: function (response) {

                            if (response.data.message == "用户权限修改成功！") {
                                access_dialog_vm.dialogFormVisible = false;
                                access_dialog_vm.$message({
                                    message: '客户权限修改成功！',
                                    type: 'success'
                                });

                                access_setting_page_getdata1(access_page_vm.current_page);
                            } else {
                               
                                access_dialog_vm.$message({
                                    message: '客户权限修改失败！',
                                    type: 'error'
                                });
                            }
                        }
                    });

                } else if (access_dialog_vm.userRole == "售后服务人员") {
                    $.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        url: "/admin/permissionSettingserverRequest",
                        headers: {
                            "token": sessionStorage.getItem("token")
                        },
                        data: JSON.stringify({

                            "id": access_dialog_vm.id,
                            "serverState": access_dialog_vm.changeState,

                        }),
                        success: function (response) {

                            if (response.data.message == "维护人员权限修改成功！") {
                                access_dialog_vm.dialogFormVisible = false;
                                access_dialog_vm.$message({
                                    message: '售后服务人员权限修改成功',
                                    type: 'success'
                                });

                                access_setting_page_getdata(access_page_vm.current_page);
                            } else {
                                 access_dialog_vm.dialogFormVisible = false;
                                access_dialog_vm.$message({
                                    message: '售后服务人员权限修改失败！',
                                    type: 'error'
                                });

                            }
                        }
                    });
                }
                  access_dialog_vm.dialogFormVisible = false;

            }





        }
    });

    //权限设置菜单导航
    var access_navMenu = new Vue({
        el: "#accessHead",
        data: {
            activeIndex: '1',
            currentIndx: '1 ',
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key + " " + access_navMenu.activeIndex);
                access_navMenu.currentIndx = key;
                console.log(access_navMenu.currentIndx)
                if (access_navMenu.currentIndx == '1') {
                    access_table_vm.current = "售后服务人员";
                    access_setting_page_getdata(1);

                } else if (access_navMenu.currentIndx == '2') {
                    access_table_vm.current = "客户";
                    console.log("客户导航栏")
                    access_setting_page_getdata1(1);
                }
            }
        }
    });


    //access——table-vue
    //每页11个
    var access_table_vm = new Vue({
        el: '#access_setting_holder',
        data: {
            current: "售后服务人员",
            tableData: [/* {
                id: "",
                "userId": "韭菜卷大葱7",
                "userRole": "userRole1",
                "accountStatus": "封禁中",
                values: ""
            }, {
                id: "",
                "userId": "韭菜卷大葱6",
                "userRole": "userRole1",
                "accountStatus": "冻结中",
                values: ""
            }, {
                id: "",
                "userId": "韭菜卷大葱5",
                "userRole": "userRole1",
                "accountStatus": "封禁中",
                values: ""
            }, {
                id: "",
                "userId": "韭菜卷大葱4",
                "userRole": "userRole1",
                "accountStatus": "冻结中",
                values: ""
            }, {
                id: "",
                "userId": "韭菜卷大葱3",
                "userRole": "userRole1",
                "accountStatus": "封禁中",
                values: ""
            }, {
                id: "",
                "userId": "韭菜卷大葱2",
                "userRole": "userRole1",
                "accountStatus": "正常使用中",
                values: ""
            }, {
                id: "",
                "userId": "韭菜卷大葱1",
                "userRole": "userRole1",
                "accountStatus": "封禁中",
                values: ""
            }, {
                id: "",
                "userId": "韭菜卷大葱4",
                "userRole": "userRole1",
                "accountStatus": "正常使用中",
                values: ""
            }, {
                id: "",
                "userId": "韭菜卷大葱3",
                "userRole": "userRole1",
                "accountStatus": "封禁中",
                values: ""
            }, {
                id: "",
                "userId": "韭菜卷大葱2",
                "userRole": "userRole1",
                "accountStatus": "冻结中",
                values: ""
            }, {
                id: "",
                "userId": "韭菜卷大葱1",
                "userRole": "userRole1",
                "accountStatus": "封禁中",
                values: ""
            } */]

        },
        methods: {

            solution(Id, userId, userRole, accountStatus, way) {
                access_dialog_vm.changeState = way;
                access_dialog_vm.id = Id;
                access_dialog_vm.userId = userId;
                access_dialog_vm.userRole = userRole;
                access_dialog_vm.accountStatus = accountStatus;
                access_dialog_vm.solution = way;

                access_dialog_vm.way1 = false;
                access_dialog_vm.way2 = false;
                access_dialog_vm.way3 = true;

                if (way == accountStatus) {

                    access_table_vm.$message({
                        message: userId + " 已处于" + accountStatus + "   中！",
                        type: 'warning'
                    });
                } else if (way == "") {
                    access_table_vm.$message({
                        message: "请选择解决方式！",
                        type: 'warning'
                    });

                } else {
                    access_dialog_vm.dialogFormVisible = true;
                }



            }
        }
    })
    //faq数据库管理页面的数据准备
    //每页 显示  3个 管理条目

    var faq_vm = new Vue({
        el: '#modifylist',
        data: {
            items: [  {
                id: "",
                faqType: "faqType",
                "faqtitle": "faqtitle1",
                "faqdetails": "faqdetails",
                "faqdate": "20/03/05"
            }, {
                id: "",
                faqType: "faqType",
                "faqtitle": "faqtitle2",
                "faqdetails": "faqdetails",
                "faqdate": "20/03/05"
            }, {
                id: "",
                faqType: "faqType",
                "faqtitle": "faqtitle3",
                "faqdetails": "faqdetails",
                "faqdate": "20/03/05"
                }, {
                    id: "",
                    faqType: "faqType",
                    "faqtitle": "faqtitle3",
                    "faqdetails": "faqdetails",
                    "faqdate": "20/03/05"
                }  , {
                id: "",
                faqType: "faqType",
                "faqtitle": "faqtitle3",
                "faqdetails": "faqdetails",
                "faqdate": "20/03/05"
                }, {
                    id: "",
                    faqType: "faqType",
                    "faqtitle": "faqtitle3",
                    "faqdetails": "faqdetails",
                    "faqdate": "20/03/05"
                }    ],
            last:""
        },
        methods: {
            modify: function (id, faqInfo) {
                $.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    url: "/admin/FaqModify",
                    headers: {
                        "token": sessionStorage.getItem("token")
                    },
                    data: JSON.stringify({
                        "id": id,
                        "faqInfo": faqInfo
                    }),
                    success: function (response) {
                        if (response.data.code != 500) {
                            faq_page_getdata(faq_page_vm.current_page);

                            faq_vm.$message({
                                message: '修改成功！',
                                type: 'success'
                            });


                        }

                    }
                });
            },
            del: function (id) {
                $.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    url: "/admin/FaqDelete",
                    headers: {
                        "token": sessionStorage.getItem("token")
                    },
                    data: JSON.stringify({
                        "id": id,

                    }),
                    success: function (response) {
                        if (response.data.code != 500) {
                            faq_page_getdata(faq_page_vm.current_page);
                            faq_vm.$message({
                                message: '删除成功！',
                                type: 'success'
                            });

                        }

                    }
                });
            }
        }
    })

    //faq 导航栏
    var faq_nav_vm = new Vue({
        el: "#faqhead",
        data: {
            activeIndex: '0',
        },
        methods: {
            handleSelect(key, keyPath) {
                key = Number(key);
                console.log(key);
                $(".faqarea").removeClass("faqshow");
                $(".faqarea").eq(key).addClass("faqshow");
                if (key == "0") {
                    faq_page_getdata(faq_page_vm.current_page);
                } else if (key == "1") {
                    //加载软件列表供选择
                    $.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        url: "/admin/GetSoftWareList",
                        headers: {
                            "token": sessionStorage.getItem("token")
                        },
                        data: "data",
                        success: function (response) {
                            console.log(response.data);
                            var list = response.data.list;
                            for (let index = 0; index < list.length; index++) {
                                const element = list[index];
                                Vue.set(targetsoftware_vm.items, index, {
                                    targetsoftware: element.softwareName,
                                    id: element.id
                                })
                            }



                        }
                    });


                }
            }
        }

    });

    // adduser_vm= new Vue({

    var adduser_vm = new Vue({
        el: '#addUser',
        data: {
            username: "",
            password: "",
            password_check: "",
            message: "",
            usertype: "",
            list: [{
                name: 123

            }],
            serverSoftware: "",
            usertypes: [{
                type: "客户"
            }, {
                type: "售后服务人员"
            }]
        },
        methods: {
            onSubmit: function () {
                // alert(adduser_vm.username + adduser_vm.password + adduser_vm.password_check + adduser_vm.usertype);
                adduser_vm.message = "";
                if (adduser_vm.username == "") {
                    adduser_vm.message = "用户名不可为空";
                } else if (adduser_vm.password == "") {
                    adduser_vm.message = "密码不可为空";
                } else if (adduser_vm.password_check == "") {
                    adduser_vm.message = "请确认密码！";
                } else if (adduser_vm.usertype == "") {
                    adduser_vm.message = "请选择用户类型";
                } else if (adduser_vm.serverSoftware == "" && adduser_vm.usertype == "售后服务人员") {
                    adduser_vm.message = "请选择负责软件";
                }

                for (const iterator of adduser_vm.username) {
                    if (iterator == " ") {
                        adduser_vm.message = "用户名称不可包含空格！";
                    }
                }
                if (adduser_vm.password != adduser_vm.password_check) {
                    adduser_vm.message = "两次密码输入不一致！";
                } else {
                    for (const iterator of adduser_vm.password) {
                        if (iterator == " ") {
                            adduser_vm.message = "密码不可包含空格";
                        }
                    }
                }
                if (adduser_vm.message == "") {
                    // console.log(adduser_vm.username + adduser_vm.password + adduser_vm.usertype + adduser_vm.serverSoftware)
                    var pwd = adduser_vm.password;
                    pwd = hex_md5(pwd);
                    pwd = hex_md5(pwd);
                    var tmp = JSON.stringify({
                        username: adduser_vm.username,
                        password: pwd,
                        usertype: adduser_vm.usertype,
                        software: adduser_vm.serverSoftware
                    });

                    $.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        url: "/admin/adduser",
                        headers: {
                            "token": sessionStorage.getItem("token")
                        },
                        data: tmp,
                        success: function (response) {
                            if (response.data.message == "success") {
                                adduser_vm.$message({
                                    message: adduser_vm.username + "  " + "添加成功!",
                                    type: 'success'
                                });
                                adduser_vm.username = "";
                                adduser_vm.password = "";
                                adduser_vm.password_check = "";
                                adduser_vm.message = "";
                            }else{
                                adduser_vm.$message({
                                    message: adduser_vm.username + "  " + "添加失败!",
                                    type: 'error'
                                });
                            }


                        }
                    });

                }




            },
            cancel: function () {
                adduser_vm.username = "";
                adduser_vm.password = "";
                adduser_vm.password_check = "";
                adduser_vm.message = "";

            }
        }
    });

    //SOFTwareinf
    var softwareinf_vm = new Vue({
        el: "#updatearea",
        data: {
            tableData: [{
                id: "id",
                softwareName: "softwareName",
                softwareInfo: "softwareInfo",
                updateDate: "updateDate"
            }, {
                id: "id",
                softwareName: "softwareName",
                softwareInfo: "softwareInfo",
                updateDate: "updateDate"
            }, {
                id: "id",
                softwareName: "softwareName",
                softwareInfo: "softwareInfo",
                updateDate: "updateDate"
            }, {
                id: "id",
                softwareName: "softwareName",
                softwareInfo: "softwareInfo",
                updateDate: "updateDate"
            }, {
                id: "id",
                softwareName: "softwareName",
                softwareInfo: "softwareInfo",
                updateDate: "updateDate"
            }, {
                id: "id",
                softwareName: "softwareName",
                softwareInfo: "softwareInfo",
                updateDate: "updateDate"
            }, {
                id: "id",
                softwareName: "softwareName",
                softwareInfo: "softwareInfo",
                updateDate: "updateDate"
            }, {
                id: "id",
                softwareName: "softwareName",
                softwareInfo: "softwareInfo",
                updateDate: "updateDate"
            }]

        }
    });


    //faq add targetsoftware

    var targetsoftware_vm = new Vue({
        el: '#addarea',
        data: {
            items: [{
                "targetsoftware": "targetsoftware1",

            }, {
                "targetsoftware": "targetsoftware2",

            }, {
                "targetsoftware": "targetsoftware3",

            }],
            faqType: "",
            id: 1,
            faqName: "",
            faqDescription: "",
            faqInfo: "",
            faqSoftware: ""
        },
        methods: {
            commit: function () {
                //alert(targetsoftware_vm.faqSoftware + targetsoftware_vm.faqName + targetsoftware_vm.faqType + targetsoftware_vm.faqInfo + targetsoftware_vm.faqDescription);
                if (targetsoftware_vm.faqSoftware == "" || targetsoftware_vm.faqName == "" || targetsoftware_vm.faqInfo == "" || targetsoftware_vm.faqDescription == "" || targetsoftware_vm.faqType == "") {

                    targetsoftware_vm.$message({
                        message: '请完善所有信息！',
                        type: 'warning'
                    });
                } else {
                    var data = JSON.stringify({
                        id: targetsoftware_vm.id,
                        faqName: targetsoftware_vm.faqName,
                        faqDescription: targetsoftware_vm.faqDescription,
                        faqInfo: targetsoftware_vm.faqInfo,
                        faqSoftware: targetsoftware_vm.faqSoftware,
                        faqType: targetsoftware_vm.faqType

                    });
                    $.ajax({ //提交faq  add
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        url: "/admin/Faqadd",
                        headers: {
                            "token": sessionStorage.getItem("token")
                        },
                        data: data,
                        success: function (response) {
                            console.log(response.data);
                            if (response.data.message == "success") {
                                console.log(response.data);
                                targetsoftware_vm.$message({
                                    message: '添加成功！',
                                    type: 'success'
                                });
                                 targetsoftware_vm.faqName ="";
                                   targetsoftware_vm.faqDescription = "";
                                    targetsoftware_vm.faqInfo = "";
                                   targetsoftware_vm.faqSoftware = "";  
                                   targetsoftware_vm.faqType = "";

                            } else {
                                targetsoftware_vm.$message.error('添加失败');
                            }
                        }
                    });
                }


            },
            cancel: function () {
                targetsoftware_vm.faqName = "";
                targetsoftware_vm.faqDescription = "";
                targetsoftware_vm.faqInfo = "";
                targetsoftware_vm.faqSoftware = "";
                targetsoftware_vm.faqType = "";
            }

        }
    })


     var func_menu_vm = new Vue({
             el: "#funcmenu",
             data: {
                 funcs: [{
                         fncname: "售后服务异常处理",
                         index: "0"
                     },
                     {
                         fncname: "权限设置",
                         index: "1"
                     },
                     {
                         fncname: "FAQ数据库管理",
                         index: "2"
                     },
                     {
                         fncname: "关于此软件",
                         index: "3"
                     }, {
                         fncname: "添加用户",
                         index: "4"
                     }
                 ]
             },
             methods: {
                 handleSelect(key, keyPath) {
                     menuSelect(Number(key));
                 },
                 handleOpen(key, keyPath) {
                     console.log(" handleOpe");
                     menuSelect(Number(key));
                 },
                 handleClose(key, keyPath) {
                     console.log(" handleClose");
                     menuSelect(Number(key));
                 }
             }
         }

     );

     function menuSelect(index) {


         $("#functions_area").children().removeClass("selected_area");
         $("#functions_area").children().eq(index).addClass("selected_area");


         //根据被点击元素在父元素中的位置顺序判断要跳转到哪个页面去
         if (index == 0) { //售后服务异常处理页面加载数据

             service_error_page_getdata(1);


         } else if (index == 1) { //权限设置界面
             //将从数据库里获得数据并且加载到 access_vm 中
             // access_setting_page_getdata(1);
             if (access_table_vm.current == "客户") {
                 console.log("access_table_vm.current==客户");
                 access_setting_page_getdata1(1);
             } else {
                 console.log("access_table_vm.current==售后服务人员");
                 access_setting_page_getdata(1);
             }

             // console.log("access_setting_page_getdata(1)");
         } else if (index == 2) {
             //faq数据库管理界面
             console.log("faq_page_getdata(1)");
             faq_page_getdata(1);

         } else { //
             console.log("新增用户-售后服务人员-可先服务软件");
             $.ajax({
                 type: "POST",
                 contentType: "application/json; charset=utf-8",
                 dataType: "json",
                 url: "/admin/GetSoftWareList",
                 headers: {
                     "token": sessionStorage.getItem("token")
                 },
                 data: "data",
                 success: function (response) {
                     console.log(response.data);
                     var list = response.data.list;
                     for (let index = 0; index < list.length; index++) {
                         const element = list[index];
                         Vue.set(adduser_vm.list, index, {
                             name: element.softwareName,

                         })
                     }



                 }
             });


         }


     }

    
    //分页器
    var service_page_vm = new Vue({
        el: '#service_page',
        data: {
            page_size: 11, //每頁条目数
            total: 35, //总条目数
            current_page: 1 //当前页数，


        },
        methods: {
            handleCurrentChange: function (p) {
                service_error_page_getdata(p);
                // alert("handleCurrentChange" + p);
            },
            prev_click: function (p) {
                // alert(p);
            },
            next_click: function (p) {
                //alert(p);
            }
        }
    })

    var access_page_vm = new Vue({
        el: '#access_page',
        data: {
            page_size: 10, //每頁条目数er
            total: 35, //总条目数
            current_page: 1 //当前页数，


        },
        methods: {
            handleCurrentChange: function (p) {
                if (access_table_vm.current == "客户") {
                    access_setting_page_getdata1(p);
                } else {
                    access_setting_page_getdata(p);
                }

            },
            prev_click: function (p) {
                // alert(p);
            },
            next_click: function (p) {
                //alert(p);
            }
        }
    })

    var faq_page_vm = new Vue({
        el: '#faq_page',
        data: {
            page_size: 5, //每頁条目数
            total: 20, //总条目数
            current_page: 1 //当前页数，


        },
        methods: {
            handleCurrentChange: function (p) {
                if (faq_vm.last=="") {
                    faq_page_vm.current_page = p;
                    faq_page_getdata(p);
                }else{
                    faqserch(faq_vm.last,p);
                }
           
            },
            prev_click: function (p) {
                
            },
            next_click: function (p) {
                
            }
        }
    })

    //页面开始获取异常服务列表
    service_error_page_getdata(1);
    
    
    //faq搜索
    $("#btnSearch").click(function (e) {
       
        var keyWord = $("#search-bar").val();
        if (keyWord=="") {
            faq_page_getdata(1);
        }else{
            console.log("btnSearch" + keyWord)
           
            faqserch(keyWord, 1);
        }
        faq_vm.last = keyWord;
       
    });
   



   
        //搜索
    function faqserch(keyWord, pageNo) {
        var data = {
            faqInfo: keyWord,
            pageNo: pageNo,
            pageSize: faq_page_vm.page_size
        };
        faq_vm.current_page = pageNo;
        console.log("faqserch"  )
        console.log(data )
        $.ajax({
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
        });


    }        

    //版本信息导航栏

    var versioninf_nav_vm = new Vue({
        el: "#aboutsoftwarehead",
        data: {
            activeIndex: "0",
        },
        methods: {
            handleSelect: function (key, keyPath) {
                var i = Number(key);
                console.log(i);
                $(".versionarea").removeClass("selected_versionarea");
                $(".versionarea").eq(i).addClass("selected_versionarea");

                if (i == 1) {
                    console.log("售后服务软件信息")
                    $.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        url: "/admin/GetSoftWareList",
                        headers: {
                            "token": sessionStorage.getItem("token")
                        },
                        data: {},   
                        success: function (response) {
                            var list = response.data.list;

                            softwareinf_vm.tableData = [];
                            console.log("售后服务软件信息：");
                              console.log(list );
                            for (let index = 0; index < list.length; index++) {
                                const element = list[index];
                                Vue.set(softwareinf_vm.tableData, index, {
                                    id: element.id,
                                    softwareName: element.softwareName,
                                    softwareInfo: element.softwareInfo,
                                    updateDate: element.updateDate

                                })

                            }
                        }
                    });

                }

            }
        }
    });

   
    function service_error_page_getdata(i) { // //根据页数获取售后服务人员信息
        //参数i ：用户点击下方分页器的页数
        //从服务器获取数据
        var data_temp = {
            pageNo: i,
            pageSize: service_page_vm.page_size
        };
        console.log(data_temp)

        $.ajax({
            type: "post",
            url: "/admin/ServiceInfList",
            dataType: "json", //预期返回的数据的类型
            headers: {
                "token": sessionStorage.getItem("token")
            },
            data: JSON.stringify(data_temp),

            contentType: "application/json;charset=UTF-8",
            // beforeSend: function (XMLHttpRequest) {
            //     XMLHttpRequest.setRequestHeader("token", "token_ck");
            // },
            success: function (data, textStatus) {
                var list = data.data.list;
                var total = data.message;
                service_page_vm.total = total;
                service_page_vm.current_page = i;
                service_table_vm.tableData = [];
                
                for (var index = 0; index < list.length; index++) {
                    var element = list[index];

                    Vue.set(service_table_vm.tableData, index, {
                        mesid: element.mesid,
                        "serviceId": element.serviceid,
                        "serviceState": "element.serviceState",
                        "Applicants": element.getName,
                        "Application_reason": element.reason
                    });
                    console.log(service_table_vm.tableData[index])

                }

            },
            complete: function (XMLHttpRequest, textStatus) {},
            error: function () {
                 

                 

            }
        });

        //将数据加载到 service_vm 中

    };

    function access_setting_page_getdata1(i) { //根据页数获取客户信息

        var data_temp = {
            pageNo: i,
            pageSize: access_page_vm.page_size
        };
        access_page_vm.current_page = i;


        $.ajax({
            type: "post",
            url: "/admin/getCustomerList",
            headers: {
                "token": sessionStorage.getItem("token")
            },
            dataType: "json", //预期返回的数据的类型
            data: JSON.stringify(data_temp),
            contentType: "application/json;charset=UTF-8",
            success: function (data, textStatus) {
                var list = data.list;
                access_page_vm.total = Number(data.message);
                access_table_vm.tableData = [];
                 console.log("客户列表：");

                for (var index = 0; index < list.length; index++) {
                    var element = list[index];
                    // var totalPage = data.totalPage;
                    // access_page_vm.total = totalPage * data_temp.access_page_vm.pageSize;

                    Vue.set(access_table_vm.tableData, index, {
                        "id": element.id,
                        "userId": element.name,
                        "userRole": element.role,
                        "accountStatus": element.userState
                    });
                    console.log(access_table_vm.tableData[index]);

                };

            },
            complete: function (XMLHttpRequest, textStatus) {},
            error: function () {

                
            }
        });
        //将数据加载到 access_vm 中


    }

    function access_setting_page_getdata(i) { //根据页数获取售后服务人员信息
        //参数i ：用户点击下方分页器的页数
        //从服务器获取数据
        var data_temp = {
            pageNo: i,
            pageSize: access_page_vm.page_size
        };
        access_page_vm.current_page = i;


        $.ajax({
            type: "post",
            url: "/admin/getServerList",
            dataType: "json", //预期返回的数据的类型
            headers: {
                "token": sessionStorage.getItem("token")
            },
            data: JSON.stringify(data_temp),
            contentType: "application/json;charset=UTF-8",
            success: function (data, textStatus) {
                var list = data.list;
                access_page_vm.total = Number(data.message);
                access_table_vm.tableData = [];
                 console.log("售后服务人员列表：");
                for (var index = 0; index < list.length; index++) {
                    var element = list[index];
                    // var totalPage = data.totalPage;
                    // access_page_vm.total = totalPage * data_temp.access_page_vm.pageSize;

                    Vue.set(access_table_vm.tableData, index, {
                        "id": element.id,
                        "userId": element.name,
                        "userRole": element.role,
                        "accountStatus": element.userState
                    });
                    console.log(access_table_vm.tableData[index]);

                }

            },
            complete: function (XMLHttpRequest, textStatus) {},
            error: function () {

                 
            }
        });
        //将数据加载到 access_vm 中
    }

    function faq_page_getdata(i) {
        //参数i ：用户点击下方分页器的页数
        //从服务器获取数据
        console.log(" faq_page_getdata")
        var data = JSON.stringify({
            pageNo: i,
            pageSize: faq_page_vm.page_size
        });
        faq_page_vm.current_page=i;
        $.ajax({
            type: "post",
            url: "/admin/getFaqList", //"/api/GetAbnormalServiceInfList",
            dataType: "json", //预期返回的数据的类型
            headers: {
                "token": sessionStorage.getItem("token")
            },
            data: data,
            contentType: "application/json;charset=UTF-8",
            success: function (data, textStatus) {
                var list = data.data.list;
                console.log(data.data);
                console.log(Number(data.data.message));
                faq_page_vm.total = Number(data.data.message);
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


            },
            complete: function (XMLHttpRequest, textStatus) {},
            error: function () {

                
            }
        });

        //将数据加载到 faq_vm 中
    }
    //退出按钮
    $("#logout").click(function (e) {
        $.ajax({
            type: "GET",
            // contentType: "application/json; charset=utf-8",
            // dataType: "json",
            url: "/logout",
            headers: {
                "token": sessionStorage.getItem("token")
            },
            // data: JSON.stringify({
            //     username:name
            // }),
            success: function (response) {
                location.href = "login"
            }
        });

    });
  //页面初始化加载第一页数据
   
   /*  access_setting_page_getdata(1);
    faq_page_getdata(1); */

});
