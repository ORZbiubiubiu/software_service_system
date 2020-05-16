package com.exampleqian.demo_qianduan.Controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class testController {

    @RequestMapping("/index.html")
    public String index(){
        return "index";
    }
}
