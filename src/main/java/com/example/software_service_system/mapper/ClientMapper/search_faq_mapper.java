package com.example.software_service_system.mapper.ClientMapper;

import com.example.software_service_system.Entity.ClientEntity.faq_List;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface search_faq_mapper {

    @Select(value = "select * from faq_table where faqInfo like concat('%',#{faqInfo},'%') or faqName like concat('%',#{faqInfo},'%') or faqSoftware like concat('%',#{faqInfo},'%') order by id desc")
    @Results
            (value = {
                    @Result(id=true, column = "id", property = "id"),
                    @Result(property = "faqName",column = "faqName"),
                    @Result(property = "faqInfo",column = "faqInfo"),
                    @Result(property = "faqSoftware",column = "faqSoftware"),
                    @Result(property = "faqDate",column = "faqDate")
            })
    List<faq_List> _search_faq_mapper(@Param("faqInfo") String faqInfo);

}
