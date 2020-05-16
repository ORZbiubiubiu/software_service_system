package com.exampleqian.demo_qianduan.mapper;


import com.exampleqian.demo_qianduan.entity.server;
import com.exampleqian.demo_qianduan.entity.user;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface serverMapper {

    @Select("select serverName from server_table where serverName!=#{serverName} and" +
            " serverSoftware =(select serverSoftware from server_table where serverName=#{serverName} )and serverState='在职'")
    List<String> findServers(String serverName);


    @Select("select t.* from \n" +
            "(select @rownum:=@rownum + 1 as rownum,e.*\n" +
            "from (select @rownum:=0)r,server_table e)t\n" +
            "where rownum>#{page_s} and rownum<=#{page_e}")
    List<server> queryUserList(int page_s, int page_e);

    @Select("select count(*) from server_table")
    int getNum();


    @Select("select * from server_table where id=#{id}")
    server findserverbyId(int id);

    @Update("update server_table set serverState=#{serverState}  where id=#{id}" )
    int updateServer(String serverState, int id);

    @Select("select *from server_table where serverName=#{serverName}")
    server findserverByName(String serverName);

    @Select("select Max(id) from user_table")
    int getMaxId();

    @Insert("insert into server_table values(#{id},#{serverName},#{serverPassword},#{serverSoftware},#{serverState})")
    int addServer(int id,String serverName,String serverPassword,String serverSoftware,String serverState);

    @Select("select count(*) from server_table where serverSoftware=#{software}")
    int getSoftwareCount(String software);
}
