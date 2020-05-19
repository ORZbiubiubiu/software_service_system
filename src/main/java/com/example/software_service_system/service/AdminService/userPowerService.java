package com.example.software_service_system.service.AdminService;


import com.example.software_service_system.Entity.AdminEntity.*;
import com.example.software_service_system.mapper.AdminMapper.serverMapper;
import com.example.software_service_system.mapper.AdminMapper.userPowerMapper;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
@Slf4j
@Service
public class userPowerService {

    @Autowired
    userPowerMapper userPowerMapper;

    @Autowired
    serverMapper serverMapper;

    public List<Map<String,String>> queryUserList(int page, int size){
        List<user> userList = userPowerMapper.queryUserList((page-1)*size,size*page);
        List<Map<String,String>> list = new ArrayList<Map<String,String>>();
        for (user u:userList){
            Map<String, String> map = new HashMap<String, String>();
            map.put("id", String.valueOf(u.getId()));
            map.put("name",u.getUserName());
            map.put("role","客户");
            map.put("userState",u.getUserState());
            list.add(map);
        }
        return list;
    }

    public  int getNum(){
        return userPowerMapper.getNum();
    }

    public return_data<user> updateUser(String userState,int id){
        return_data<user> result= new return_data<user>();
        try{
            user u1 = userPowerMapper.finduserbyId(id);
            if (result!=null){
                userPowerMapper.updateUser(userState,id);
                userPowerMapper.updateQUser(userState,id);
                result.setMessage("用户权限修改成功！");
            }
            else {
                result.setMessage("无此问题，无法提交修改");
            }
        }catch (Exception e){
            result.setMessage(e.getMessage());
            e.printStackTrace();
        }
        return result;
    }

    public String addUser(String userName,String userPassword,String usertype,String software){
        if (usertype .equals( "客户")){
            user u1 = userPowerMapper.finduserByName(userName);
            server s1 = serverMapper.findserverByName(userName);
            if(u1!=null||s1!=null){
                String string = "Admin 添加客户账户 fail 用户名重复";
                log.info(string);
                return "客户用户名重复！";
            }else {
                int id = 0;
                int ids = 0;
                int k = 0;
                if (userPowerMapper.getuserNUMs()==0){
                    id = 0;
                }else {
                    id = userPowerMapper.getMaxId();
                }
                if(userPowerMapper.getuserNUMs()==0){
                    k=0;
                }else {
                    k = userPowerMapper.getuseruserMaxId();
                }
                if (serverMapper.getNum()==0){
                    ids = 0;
                }else {
                    ids = serverMapper.getMaxId();
                }
                if (id<k){
                    id=k;
                }
                if (id<ids){
                    id = ids;
                }
                int i = userPowerMapper.addUser(id+1,userName,"正常");
                int j = userPowerMapper.addQuser(id+1,userName,userPassword,"正常");
                if (userPowerMapper.getuserroleNum()==0){
                    userPowerMapper.insertuserrole(1,id+1,1);
                }else {
                    int r = userPowerMapper.getuserroleNum();
                    userPowerMapper.insertuserrole(r+1,id+1,1);
                }
                if (i==1){
                    int idn = id+1;
                    String string = "Admin 添加客户账户 success id："+idn;
                    log.info(string);
                    return "success";
                }else {
                    String string = "Admin 添加客户账户 fail 数据库添加失败";
                    log.info(string);
                    return "失败！";
                }
            }
        }else {
            user u1 = userPowerMapper.finduserByName(userName);
            server s1 = serverMapper.findserverByName(userName);
            if(u1!=null||s1!=null){
                String string = "Admin 添加客户账户 fail 用户名重复";
                log.info(string);
                return "维修人员用户名重复！";
            }else{
                int id = 0;
                int ids = 0;
                int k = 0;
                if (userPowerMapper.getuserNUMs()==0){
                    id = 0;
                }else {
                    id = userPowerMapper.getMaxId();
                }
                if(userPowerMapper.getuserNUMs()==0){
                    k=0;
                }else {
                    k = userPowerMapper.getuseruserMaxId();
                }
                if (serverMapper.getNum()==0){
                    ids = 0;
                }else {
                    ids = serverMapper.getMaxId();
                }
                if (id<k){
                    id=k;
                }
                if (id<ids){
                    id = ids;
                }
                int i = serverMapper.addServer(id+1,userName,software,"在职");
                int j = userPowerMapper.addQuser(id+1,userName,userPassword,"在职");
                if (userPowerMapper.getuserroleNum()==0){
                    userPowerMapper.insertuserrole(1,id+1,2);
                }else {
                    int r = userPowerMapper.getuserroleNum();
                    userPowerMapper.insertuserrole(r+1,id+1,2);
                }
                if (i==1){
                    int idn = id+1;
                    String string = "Admin 添加维护人员账户 success id："+idn;
                    log.info(string);
                    return "success";
                }else {
                    String string = "Admin 添加维护人员账户 fail 数据库添加失败";
                    log.info(string);
                    return "失败！";
                }
            }
        }

    }


}
