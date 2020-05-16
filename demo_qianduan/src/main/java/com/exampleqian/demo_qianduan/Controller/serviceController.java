package com.exampleqian.demo_qianduan.Controller;


import com.alibaba.fastjson.JSONObject;
import com.exampleqian.demo_qianduan.entity.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.exampleqian.demo_qianduan.service.serviceService;
import com.exampleqian.demo_qianduan.entity.return_data;
import com.exampleqian.demo_qianduan.entity.return_json;
import com.exampleqian.demo_qianduan.entity.service;

import java.io.IOException;
import java.text.ParseException;

@RestController
public class serviceController {

    @Autowired
    serviceService serviceService;


    /*@RequestMapping("/api/huanren")
    public return_json serviceUpdateServer(@RequestBody JSONObject jsonObject) throws ParseException {
        return_data<service> rs = serviceService.Updateserver(jsonObject.getString("serverName"),jsonObject.getIntValue("serviceid"),jsonObject.getIntValue("msgid"));
        return_json rj = new return_json();
        rj.setData(rs);
        return rj;
    }*/


    @RequestMapping("/huanren")
    public return_json serviceUpdateServer() throws ParseException {
        return_data<service> rs = serviceService.Updateserver("CC",2,1);
        return_json rj = new return_json();
        rj.setData(rs);
        return rj;
    }



    /*@RequestMapping("/serviceUpdateServer")
    public return_json serviceUpdateServer(){
        String s = "C100";
        int id = 2;
        String ls = "BB";
        return_data<service> rs = serviceService.Updateserver(s,id,ls);
        return_json rj = new return_json();
        rj.setData(rs);
        return rj;
    }*/
}
