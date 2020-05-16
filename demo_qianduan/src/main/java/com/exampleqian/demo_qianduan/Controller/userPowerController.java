package com.exampleqian.demo_qianduan.Controller;


import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.exampleqian.demo_qianduan.entity.*;
import com.exampleqian.demo_qianduan.service.userPowerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
public class userPowerController {

    @Autowired
    userPowerService userPowerService;

    //,method = {RequestMethod.GET}
    /*@RequestMapping("/api/getCustomerList" )
    public return_data<Map<String,String>>   queryFaqDbList(@RequestBody JSONObject jsonObject){
        //System.out.println("前端来取数据了");
        List<Map<String,String>> userList = userPowerService.queryUserList(jsonObject.getIntValue("pageNo"),jsonObject.getIntValue("pageSize"));
        return_data<Map<String,String>> userreturn_data = new return_data<Map<String,String>>();
        userreturn_data.setList(userList);
        userreturn_data.setMessage(String.valueOf(userPowerService.getNum()));
        return_json returnJson = new return_json();
        returnJson.setData(userreturn_data);
        return userreturn_data;
    }*/

    @RequestMapping("/getCustomerList" )
    public return_data<Map<String,String>>   queryFaqDbList(){
        //System.out.println("前端来取数据了");
        List<Map<String,String>> userList = userPowerService.queryUserList(1,11);
        return_data<Map<String,String>> userreturn_data = new return_data<Map<String,String>>();
        userreturn_data.setList(userList);
        userreturn_data.setMessage(String.valueOf(userPowerService.getNum()));
        return_json returnJson = new return_json();
        returnJson.setData(userreturn_data);
        return userreturn_data;
    }

    @RequestMapping("/api/permissionSettingRequest")
    public  return_json updateuser(@RequestBody JSONObject json) throws IOException{
        int id = json.getIntValue("id");
        String userState = json.getString("userState");
        return_data<user> updateresoult = userPowerService.updateUser(userState,id);
        return_json updatereturnjson = new return_json();
        updatereturnjson.setData(updateresoult);
        return updatereturnjson;
    }

    @RequestMapping("/api/adduser")
    public return_json adduser(@RequestBody JSONObject jsonObject){
        //System.out.println("来加人了");
        if(jsonObject.getString("usertype").equals("客户")){
            String rs = userPowerService.addUser(jsonObject.getString("username"),jsonObject.getString("password"),jsonObject.getString("usertype"),null);
            System.out.println(rs);
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
