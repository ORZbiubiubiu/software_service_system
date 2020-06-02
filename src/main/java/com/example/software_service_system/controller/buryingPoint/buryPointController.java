package com.example.software_service_system.controller.buryingPoint;


import com.alibaba.fastjson.JSONObject;
import com.example.software_service_system.service.BurypointService.burypointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class buryPointController {
    @Autowired
    burypointService burypointservice;


    @RequestMapping(value = "burypoint",method = RequestMethod.POST)
    @ResponseBody
    public void buryPoint(@RequestBody JSONObject jsonParam)
    {
        String url = (String)jsonParam.get("url");
        String ip = (String)jsonParam.get("ip");
        String token = (String)jsonParam.get("token");
        System.out.println(url+ip+token);
        burypointservice.buryPoint(url,ip,token);
    }
}
