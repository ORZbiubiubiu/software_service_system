package com.example.software_service_system.controller.AdminController;


import com.alibaba.fastjson.JSONObject;
import com.example.software_service_system.Entity.AdminEntity.*;
import com.example.software_service_system.service.AdminService.userPowerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("admin")
public class userPowerController {

    @Autowired
    userPowerService userPowerService;

    @RequestMapping("getCustomerList" )   //权限设置界面  返回客户列表
    public return_data<Map<String,String>>   queryFaqDbList(@RequestBody JSONObject jsonObject){
        List<Map<String,String>> userList = userPowerService.queryUserList(jsonObject.getIntValue("pageNo"),jsonObject.getIntValue("pageSize"));
        return_data<Map<String,String>> userreturn_data = new return_data<Map<String,String>>();
        userreturn_data.setList(userList);
        userreturn_data.setMessage(String.valueOf(userPowerService.getNum()));
        return_json returnJson = new return_json();
        returnJson.setData(userreturn_data);
        return userreturn_data;
    }

    @RequestMapping("/CustomerPermissionSettingRequest")  //更改客户权限
    public  return_json updateuser(@RequestBody JSONObject json) throws IOException{
        int id = json.getIntValue("id");
        String userState = json.getString("userState");
        return_data<user> updateresoult = userPowerService.updateUser(userState,id);
        return_json updatereturnjson = new return_json();
        updatereturnjson.setData(updateresoult);
        return updatereturnjson;
    }

    @RequestMapping("/adduser")
    public return_json adduser(@RequestBody JSONObject jsonObject){  //添加用户
        if(jsonObject.getString("usertype").equals("客户")){
            String rs = userPowerService.addUser(jsonObject.getString("username"),jsonObject.getString("password"),jsonObject.getString("usertype"),null);
            return_data<String> rsd = new return_data<String>();
            rsd.setMessage(rs);
            return_json rsj = new return_json();
            rsj.setData(rsd);
            return rsj;
        }else {
            String rs = userPowerService.addUser(jsonObject.getString("username"),jsonObject.getString("password"),jsonObject.getString("usertype"),jsonObject.getString("software"));
            return_data<String>rsd = new return_data<String>();
            rsd.setMessage(rs);
            return_json rsj = new return_json();
            rsj.setData(rsd);
            return rsj;
        }

    }
}
