package com.example.software_service_system.mapper.ClientMapper;

import com.example.software_service_system.Entity.ClientEntity.get_message_List;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface get_message_mapper {
    @Select(value = "select * from message_table where getName=#{getName} order by id desc")
    @Results
            (value = {
                    @Result(id=true, column = "id", property = "id"),
                    @Result(property = "getName",column = "getName"),
                    @Result(property = "sendName",column = "sendName"),
                    @Result(property = "justMessage",column = "justMessage"),
                    @Result(property = "messageDate",column = "messageDate")
            })
    List<get_message_List> _get_message_mapper(@Param("getName") String getName);
}
