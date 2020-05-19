package com.example.software_service_system.mapper.AdminMapper;


import com.example.software_service_system.Entity.AdminEntity.user;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface userPowerMapper {
    //查询用户
    @Select("select t.* from \n" +
            "(select @rownum:=@rownum + 1 as rownum,e.*\n" +
            "from (select @rownum:=0)r,user_table e)t\n" +
            "where rownum>#{page_s} and rownum<=#{page_e}")
    List<user> queryUserList(int page_s, int page_e);

    @Select("select count(*) from user_table")
    int getNum();

    @Select("select * from user_table where id=#{id}")
    user finduserbyId(int id);

    @Update("update user_table set userState=#{userState}  where id=#{id}" )
    int updateUser(String userState, int id);

    @Insert("insert into user_table values(#{id},#{userName},#{userState})")
    int addUser(int id, String userName, String userState);

    @Select("select *from user_table where userName=#{userName}")
    user finduserByName(String userName);

    @Select("select Max(id) from user_table ")
    int getMaxId();


    //权限分离体现功能
    @Insert("insert into user values(#{id},#{username},#{password},#{userstate})")
    int addQuser(int id, String username, String password, String userstate);



    @Insert("insert into user_role values(#{id},#{userid},#{roleid})")
    int insertuserrole(int id, int userid, int roleid);

    @Select("select count(*) from user_role")
    int getuserroleNum();

    @Select("select Max(id) from user_role ")
    int getuserroleMaxId();

    @Select("select Max(id) from user")
    int getuseruserMaxId();

    @Select("select count(*) from user")
    int getuserNUMs();

    @Update("update user set state=#{userState}  where id=#{id}")
    int updateQUser(String userState, int id);
}
