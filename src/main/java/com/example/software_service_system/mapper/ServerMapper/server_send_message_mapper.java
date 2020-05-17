package com.example.software_service_system.mapper.ServerMapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface server_send_message_mapper {
    @Insert("insert into message_table(getName,sendName,justMessage,messageDate) values (#{getName},#{sendName},#{justMessage},#{messageDate});")
    int _server_send_message_mapper(String getName, String sendName, String justMessage, String messageDate);
}