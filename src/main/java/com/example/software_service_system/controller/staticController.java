package com.example.software_service_system.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

//静态页面用Controller
@Controller
public class staticController {
    @RequestMapping("/server")
    public String toIndex(){
        return "server";
    }

    @RequestMapping("/client")
    public String toUpdate(){
        return "client";
    }

    @RequestMapping("/faq")
    public String toShowMessage(){
        return "faq";
    }
}
