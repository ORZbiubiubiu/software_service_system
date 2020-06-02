package com.example.software_service_system.controller.ActionController;


import com.alibaba.fastjson.JSONObject;
import com.example.software_service_system.Entity.AdminEntity.return_data;
import com.example.software_service_system.Entity.AdminEntity.return_json;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("admin")
public class ActionController {
    @Autowired
    private com.example.software_service_system.service.ActionServer.ActionService actionService;

    @RequestMapping("/getActions")
    public return_json getAction() throws ParseException {//返回faqlist
        return_json return_json = actionService.getActions();
        return return_json;
    }

    //客户每个模块点击比例
    @RequestMapping("/getActions_c")
    public return_json getClientAction() throws ParseException {//返回faqlist
        return_json return_json = actionService.percentAction_client();
        return return_json;
    }

    //服务人员每个模块点击比例
    @RequestMapping("/getActions_s")
    public return_json getServerAction() throws ParseException {//返回faqlist
        return_json return_json = actionService.percentAction_server();
        return return_json;
    }

    //客户申请售后服务类型比例
    @RequestMapping("/getActions_clientServeie")
    public return_json getClientService_Action() throws ParseException {//返回faqlist
        return_json return_json = actionService.percentActionService_client();
        return return_json;
    }
}
