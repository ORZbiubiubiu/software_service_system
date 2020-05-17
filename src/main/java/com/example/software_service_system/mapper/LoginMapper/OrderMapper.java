package com.example.software_service_system.mapper.LoginMapper;

import java.util.List;
import com.example.software_service_system.Entity.LoginEntity.Order;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface OrderMapper {
    @Select("select * from order_table where userName = #{Name}")
    List<Order> findOrderbyName(String Name);


}

