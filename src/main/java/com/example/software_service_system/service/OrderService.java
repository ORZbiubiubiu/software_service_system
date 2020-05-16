package com.example.software_service_system.service;

import com.example.software_service_system.Entity.JsnoResult;
import com.example.software_service_system.Entity.Order;
import com.example.software_service_system.Entity.OrderData;
import org.springframework.stereotype.Service;
import com.example.software_service_system.mapper.OrderMapper;

import javax.annotation.Resource;
import java.util.List;

@Service
public class OrderService {

    private OrderMapper ordermapper;

    @Resource
    public void setOrdermapper(OrderMapper ordermapper) {
        this.ordermapper = ordermapper;
    }


//    public List<Order> findByName(String name){
//        return ordermapper.findOrderbyName(name);
//    }
    public JsnoResult<OrderData<Order>> findOrderByName(String name){
        List<Order> order = ordermapper.findOrderbyName(name);
        OrderData<Order> orderData = new  OrderData<Order>();
        if(order.isEmpty() ){
            orderData.setMessage("fail");
            orderData.setOrderData(null);
        }else{
            orderData.setMessage("success");
            orderData.setOrderData(order);
        }
        JsnoResult<OrderData<Order>> result = new JsnoResult<OrderData<Order>>();
        if(orderData.getMessage().equals("fail")){
            result.setCode(500);
            result.setData(orderData);
        }else{
            result.setCode(200);
            result.setData(orderData);
        }

        return result;
    }



}
