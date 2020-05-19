package com.example.software_service_system.controller.LoginController;

import com.example.software_service_system.Entity.LoginEntity.JsonData;
import lombok.extern.slf4j.Slf4j;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class LogoutController {
    @RequestMapping("/logout")
    public JsonData logout(){
        Subject subject = SecurityUtils.getSubject();
        if(subject.getPrincipals()!=null){
//        System.out.println(subject.getPrincipals());
//            System.out.println(SecurityUtils.getSubject());
//            System.out.println(subject);
            log.info("{} logout ",subject.getPrincipals());
        }
        SecurityUtils.getSubject().logout();

        return JsonData.buildSuccess("logout");
    }
}
