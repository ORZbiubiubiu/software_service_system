package com.example.software_service_system.mapper.ClientMapper;

import com.example.software_service_system.Entity.ClientEntity.find_service_List;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface user_search_service_mapper {
    @Select(value = "select * from service_table where userName=#{userName}")
    @Results
            (value = {
                    @Result(id=true, column = "id", property = "id"),
                    @Result(property = "userName",column = "userName"),
                    @Result(property = "softwareName",column = "softwareName"),
                    @Result(property = "serverName",column = "serverName"),
                    @Result(property = "serviceState",column = "serviceState"),
                    @Result(property = "serviceKind",column = "serviceKind"),
                    @Result(property = "serviceInfo",column = "serviceInfo")
            })
    List<find_service_List> _user_search_service(@Param("userName") String userName);
}
