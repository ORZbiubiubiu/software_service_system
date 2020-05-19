package com.example.software_service_system.controller.AdminController;

import com.example.software_service_system.Entity.AdminEntity.*;
import com.example.software_service_system.service.AdminService.softwareService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("admin")
public class sofowareController {
    @Autowired
    softwareService softwareService;

    @RequestMapping("/GetSoftWareList")  // 软件表
    public return_json getPds() throws ParseException {
        return_data<Map<String,String>>  rs= new return_data<Map<String,String>>();
        List<Map<String,String>> list = softwareService.getSoftwares();
        rs.setList(list);
        rs.setMessage(String.valueOf(softwareService.getNum()));
        return_json returnJson = new return_json();
        returnJson.setData(rs);
        return returnJson;
    }


    @RequestMapping("/getRedistributableSsoftware") //还可以再分配人员的软件表
    public return_json getSwCount(){
        List<Map<String,String>> list= softwareService.getSoftwareName_num();
        return_data<Map<String,String>> rs = new return_data<Map<String,String>>();
        if (list==null){
            rs.setMessage("fail");
        }else {
            rs.setMessage("success");
            rs.setList(list);
        }
        return_json returnJson = new return_json();
        returnJson.setData(rs);
        return returnJson;
    }


}
