package com.exampleqian.demo_qianduan.mapper;


import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface serviceMapper {

    @Update("update service_table set serverName = #{serverName} where id=#{id}")
    int Updateserver(String serverName,int id);
}
