package com.example.software_service_system.mapper.LoginMapper;

import com.example.software_service_system.Entity.LoginEntity.User;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

public interface UserMapper {
    @Select("select * from user where username = #{username}")
    User findByUsername(@Param("username")String username);

    @Select("select * from user where id = #{userId}")
    User findById(@Param("userId")int id);

    @Select("select * from user where username  = #{username} and password = #{pwd}")
    User findByUsernameAndPwd(@Param("username")String username,@Param("pwd")String pwd);

    @Select("select state from user where username = #{username}")
    String findUserstate(@Param("username")String username);
}
