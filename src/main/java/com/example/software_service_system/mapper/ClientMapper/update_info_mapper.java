package com.example.software_service_system.mapper.ClientMapper;

import com.example.software_service_system.Entity.ClientEntity.update_List;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface update_info_mapper {
    @Select(value = "select * from software_table where softwareName=#{softwareName} order by updateDate desc")
    @Results
            (value = {
                    @Result(id=true, column = "id", property = "id"),
                    @Result(property = "softwareName",column = "softwareName"),
                    @Result(property = "softwareInfo",column = "softwareInfo"),
                    @Result(property = "updateDate",column = "updateDate"),
            })
    List<update_List> _update_info_mapper(@Param("softwareName") String softwareName);

}
