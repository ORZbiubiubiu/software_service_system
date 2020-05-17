package com.example.software_service_system.mapper.ServerMapper;

import com.example.software_service_system.Entity.ServerEntity.find_service_List;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface server_search_mapper {

    @Select(value = "select * from service_table where serverName=#{serverName} and serviceState<>'已经完成' ")
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
    List<find_service_List> find_service_by_server(@Param("serverName") String serverName);


}
