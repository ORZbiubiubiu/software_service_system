package com.example.software_service_system.service.LoginService;

import com.example.software_service_system.Entity.LoginEntity.Role;
import com.example.software_service_system.Entity.LoginEntity.User;
import com.example.software_service_system.mapper.LoginMapper.RoleMapper;
import com.example.software_service_system.mapper.LoginMapper.UserMapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class UserService {

    private RoleMapper roleMapper;
    @Resource
    public void setRoleMapper(RoleMapper roleMapper){
        this.roleMapper = roleMapper;
    }


    private UserMapper userMapper;
    @Resource
    public void setUserMapper(UserMapper userMapper){
        this.userMapper = userMapper;
    }


    public User findAllUserInfoByUserName(String username){
        User user = userMapper.findByUsername(username);
        List<Role> roleList = roleMapper.findRoleListByUserId(user.getId());
//        System.out.println("hello");
//        for (int i = 0; i < roleList.size(); i++) {
//            System.out.println(roleList.get(i));
//        }
        user.setRoleList(roleList);
        return user;
    }
    public User findSimpleUserInfoById(int userId){
        return userMapper.findById(userId);
    }

    public User findSimpleUserInfoByUsername(String username){
        return userMapper.findByUsername(username);
    }
    public List<Integer> findSimpleRoleIdById(int userId){return roleMapper.findRoleIdListByUserId(userId);}

    public String findUserstate(String username){return userMapper.findUserstate(username);}

}
