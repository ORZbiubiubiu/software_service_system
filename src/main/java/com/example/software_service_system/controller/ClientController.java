package com.example.software_service_system.controller;

import com.example.software_service_system.Entity.JsnoResult;
import com.example.software_service_system.Entity.Order;
import com.example.software_service_system.Entity.OrderData;
import com.example.software_service_system.service.OrderService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("client")
public class ClientController {
//    @Autowired
//    private OrderService orderService;

    @Autowired
    private OrderService orderService;


    @RequestMapping(value = "/getOrder",method = RequestMethod.GET)
    @ResponseBody
    public JsnoResult<OrderData<Order>> ListOrder(String Name){

        log.info("get order by {}",Name);
        return orderService.findOrderByName(Name);
    }

//    public JsnoResult<OrderData<Order>> ListOrder(String name){
//        return orderService.findOrderByName(name);
//    }
}
