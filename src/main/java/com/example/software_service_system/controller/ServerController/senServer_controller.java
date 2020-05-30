package com.example.software_service_system.controller.ServerController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.alibaba.fastjson.JSONObject;

@RestController    //相当于@Controller+@RequestBody
@RequestMapping("senSer")
public class senServer_controller {
    @Autowired
    private com.example.software_service_system.service.ServerService.update_service_state update_service_state;

    @RequestMapping(value = "/update_state",method = RequestMethod.POST)
    @ResponseBody
    public String update_service(@RequestBody JSONObject jsonParam) {
        String return_json_string;
        String serverName = (String)jsonParam.get("servername");
        String serverstate = (String)jsonParam.get("serverstate");
        String softwareName = (String)jsonParam.get("softwareName");
        String userName = (String)jsonParam.get("userName");
        //System.out.println(serverName+"----"+serverstate+"----"+softwareName+"----"+userName);
        return_json_string = JSONObject.toJSONString(update_service_state.update_service_now_state(softwareName,serverstate,serverName,userName));
        return return_json_string;
    }
}
