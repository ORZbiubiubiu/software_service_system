package com.example.software_service_system.mapper.AdminMapper;

import com.example.software_service_system.Entity.AdminEntity.faq;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Mapper
@Repository
public interface faqMapper {
    //查询条目数
    @Select("select count(*) from faq_table")
    int queryNumOfFaq();

    // //查询faq数据库内容
    @Select("select * from faq_table order by id")
    List<faq> queryAllFaqDbList();

    //查询faq数据库内容  根据页码 和页数
    @Select("select t.* from \n" +
            "(select @rownum:=@rownum + 1 as rownum,e.*\n" +
            "from (select @rownum:=0)r,faq_table e)t\n" +
            "where rownum>#{page_s} and rownum<=#{page_e}")
    List<faq> queryFaqDbList(int page_s, int page_e);

    @Select("select * from faq_table where id=#{id}")
    faq findfaqbyId(int id);

    //向数据库添加内容
    @Insert("insert into faq_table(id,faqName,faqType,faqDescription,faqInfo,faqSoftware,faqDate) values(#{id},#{faqName},#{faqType},#{faqDescription},#{faqInfo},#{faqSoftware},#{faqDate})")
    int addFaq(faq f);
    //faq数据库修改
    @Update("update faq_table set id=#{id},faqInfo=#{faqInfo},faqDate = #{faqDate} where id=#{id}" )
    int updateFaq(int id, String faqInfo, Date faqDate);
    //faq数据库删除内容
    @Delete("delete from faq_table where id=#{id}  ")
    int deleteFaq(int id);
}

