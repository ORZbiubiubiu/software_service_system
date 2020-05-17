package com.example.software_service_system.service.LoginService;

import com.example.software_service_system.Entity.LoginEntity.JsnoResult;
import com.example.software_service_system.Entity.LoginEntity.Order;
import com.example.software_service_system.Entity.LoginEntity.OrderData;
import com.example.software_service_system.mapper.LoginMapper.OrderMapper;
import org.springframework.stereotype.Service;

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
