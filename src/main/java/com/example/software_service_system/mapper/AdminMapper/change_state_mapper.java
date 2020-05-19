package com.example.software_service_system.mapper.AdminMapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface change_state_mapper {
    @Update("UPDATE service_table SET serviceState=#{serviceState} WHERE id=#{id}")
    int _change_state_mapper( @Param("serviceState") String serviceState, @Param("id") int id);
}
