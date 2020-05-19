package com.example.software_service_system.controller.LoginController;

import com.example.software_service_system.Entity.LoginEntity.JsonData;
import com.example.software_service_system.Entity.LoginEntity.User;
import com.example.software_service_system.Entity.LoginEntity.UserQuery;
import com.example.software_service_system.service.LoginService.UserService;
import lombok.extern.slf4j.Slf4j;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
@Slf4j
@RestController
@RequestMapping("/")
public class PublicController {

@Autowired
private UserService userService;

//    @RequestMapping("login_hello")
//    public JsonData needLogin(){
//        return JsonData.buildSuccess("请先登录",-2);
//    }
    @RequestMapping("not_permit")
    public JsonData notPermit(){
        return JsonData.buildSuccess("无权限",-1);
    }

    @PostMapping("login")
    public JsonData login(@RequestBody UserQuery userQuery, HttpServletRequest request, HttpServletResponse response){
        Subject subject = SecurityUtils.getSubject();
        Map<String,Object> info = new HashMap<>();

        String username = userQuery.getName();
        System.out.println(username);
        String userState = userService.findUserstate(username);
//        System.out.println(userState+"失败");
        if(userState.equals("冻结") ){
            log.info("{} login err,account freezed",username);
            log.error("{} login err,account freezed",username);
            return JsonData.buildError("账号已冻结");

        }


//        System.out.println(username);

        try{
            UsernamePasswordToken usernamePasswordToken = new UsernamePasswordToken(userQuery.getName(),userQuery.getPwd());
            subject.login(usernamePasswordToken);
            User user = userService.findSimpleUserInfoByUsername(username);
            List<Integer> roleList = userService.findSimpleRoleIdById(user.getId());
            info.put("msg","success");
            info.put("session_id",subject.getSession().getId());
            for (int i = 0; i < roleList.size(); i++) {
            info.put("role",roleList.get(i));
       }
            log.info("{} login ",username);
            return JsonData.buildSuccess(info);
        }catch ( Exception e){
            e.printStackTrace();
            log.info("{} login err",username);
            log.error("{} login err",username);
            return JsonData.buildError("账户或者密码错误");
        }

    }

//    @RequestMapping("logout")
//    public JsonData logout(){
//        Subject subject = SecurityUtils.getSubject();
//        if(subject.getPrincipals()!=null){
//
//        }
//        SecurityUtils.getSubject().logout();
//        return JsonData.buildSuccess("logout");
//    }

//    private UserService userService;

//    @Resource
//    public void setUserService(UserService userService){
//        this.userService = userService;
//    }

//    @RequestMapping("/find_user_info")
//    public String  findUserInfo(@RequestParam("username")String username){
//        return JSON.toJSONString(userService.findAllUserInfoByUserName(username));
//    }

}
