package com.example.software_service_system.mapper.LoginMapper;

import com.example.software_service_system.Entity.LoginEntity.Role;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.mapping.FetchType;

import java.util.List;

public interface RoleMapper {
    @Select("select ur.role_id as id,r.name as name from user_role ur left join  role r on ur.role_id = r.id where ur.user_id = #{userId}")
    @Results(
        value = {
                @Result(id= true,property = "id",column = "id"),
                @Result(property = "name",column = "name"),
                @Result(property = "permissionList",column = "id",
                many = @Many(select = "com.example.software_service_system.mapper.LoginMapper.PermissionMapper.findPermissionListByRoleId",fetchType = FetchType.DEFAULT)
                )
        }
    )
    List<Role> findRoleListByUserId(@Param("userId")int userId);

    @Select("select role_id from user_role where user_id = #{userId} ")
    List<Integer> findRoleIdListByUserId(@Param("userId")int userId);
}
