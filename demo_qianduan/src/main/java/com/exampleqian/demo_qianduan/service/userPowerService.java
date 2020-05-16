package com.exampleqian.demo_qianduan.service;


import com.exampleqian.demo_qianduan.entity.*;
import com.exampleqian.demo_qianduan.mapper.userPowerMapper;
import com.exampleqian.demo_qianduan.mapper.serverMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
            //System.out.println("开客户");
            user u1 = userPowerMapper.finduserByName(userName);
            if(u1!=null){
                return "客户用户名重复！";
            }else {
                if (userPowerMapper.getNum()!=0){
                    int id = userPowerMapper.getMaxId();
                    int k=0;
                    if(userPowerMapper.getuserNUMs()==0){
                        k=1;
                    }else {
                        k = userPowerMapper.getuserNUMs();
                    }
                    if(id<k){
                        id=k;
                    }
                    int i = userPowerMapper.addUser(id+1, userName, userPassword, "正常");
                    int j = userPowerMapper.addQuser(id+1,userName,userPassword);
                    if (userPowerMapper.getuserroleNum()==0){
                        userPowerMapper.insertuserrole(1,id+1,1);
                    }else {
                        int r = userPowerMapper.getuserroleNum();
                        userPowerMapper.insertuserrole(r+1,id+1,1);
                    }

                    if (i==1){
                        return "success";
                    }else {
                        return "请重试！";
                    }
                }else {

                    int id = 0;
                    int k=0;
                    if(userPowerMapper.getuserNUMs()==0){
                        k=1;
                    }else {
                        k = userPowerMapper.getuserNUMs();
                    }
                    if(id<k){
                        id=k;
                    }
                    int i = userPowerMapper.addUser(id+1, userName, userPassword, "正常");
                    int j = userPowerMapper.addQuser(id+1,userName,userPassword);
                    if (userPowerMapper.getuserroleNum()==0){
                        userPowerMapper.insertuserrole(1,1,1);
                    }else {
                        int r = userPowerMapper.getuserroleNum();
                        userPowerMapper.insertuserrole(r+1,1,1);
                    }

                    if (i==1){
                        return "success";
                    }else {
                        return "请重试！";
                    }
                }


            }
        }else {
            server s1 = serverMapper.findserverByName(userName);
            if (s1!=null){
                return "维修人员用户名重复！";
            }else{
                System.out.println("开维护");
                if (serverMapper.getNum()==0){
                    int id = 0;
                    int k=0;
                    if(userPowerMapper.getuserNUMs()==0){
                        k=1;
                    }else {
                        k = userPowerMapper.getuserNUMs();
                    }
                    if(id<k){
                        id=k;
                    }
                    int i = serverMapper.addServer(id+1, userName, userPassword, software,"正常");
                    int j = userPowerMapper.addQuser(id+1,userName,userPassword);
                    if (userPowerMapper.getuserroleNum()==0){
                        userPowerMapper.insertuserrole(1,1,2);
                    }else {
                        int r = userPowerMapper.getuserroleNum();
                        userPowerMapper.insertuserrole(r+1,1,2);
                    }

                    if (i==1){
                        return "success";
                    }else {
                        return "请重试！";
                    }
                }else {
                    int id = userPowerMapper.getMaxId();
                    int k=0;
                    if(userPowerMapper.getuserNUMs()==0){
                        k=1;
                    }else {
                        k = userPowerMapper.getuserNUMs();
                    }
                    if(id<k){
                        id=k;
                    }
                    int i = serverMapper.addServer(id+1, userName, userPassword, software,"正常");
                    int j = userPowerMapper.addQuser(id+1,userName,userPassword);
                    if (userPowerMapper.getuserroleNum()==0){
                        userPowerMapper.insertuserrole(1,id+1,2);
                    }else {
                        int r = userPowerMapper.getuserroleNum();
                        userPowerMapper.insertuserrole(r+1,id+1,2);
                    }

                    if (i==1){
                        return "success";
                    }else {
                        return "请重试！";
                    }
                }
            }
        }

    }
}
