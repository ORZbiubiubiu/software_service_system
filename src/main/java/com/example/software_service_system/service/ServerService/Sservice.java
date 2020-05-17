package com.example.software_service_system.service.ServerService;

import com.example.software_service_system.Entity.ServerEntity.find_service_List;
import com.example.software_service_system.Entity.ServerEntity.return_data;
import com.example.software_service_system.Entity.ServerEntity.return_json;
import com.example.software_service_system.mapper.ServerMapper.server_search_mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class Sservice {
    @Autowired
    private server_search_mapper server_search_mapper;

    public return_json server_search_service(String server_name){
        return_json myreturn= new return_json();
        return_data<find_service_List> myData = new return_data<find_service_List>();
        List<find_service_List> mylist = new ArrayList();   //这里注意，不然会报null错误
        mylist=server_search_mapper.find_service_by_server(server_name);
        myData.setMessage("success");
        myData.setList(mylist);
        myreturn.setCode(200);
        myreturn.setData(myData);
        return myreturn;
    }
}
