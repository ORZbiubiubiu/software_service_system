package com.example.software_service_system.service.AdminService;

import com.example.software_service_system.Entity.AdminEntity.return_data;
import com.example.software_service_system.Entity.AdminEntity.server;
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
public class serverService {
    @Autowired
    serverMapper serverMapper;
    @Autowired
    com.example.software_service_system.mapper.AdminMapper.userPowerMapper userPowerMapper;
    //获得替换人名单
    public return_data<String> getrpName(String serverName){ ;
        return_data<String> rs = new return_data<String>();
        List<String> list = serverMapper.findServers(serverName);
        if (list==null){
            rs.setMessage("无替换人员");
        }
        else {
            rs.setMessage("有替换人员");
            rs.setList(list);
        }
        return rs;
    }


    //返回服务人员状态
    public List<Map<String,String>> queryUserList(int page, int size){
        List<server> userList = serverMapper.queryUserList((page-1)*size,size*page);
        List<Map<String,String>> list = new ArrayList<Map<String,String>>();
        for (server u:userList){
            Map<String, String> map = new HashMap<String, String>();
            map.put("id", String.valueOf(u.getId()));
            map.put("name",u.getServerName());
            map.put("role","售后服务人员");
            map.put("userState",u.getServerState());
            list.add(map);
        }
        return list;
    }

    //返回售后服务人员人数
    public int getNum(){
        return serverMapper.getNum();
    }

    //修改售后服务状态
    public return_data<server> updateUser(String serverState,int id){

        return_data<server> result= new return_data<server>();
        try{
            server u1 = serverMapper.findserverbyId(id);
            if (result!=null){
                serverMapper.updateServer(serverState,id);
                userPowerMapper.updateQUser(serverState,id);
                String string = "Admin 修改维护人员"+id+" success 新状态为"+serverState;
                log.info(string);
                result.setMessage("维护人员权限修改成功！");
            }
            else {
                String string = "Admin 修改维护人员"+id+" fail";
                log.info(string);
                result.setMessage("无此人员，无法提交修改");
            }
        }catch (Exception e){
            log.error("Admin 修改维护人员 fail 数据库错误");
            result.setMessage(e.getMessage());
            e.printStackTrace();
        }
        return result;
    }

}
