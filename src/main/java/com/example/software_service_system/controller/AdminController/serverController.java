package com.example.software_service_system.controller.AdminController;

import com.alibaba.fastjson.JSONObject;
import com.example.software_service_system.Entity.AdminEntity.*;
import com.example.software_service_system.service.AdminService.serverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("admin")
public class serverController {
    @Autowired
    serverService serverService;

    @RequestMapping("/getReplaceName")
    public return_json rpNameList(@RequestBody JSONObject jsonObject) {
        return_data<String> rs = serverService.getrpName(jsonObject.getString("serverName"));
        return_json returnJson = new return_json();
        returnJson.setData(rs);
        return returnJson;
    }

    @RequestMapping("/getServerList" ) //权限设置界面服务人员名单
    public return_data<Map<String,String>>   queryFaqDbList(@RequestBody JSONObject jsonObject){
        List<Map<String,String>> userList = serverService.queryUserList(jsonObject.getIntValue("pageNo"),jsonObject.getIntValue("pageSize"));
        return_data<Map<String,String>> userreturn_data = new return_data<Map<String,String>>();
        userreturn_data.setList(userList);
        userreturn_data.setMessage(String.valueOf(serverService.getNum()));
        return_json returnJson = new return_json();
        returnJson.setData(userreturn_data);
        return userreturn_data;
    }

    @RequestMapping("/permissionSettingserverRequest")  //提交权限设置-服务人员
    public  return_json updateuser(@RequestBody JSONObject json) throws IOException {
        int id = json.getIntValue("id");
        String serverState = json.getString("serverState");
        return_data<server> updateresoult = serverService.updateUser(serverState,id);
        return_json updatereturnjson = new return_json();
        updatereturnjson.setData(updateresoult);
        return updatereturnjson;
    }
}
