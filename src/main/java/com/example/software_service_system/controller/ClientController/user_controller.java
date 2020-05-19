package com.example.software_service_system.controller.ClientController;

import com.alibaba.fastjson.JSONObject;
import com.example.software_service_system.service.ClientService.*;
import lombok.extern.slf4j.Slf4j;
import lombok.extern.slf4j.XSlf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class user_controller {
    @Autowired
    private com.example.software_service_system.service.ClientService.user_show_software user_show_software;
    @Autowired
    private user_apply_service user_apply_service;
    @Autowired
    private user_search_service user_search_service;
    @Autowired
    private get_message get_message;
    @Autowired
    private send_message send_message;
    @Autowired
    private search_faq search_faq;
    @Autowired
    private show_update_info show_update_info;
    @Autowired
    private type_find_faq type_find_faq;

    @RequestMapping(value = "/client/user_show_software")
    @ResponseBody
    public String user_show_software(@RequestBody JSONObject jsonParam){
        String userName=(String)jsonParam.get("serverName");
        //System.out.println(userName);
        String return_json_string = JSONObject.toJSONString(user_show_software._user_show_software(userName));
        //System.out.println(return_json_string);
        return return_json_string;
    }

    @RequestMapping(value = "/client/apply_service")
    @ResponseBody
    public String user_apply_service(@RequestBody JSONObject jsonParam){
        String userName=(String)jsonParam.get("userName");
        String softwareName=(String)jsonParam.get("softwareName");
        String serviceKind=(String)jsonParam.get("serviceKind");
        String serviceInfo=(String)jsonParam.get("serviceInfo");
        //System.out.println(userName);
        //System.out.println(softwareName);
        //System.out.println(serviceInfo);
        String return_json_string = JSONObject.toJSONString(user_apply_service._user_apply_service(userName,softwareName,serviceKind,serviceInfo));
        //System.out.println(return_json_string);
        return return_json_string;
    }

    @RequestMapping(value = "/client/user_search")
    @ResponseBody
    public String search_user(@RequestBody JSONObject jsonParam) {
        String userName = (String)jsonParam.get("userName");
        //System.out.println(userName);
        String return_json_string = JSONObject.toJSONString(user_search_service._user_search_service(userName));
        //System.out.println(return_json_string);
        return return_json_string;
    }

    @RequestMapping(value = "/client/send_user_message")
    @ResponseBody
    public String user_send_message(@RequestBody JSONObject jsonParam) {
        System.out.println(jsonParam.toJSONString());
        String getName = (String)jsonParam.get("getName");
        String sendName = (String)jsonParam.get("sendName");
        String justMessage = (String)jsonParam.get("justMessage");
        String messageDate = (String)jsonParam.get("messageDate");
        //System.out.println(getName);
        //System.out.println(sendName);
        //System.out.println(justMessage);
        //System.out.println(messageDate);
        String return_json_string = JSONObject.toJSONString(send_message._send_message(getName,sendName,justMessage,messageDate));
        //System.out.println("return:"+return_json_string);
        return return_json_string;
    }

    @RequestMapping(value = "/client/show_user_messages")
    @ResponseBody
    public String user_get_message(@RequestBody JSONObject jsonParam) {
        String getname = (String)jsonParam.get("getName");
        //System.out.println(getname);
        String return_json_string = JSONObject.toJSONString(get_message._get_message(getname));
        //System.out.println("return:"+return_json_string);
        return return_json_string;
    }

    @RequestMapping(value = "/client/user_search_faq")
    @ResponseBody
    public String search_faq(@RequestBody JSONObject jsonParam) {
        String faqInfo = (String)jsonParam.get("faqInfo");
        //System.out.println(faqInfo);
        String return_json_string = JSONObject.toJSONString(search_faq._search_faq(faqInfo));
        //System.out.println("return:"+return_json_string);
        return return_json_string;
    }

    @RequestMapping(value = "/client/show_update_info")
    @ResponseBody
    public String show_update_info(@RequestBody JSONObject jsonParam) {
        String softwareName = (String)jsonParam.get("softwareName");
        //System.out.println(softwareName);
        String return_json_string = JSONObject.toJSONString(show_update_info._show_update_info(softwareName));
        //System.out.println("return:"+return_json_string);
        return return_json_string;
    }

    @RequestMapping(value = "/client/type_faq")
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
