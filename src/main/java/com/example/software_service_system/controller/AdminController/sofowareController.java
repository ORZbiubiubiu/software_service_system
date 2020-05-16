package com.example.software_service_system.controller.AdminController;

import com.example.software_service_system.Entity.AdminEntity.*;
import com.example.software_service_system.service.AdminService.softwareService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class sofowareController {
    @Autowired
    softwareService softwareService;

    @RequestMapping("/admin/GetSoftWareList")  // 软件表
    public return_json getPds(){
        return_data<software>  rs= new return_data<software>();
        List<software> list = softwareService.getSoftwares();
        rs.setList(list);
        rs.setMessage(String.valueOf(softwareService.getNum()));
        return_json returnJson = new return_json();
        returnJson.setData(rs);
        return returnJson;
    }

    @RequestMapping("/admin/getRedistributableSsoftware") //还可以再分配人员的软件表
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
    /*@RequestMapping("/getproducts")
    public List<software>  getPds(){
        System.out.println("来了producr");
        return_data<software>  rs= new return_data<software>();
        List<software> list = softwareService.getSoftwares();
        System.out.println(list);
        return list;
        /*rs.setList(list);
        return_json returnJson = new return_json();
        returnJson.setData(rs);
        return returnJson;*/
    //}

}
