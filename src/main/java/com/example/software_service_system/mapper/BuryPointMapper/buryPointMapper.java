package com.example.software_service_system.mapper.BuryPointMapper;

import com.example.software_service_system.Entity.buryPointEntity.statistic;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

public interface buryPointMapper {

    @Select("SELECT COUNT(*) from ip where ip = #{ip}")
    int findIp(@Param("ip")String ip);

    @Select("SELECT COUNT(*) from token where token = #{token}")
    int findToken(@Param("token")String token);

    @Select("SELECT COUNT(*) from statistic where api_name = #{api_name}")
    int findApi_name(@Param("api_name")String api_name);

    @Insert("INSERT into ip values(#{ip})")
    int insertIp(@Param("ip")String ip);

    @Insert("INSERT into token values(#{token})")
    int insertToken(@Param("token")String token);

    @Insert("INSERT into statistic values(#{api_name},#{user_type},1,1,1)")
    int insertStatistic(@Param("api_name")String api_name,@Param("user_type")String user_type);

    @Update("UPDATE statistic set pv = pv + 1 where api_name = #{api_name}")
    int updatePv(@Param("api_name")String api_name);

    @Update("UPDATE statistic set uv = uv + 1 where url = #{api_name}")
    int updateUv(@Param("api_name")String api_name);

    @Update("UPDATE statistic set ip_count = ip_count + 1 where api_name = #{api_name}")
    int updateIp_count(@Param("api_name")String api_name);


    @Select("Select * from statistic")
    List<statistic> findAllStatistic();
}