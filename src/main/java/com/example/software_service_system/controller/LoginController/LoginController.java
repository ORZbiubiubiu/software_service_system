package com.example.software_service_system.controller.LoginController;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("")
public class LoginController {
    @GetMapping("")
    public String indexfile(){
        return "login";
    }
}
