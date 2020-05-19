package com.example.software_service_system.service.ClientService;

import com.example.software_service_system.Entity.ClientEntity.find_service_List;
import com.example.software_service_system.Entity.ClientEntity.return_data;
import com.example.software_service_system.Entity.ClientEntity.return_json;
import com.example.software_service_system.Entity.ClientEntity.server_info_List;
import com.example.software_service_system.mapper.ClientMapper.apply_service_mapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Slf4j
@Service
public class user_apply_service {
    @Autowired
    com.example.software_service_system.mapper.ClientMapper.apply_service_mapper apply_service_mapper;

    public return_json _user_apply_service(String userName,String softwareName,String serviceKind,String serviceInfo){
        return_json myreturn = new return_json();
        return_data<find_service_List> myData = new return_data<find_service_List>();
        List<find_service_List> mylist = new ArrayList();   //这里注意，不然会报null错误
        List<server_info_List> serverlist = new ArrayList<>();
        serverlist=apply_service_mapper._search_suitable_server(softwareName);
        int minCount=10000;
        String minServerName="none";
        for(int i=0;i<serverlist.size();i++){
            if(serverlist.get(i).getServerState().equals("在职")){
                List<find_service_List> servicelist=new ArrayList<>();
                servicelist=apply_service_mapper._count_server_service(serverlist.get(i).getServerName());
                if(servicelist.size()<minCount){
                    minServerName=serverlist.get(i).getServerName();
                }
            }
        }
        //System.out.println("111"+minServerName);
        int flag=apply_service_mapper._apply_service_mapper(userName,softwareName,minServerName,"yes",serviceKind,serviceInfo);
        if(flag==1){
            myData.setMessage("success");
            log.info("{} user apply success",userName);
        }else{
            myData.setMessage("false");
            log.error("{} user apply false",userName);
        }
        myData.setList(mylist);
        myreturn.setCode(200);
        myreturn.setData(myData);
        //System.out.println(myreturn);
        return myreturn;
    }
}
