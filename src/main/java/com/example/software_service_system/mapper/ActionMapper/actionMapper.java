package com.example.software_service_system.mapper.ActionMapper;


import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;
import com.example.software_service_system.Entity.AdminEntity.action;
import com.example.software_service_system.Entity.AdminEntity.action_e;
import com.example.software_service_system.Entity.AdminEntity.action_cli;
import com.example.software_service_system.Entity.AdminEntity.action_type;

import javax.xml.crypto.Data;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Mapper
@Repository
public interface actionMapper {


    @Select("select * from action")
    List<action> getActions();

    @Update("update action set Acount = Acount+1 , Ltime = #{Ltime} where Aname=#{Aname}")
    int rd(String Aname, Date Ltime);

    @Insert("insert into action_every values(#{Aname},#{time})")
    int in(String Aname,Date time);

    @Select("select *from action_every where Aname=#{Aname}")
    List<action_e>GetAction(String Aname);

    @Update("update action_client set SoftCount = SoftCount+1 where SoftName=#{SoftName}")
    int rds(String SoftName);

    @Select("select *from action_client ")
    List<action_cli>GetCliAction();


    @Update("update action_type set count = count+1 where type=#{type}")
    int rdss(String type);

    @Select("select *from action_type ")
    List<action_type>GetCliTypeAction();
}
