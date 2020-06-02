package com.example.software_service_system.controller.buryingPoint;


import com.alibaba.fastjson.JSONObject;
import com.example.software_service_system.Entity.LoginEntity.JsonData;
import com.example.software_service_system.service.BurypointService.burypointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.software_service_system.Entity.buryPointEntity.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/")
public class buryPointController {
    @Autowired
    burypointService burypointservice;


    @RequestMapping(value = "burypoint",method = RequestMethod.POST)
    @ResponseBody
    public void buryPoint(@RequestBody JSONObject jsonParam)
    {
        String api_name = (String)jsonParam.get("api_name");
        String ip = (String)jsonParam.get("ip");
        String token = (String)jsonParam.get("token");
        String user_type = (String)jsonParam.get("user_type");
        System.out.println(api_name+ip+token+user_type);
        burypointservice.buryPoint(api_name,ip,token,user_type);
    }


    @RequestMapping(value = "admin/getburypoint",method = RequestMethod.POST)
    @ResponseBody
    public JsonData getburyPoint(){
        List<statistic> statistics = burypointservice.findAllStatistic();


        return JsonData.buildSuccess(statistics);
    }

}
