package com.example.software_service_system.mapper.AdminMapper;

import com.example.software_service_system.Entity.AdminEntity.message;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Mapper
@Repository
public interface messageMapper {

    @Select("select count(*) from message_table where sendName='Admin'")
    int getNum();

    @Select("select *from message_table where id in( select id from \n" +
            "            (select @rownum:=@rownum + 1 as rownum,e.*\n" +
            "            from (select @rownum:=0)r,message_table e)t\n" +
            "            where rownum>0 and rownum<=11 ) and getName='Admin'")
    List<message> findAdmessageList(int page_s, int page_e);


    @Delete("delete from message_table where id=#{id}")
    int deleteMessage(int id);

    @Select("select *from message_table where id=#{id}")
    message finfmessagebyid(int id);


    @Insert("insert into message_table values(#{id},#{getName},#{sendName},#{justMessage},#{messageDate}) ")
    int addMessage(int id, String getName, String sendName, String justMessage, Date messageDate);

    @Select("select Max(id)from message_table")
    int getMaxId();
}
