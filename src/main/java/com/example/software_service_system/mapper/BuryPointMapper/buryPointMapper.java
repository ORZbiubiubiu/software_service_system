package com.example.software_service_system.mapper.BuryPointMapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

public interface buryPointMapper {

    @Select("SELECT COUNT(*) from ip where ip = #{ip}")
    int findIp(@Param("ip")String ip);

    @Select("SELECT COUNT(*) from token where token = #{token}")
    int findToken(@Param("token")String token);

    @Select("SELECT COUNT(*) from statistic where url = #{url}")
    int findUrl(@Param("url")String url);

    @Insert("INSERT into ip values(#{ip})")
    int insertIp(@Param("ip")String ip);

    @Insert("INSERT into token values(#{token})")
    int insertToken(@Param("token")String token);

    @Insert("INSERT into statistic values(#{url},1,1,1)")
    int insertStatistic(@Param("url")String url);

    @Update("UPDATE statistic set pv = pv + 1 where url = #{url}")
    int updatePv(@Param("url")String url);

    @Update("UPDATE statistic set uv = uv + 1 where url = #{url}")
    int updateUv(@Param("url")String url);

    @Update("UPDATE statistic set ip_count = ip_count + 1 where url = #{url}")
    int updateIp_count(@Param("url")String url);

}