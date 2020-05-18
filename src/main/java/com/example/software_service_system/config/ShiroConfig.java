package com.example.software_service_system.config;

import org.apache.shiro.authc.credential.HashedCredentialsMatcher;
import org.apache.shiro.mgt.SecurityManager;
import org.apache.shiro.session.mgt.SessionManager;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.LinkedHashMap;
import java.util.Map;

@Configuration
public class ShiroConfig {
    @Bean
    public ShiroFilterFactoryBean shiroFilter(SecurityManager securityManager){
        System.out.print("执行ShiroFilterFactoryBean");
        ShiroFilterFactoryBean shiroFilterFactoryBean = new ShiroFilterFactoryBean();

        shiroFilterFactoryBean.setSecurityManager(securityManager);
        //需要登录的没登录的接口
        shiroFilterFactoryBean.setLoginUrl("/login");
        //无权限跳转的url
        shiroFilterFactoryBean.setUnauthorizedUrl("/login");
        //拦截器路径
        Map<String,String> filterChainDefinitionMap = new LinkedHashMap<>();


//        filterChainDefinitionMap.put("/login", "anon");
//        filterChainDefinitionMap.put("/logout","logout");
        filterChainDefinitionMap.put("/static/**", "anon");
        filterChainDefinitionMap.put("/css/**", "anon");
        filterChainDefinitionMap.put("/js/**", "anon");

        filterChainDefinitionMap.put("/client/**","roles[client]");
        filterChainDefinitionMap.put("/admin/**","roles[admin]");
        filterChainDefinitionMap.put("/server/**","roles[server]");
//        filterChainDefinitionMap.put("/not_permit","authc");
        shiroFilterFactoryBean.setFilterChainDefinitionMap(filterChainDefinitionMap);
        return shiroFilterFactoryBean;
    }

    @Bean
    public SecurityManager securityManager(){
        DefaultWebSecurityManager securityManager = new DefaultWebSecurityManager();

        securityManager.setSessionManager(sessionManager());

        securityManager.setRealm(customRealm());
        return securityManager;
    }

    @Bean
    public CustomRealm customRealm(){
        CustomRealm customRealm = new CustomRealm();
//        customRealm.setCredentialsMatcher(hashedCredentialsMatcher());
        return customRealm;
    }

    @Bean
    HashedCredentialsMatcher hashedCredentialsMatcher(){
        HashedCredentialsMatcher hashedCredentialsMatcher = new HashedCredentialsMatcher();
        //设置散列算法
        hashedCredentialsMatcher.setHashAlgorithmName("md5");
        hashedCredentialsMatcher.setHashIterations(2);
        return  hashedCredentialsMatcher;
    }
    @Bean
    public SessionManager sessionManager(){
        CustomSessionManager customSessionManager =new CustomSessionManager();
        customSessionManager.setGlobalSessionTimeout(1000000);
        return customSessionManager;
    }

}
