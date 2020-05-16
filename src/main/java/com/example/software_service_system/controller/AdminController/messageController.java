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
public class messageController {
    @Autowired
    messageService messageService;

    @RequestMapping("/admin/ServiceInfList")//异常服务列表
    public return_json getex(@RequestBody JSONObject jsonObject,@RequestHeader("token") String token){
        System.out.println(token);
        System.out.println("/admin/abc)//异常服务列表");
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
    /*@RequestMapping("/getExlist")
    public return_json getex(){
        List<ex> exList= messageService.Listex();
        //System.out.println(exList);
        return_data<ex> exreturn_data = new return_data<ex>();
        exreturn_data.setList(exList);
        return_json returnJson = new return_json();
        returnJson.setData(exreturn_data);
        return returnJson;
    }*/

    /*@RequestMapping("/deletemse")
    public return_json deleteMessaage(@RequestBody JSONObject jsonObject){
        int id = jsonObject.getIntValue("id");
        return_data<message> deleteresoult = messageService.deleteAdmessage(id);
        return_json deletereturnjson = new return_json();
        deletereturnjson.setData(deleteresoult);
        return deletereturnjson;
    }*/
}
