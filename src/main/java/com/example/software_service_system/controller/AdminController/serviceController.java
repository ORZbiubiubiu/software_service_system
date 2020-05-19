package com.example.software_service_system.controller.AdminController;


import com.alibaba.fastjson.JSONObject;
import com.example.software_service_system.Entity.AdminEntity.return_data;
import com.example.software_service_system.Entity.AdminEntity.return_json;
import com.example.software_service_system.Entity.AdminEntity.service;
import com.example.software_service_system.service.AdminService.serviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;

@RestController
@RequestMapping("admin")
public class serviceController {

    @Autowired
    serviceService serviceService;

    @RequestMapping("/huanren")  // 异常服务换人
    public return_json serviceUpdateServer(@RequestBody JSONObject jsonObject) throws ParseException {
        return_data<service> rs = serviceService.Updateserver(jsonObject.getString("serverName"),jsonObject.getIntValue("serviceid"),jsonObject.getIntValue("msgid"));
        return_json rj = new return_json();
        rj.setData(rs);
        return rj;
    }

}
