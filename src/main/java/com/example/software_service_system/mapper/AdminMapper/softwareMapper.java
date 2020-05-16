package com.example.software_service_system.mapper.AdminMapper;


import com.example.software_service_system.Entity.AdminEntity.software;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface softwareMapper {

    @Select("select  *from software_table")
    List<software> querrSoftList();

    @Select("select count(*) from software_table")
    int getNUm();

    @Select("select *from software_table")
    List<software> getSoftwareNameList();

}
