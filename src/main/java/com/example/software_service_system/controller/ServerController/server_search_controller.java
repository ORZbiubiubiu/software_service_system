package com.example.software_service_system.controller.ServerController;

import com.alibaba.fastjson.JSONObject;
import com.example.software_service_system.service.ClientService.type_find_faq;
import com.example.software_service_system.service.ServerService.Sservice;
import com.example.software_service_system.service.ServerService.get_server_message;
import com.example.software_service_system.service.ServerService.send_server_message;
import com.example.software_service_system.service.ServerService.update_service_state;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController    //相当于@Controller+@RequestBody
@RequestMapping("server")
public class server_search_controller {
    //每个service都要申明一次@Autowired
    @Autowired
    private update_service_state update_service_state;
    @Autowired
    private Sservice ServerService;
    @Autowired
    private get_server_message get_server_message;
    @Autowired
    private send_server_message send_server_message;
    @Autowired
    private com.example.software_service_system.service.ClientService.type_find_faq type_find_faq;

    @RequestMapping(value = "/search",method = RequestMethod.POST)
    @ResponseBody
    public String search_server(@RequestBody JSONObject jsonParam) {
        String servername = (String)jsonParam.get("servername");
        //System.out.println(servername);
        String return_json_string = JSONObject.toJSONString(ServerService.server_search_service(servername));
        return return_json_string;
    }

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

    @RequestMapping(value = "/show_messages",method = RequestMethod.POST)
    @ResponseBody
    public String get_message(@RequestBody JSONObject jsonParam) {
        String getname = (String)jsonParam.get("getName");
        //System.out.println(getname);
        String return_json_string = JSONObject.toJSONString(get_server_message._get_server_message(getname));
        return return_json_string;
    }

    @RequestMapping(value = "/send_server_message", method = RequestMethod.POST)
    @ResponseBody
    public String send_message(@RequestBody JSONObject jsonParam) {
        System.out.println(jsonParam.toJSONString());
        String getName = (String)jsonParam.get("getName");
        String sendName = (String)jsonParam.get("sendName");
        String justMessage = (String)jsonParam.get("justMessage");
        String messageDate = (String)jsonParam.get("messageDate");
        //System.out.println(justMessage);
        //System.out.println(messageDate);
        String return_json_string = JSONObject.toJSONString(send_server_message._send_server_message(getName,sendName,justMessage,messageDate));
        //System.out.println("return:"+return_json_string);
        return return_json_string;
    }
    @RequestMapping(value = "/type_faq")
    @ResponseBody
    public String show_stype_faq(@RequestBody JSONObject jsonParam){
        String faqType = (String)jsonParam.get("faqType");
        String faqInfo = (String)jsonParam.get("faqInfo");
        //System.out.println(faqType+"/"+faqInfo);
        String return_json_string = JSONObject.toJSONString(type_find_faq._type_find_faq(faqType,faqInfo));
        //System.out.println("return:"+return_json_string);
        return return_json_string;
    }



}
