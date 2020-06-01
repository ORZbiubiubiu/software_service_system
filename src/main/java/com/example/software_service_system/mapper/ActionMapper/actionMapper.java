package com.example.software_service_system.mapper.ActionMapper;


import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;
import com.example.software_service_system.Entity.AdminEntity.action;
import com.example.software_service_system.Entity.AdminEntity.action_e;

import javax.xml.crypto.Data;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Mapper
@Repository
public interface actionMapper {


    @Select("select * from action")
    List<action> getActions();

    @Update("update action set Acount = Acount+1 and Ltime = #{Ltime}where Aname=#{Aname}")
    int rd(String Aname, Date Ltime);

    @Insert("insert into action_every values(#{Aname},#{time})")
    int in(String Aname,Date time);

    @Select("select *from action_every where Aname=#{Aname}")
    List<action_e>GetAction(String Aname);


}
