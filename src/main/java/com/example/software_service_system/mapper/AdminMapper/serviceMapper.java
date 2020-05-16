package com.example.software_service_system.mapper.AdminMapper;


import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface serviceMapper {

    @Update("update service_table set serverName = #{serverName} where id=#{id}")
    int Updateserver(String serverName, int id);
}
