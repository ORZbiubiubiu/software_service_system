package com.exampleqian.demo_qianduan.Controller;

import com.alibaba.fastjson.JSONObject;
import com.exampleqian.demo_qianduan.entity.*;
import com.exampleqian.demo_qianduan.service.serverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
public class serverController {
    @Autowired
    serverService serverService;


    @RequestMapping("/api/getReplaceName")
    public return_json rpNameList(@RequestBody JSONObject jsonObject) {
        return_data<String> rs = serverService.getrpName(jsonObject.getString("serverName"));
        return_json returnJson = new return_json();
        returnJson.setData(rs);
        return returnJson;
    }

    @RequestMapping("/api/getServerList" )
    public return_data<Map<String,String>>   queryFaqDbList(@RequestBody JSONObject jsonObject){
        //System.out.println("前端来取数据了");
        List<Map<String,String>> userList = serverService.queryUserList(jsonObject.getIntValue("pageNo"),jsonObject.getIntValue("pageSize"));
        return_data<Map<String,String>> userreturn_data = new return_data<Map<String,String>>();
        userreturn_data.setList(userList);
        userreturn_data.setMessage(String.valueOf(serverService.getNum()));
        return_json returnJson = new return_json();
        returnJson.setData(userreturn_data);
        return userreturn_data;
    }



    @RequestMapping("/api/permissionSettingserverRequest")
    public  return_json updateuser(@RequestBody JSONObject json) throws IOException {
        int id = json.getIntValue("id");
        String serverState = json.getString("serverState");
        return_data<server> updateresoult = serverService.updateUser(serverState,id);
        return_json updatereturnjson = new return_json();
        updatereturnjson.setData(updateresoult);
        return updatereturnjson;
    }
    /*@RequestMapping("/getnames")
    public return_json rp1NameList() {
        System.out.println("getnames");
        return_data<String> rs = serverService.getrpName("BB");
        return_json returnJson = new return_json();
        returnJson.setData(rs);
        return returnJson;
    }*/
}
