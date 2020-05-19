package com.example.software_service_system.controller.AdminController;

import com.alibaba.fastjson.JSONObject;
import com.example.software_service_system.Entity.AdminEntity.*;
import com.example.software_service_system.service.AdminService.messageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("admin")
public class messageController {
    @Autowired
    messageService messageService;

    @RequestMapping("/ServiceInfList")//异常服务列表
    public return_json getex(@RequestBody JSONObject jsonObject){
        int a ,b;
        a=jsonObject.getIntValue("pageNo");
        b=jsonObject.getIntValue("pageSize");
        List<ex> exList= messageService.Listex(a,b);
        return_data<ex> exreturn_data = new return_data<ex>();
        exreturn_data.setList(exList);
        exreturn_data.setMessage(String.valueOf(messageService.getNum()));
        return_json returnJson = new return_json();
        returnJson.setData(exreturn_data);
        return returnJson;
    }

}
