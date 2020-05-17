package com.example.software_service_system.mapper.ClientMapper;

import com.example.software_service_system.Entity.ClientEntity.show_software_List;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface user_show_software_mapper {

    @Select(value = "select * from order_table where userName=#{userName}")
    @Results
            (value = {
                    @Result(id=true, column = "id", property = "id"),
                    @Result(property = "orderId",column = "orderId"),
                    @Result(property = "userName",column = "userName"),
                    @Result(property = "softwareName",column =  "softwareName"),
                    @Result(property = "buyDate",column = "buyDate")
            })
    List<show_software_List> user_show_software(@Param("userName") String userName);
}
