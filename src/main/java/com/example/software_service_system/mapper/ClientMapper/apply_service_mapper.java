package com.example.software_service_system.mapper.ClientMapper;

import com.example.software_service_system.Entity.ClientEntity.find_service_List;
import com.example.software_service_system.Entity.ClientEntity.server_info_List;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface apply_service_mapper {
    @Select(value = "select * from server_table where serverSoftware=#{serverSoftware}")
    @Results
            (value = {
                    @Result(id=true, column = "id", property = "id"),
                    @Result(property = "serverName",column = "serverName"),
                    @Result(property = "serverSoftware",column = "serverSoftware"),
                    @Result(property = "serverState",column = "serverState")
            })
    List<server_info_List> _search_suitable_server(@Param("serverSoftware") String serverSoftware);

    @Select(value = "select * from service_table where serverName=#{serverName}")
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
    List<find_service_List> _count_server_service(@Param("serverName") String serverName);

    @Insert("insert into service_table(userName,softwareName,serverName,serviceState,serviceKind,serviceInfo) values (#{userName},#{softwareName},#{serverName},#{serviceState},#{serviceKind},#{serviceInfo});")
    int _apply_service_mapper(String userName, String softwareName, String serverName, String serviceState, String serviceKind, String serviceInfo);
}
