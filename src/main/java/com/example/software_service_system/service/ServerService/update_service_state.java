package com.example.software_service_system.service.ServerService;

import com.example.software_service_system.Entity.ServerEntity.find_service_List;
import com.example.software_service_system.Entity.ServerEntity.return_data;
import com.example.software_service_system.Entity.ServerEntity.return_json;
import com.example.software_service_system.mapper.ServerMapper.update_service_mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class update_service_state {
    @Autowired
    private update_service_mapper update_service_mapper;

    public return_json update_service_now_state(String softwareId,String serviceState,String servername){
        int flag=0;
        return_json myreturn= new return_json();
        return_data<find_service_List> myData = new return_data<find_service_List>();
        List<find_service_List> mylist = new ArrayList();   //这里注意，不然会报null错误
//        mylist = update_service_mapper.find_service_by_server(servername);
//        if(!serviceState.equals("yes") && !serviceState.equals("no") &&serviceState.equals("change")){
//            myData.setMessage("success");
//            myData.setList(mylist);
//            myreturn.setCode(500);
//            myreturn.setData(myData);
//            return myreturn;
//        }
        System.out.println(serviceState);
        System.out.println(softwareId);
        flag=update_service_mapper.update(softwareId,serviceState,servername);
        if(flag==1){
            System.out.println(1);
            myData.setMessage("success");
        }else{
            System.out.println(0);
            myData.setMessage("false");
        }

        myData.setList(mylist);
        myreturn.setCode(200);
        myreturn.setData(myData);
        System.out.println(myreturn);
        return myreturn;
    }
}
