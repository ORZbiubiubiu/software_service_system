package com.exampleqian.demo_qianduan.Controller;

import com.alibaba.fastjson.JSONObject;
import com.exampleqian.demo_qianduan.entity.*;
import com.exampleqian.demo_qianduan.service.messageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController 
public class messageController {
    @Autowired
    messageService messageService;

    @RequestMapping("/getlistss")
    public return_json getex() {


        List<ex> exList = messageService.Listex(1,11);
        System.out.println(exList.get(0));
        System.out.println(exList.get(1));
        return_data<ex> exreturn_data = new return_data<ex>();
        exreturn_data.setList(exList);
        exreturn_data.setMessage(String.valueOf(messageService.getNum()));
        return_json returnJson = new return_json();
        returnJson.setData(exreturn_data);
        return returnJson;
    }

    /*@RequestMapping("/api/GetPermissionSettingsList")
    public return_json getex(@RequestBody JSONObject jsonObject){
        List<ex> exList= messageService.Listex(jsonObject.getIntValue("pageNo"),jsonObject.getIntValue("pageSize"));
        //System.out.println(exList);
        return_data<ex> exreturn_data = new return_data<ex>();
        exreturn_data.setList(exList);
        exreturn_data.setMessage(String.valueOf(messageService.getNum()));
        return_json returnJson = new return_json();
        returnJson.setData(exreturn_data);
        return returnJson;
    }*/

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
