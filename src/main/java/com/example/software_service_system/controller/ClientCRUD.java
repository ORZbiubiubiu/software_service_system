package com.example.software_service_system.controller;

import com.example.software_service_system.Entity.JsnoResult;
import com.example.software_service_system.Entity.Order;
import com.example.software_service_system.Entity.OrderData;
import com.example.software_service_system.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/Client",method = {RequestMethod.GET,RequestMethod.POST})
public class ClientCRUD {
    @Autowired
    private OrderService orderService;

    @RequestMapping(value = "/getOrder",method = RequestMethod.GET)
    @ResponseBody
    public JsnoResult<OrderData<Order>> ListOrder(String Name){
        return orderService.findOrderByName(Name);
    }

//    public List<Order> ListOrder(String Name){
//        return orderService.findByName(Name);
//    }

//    @CrossOrigin
//    @PostMapping(value = "api/login")
//    @ResponseBody
//    public Result login(User requestUser){
//        String username = requestUser.getUsername();
//        username = HtmlUtils.htmlEscape(username);
//        if (!Objects.equals("admin", username) || !Objects.equals("123456", requestUser.getPassword())) {
//            String message = "账号密码错误";
//            System.out.println("test");
//            return new Result(400);
//        } else {
//            return new Result(200);
//        }
//    }
}
