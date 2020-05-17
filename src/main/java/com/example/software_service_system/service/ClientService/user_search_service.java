package com.example.software_service_system.service.ClientService;

import com.example.software_service_system.Entity.ClientEntity.find_service_List;
import com.example.software_service_system.Entity.ClientEntity.return_data;
import com.example.software_service_system.Entity.ClientEntity.return_json;
import com.example.software_service_system.mapper.ClientMapper.user_search_service_mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class user_search_service {
    @Autowired
    user_search_service_mapper user_search_service_mapper;

    public return_json _user_search_service(String userName){
        return_json myreturn= new return_json();
        return_data<find_service_List> myData = new return_data<find_service_List>();
        List<find_service_List> mylist = new ArrayList();   //这里注意，不然会报null错误
        mylist=user_search_service_mapper._user_search_service(userName);
        myData.setMessage("success");
        myData.setList(mylist);
        myreturn.setCode(200);
        myreturn.setData(myData);
        return myreturn;

    }
}
