package com.example.software_service_system.config;

import com.example.software_service_system.Entity.LoginEntity.Permission;
import com.example.software_service_system.Entity.LoginEntity.Role;
import com.example.software_service_system.Entity.LoginEntity.User;
import com.example.software_service_system.service.LoginService.UserService;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

public class CustomRealm extends AuthorizingRealm {
    @Autowired
    private UserService userService;
/**
 * 进行权限校验会调用
 **/
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        System.out.println("授权 doGetAuthorizationInfo");
        String username = (String)principalCollection.getPrimaryPrincipal();
        User user = userService.findAllUserInfoByUserName(username);
        List<String> stringRoleList = new ArrayList<>();
        List<String> stringPermissionList = new ArrayList<>();

        List<Role> roleList = user.getRoleList();
        for(Role role:roleList){
            stringRoleList.add(role.getName());
            List<Permission> permissionList = role.getPermissionList();
            for(Permission p: permissionList){
                if(p!=null){
                    stringPermissionList.add(p.getName());
                }
            }
        }
        SimpleAuthorizationInfo simpleAuthorizationInfo = new SimpleAuthorizationInfo();
        simpleAuthorizationInfo.addRoles(stringRoleList);
        simpleAuthorizationInfo.addStringPermissions(stringPermissionList);
        return simpleAuthorizationInfo;
    }


    /**
     * 用户登录会调用
     **/
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
        System.out.println("认证 doGetAuthenticationInfo");
        //从token获取用户登录信息，token代表用户输入
        String username = (String)authenticationToken.getPrincipal();
        User user = userService.findAllUserInfoByUserName(username);
        //取密码
        String pwd = user.getPassword();
        if(pwd == null ||"".equals(pwd)){
            return null;
        }

        return new SimpleAuthenticationInfo(username,user.getPassword(),this.getClass().getName());
    }
}
