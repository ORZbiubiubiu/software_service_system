package com.example.software_service_system.mapper;

import java.util.List;
import com.example.software_service_system.Entity.Order;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface OrderMapper {
    @Select("select * from order_table where userName = #{Name}")
    List<Order> findOrderbyName(String Name);


}

