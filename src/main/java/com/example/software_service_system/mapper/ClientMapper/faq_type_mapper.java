package com.example.software_service_system.mapper.ClientMapper;

import com.example.software_service_system.Entity.ClientEntity.faq_List;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface faq_type_mapper {
    @Select(value = "select * from faq_table where faqType=#{faqType}")
    @Results
            (value = {
                    @Result(id=true, column = "id", property = "id"),
                    @Result(property = "faqName",column = "faqName"),
                    @Result(property = "faqInfo",column = "faqInfo"),
                    @Result(property = "faqSoftware",column = "faqSoftware"),
                    @Result(property = "faqType",column = "faqType"),
                    @Result(property = "faqDate",column = "faqDate")
            })
    List<faq_List> _faq_type_mapper(@Param("faqType") String faqType);
}
