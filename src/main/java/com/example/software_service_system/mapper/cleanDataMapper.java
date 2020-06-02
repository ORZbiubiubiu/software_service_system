package com.example.software_service_system.mapper;

import org.apache.ibatis.annotations.Update;

public interface cleanDataMapper {
    @Update("Truncate table ip")
    int cleanIp();
    @Update("Truncate table token")
    int cleanToken();
}
