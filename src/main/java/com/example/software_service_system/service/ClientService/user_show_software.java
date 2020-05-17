package com.example.software_service_system.service.ClientService;

import com.example.software_service_system.Entity.ClientEntity.find_service_List;
import com.example.software_service_system.Entity.ClientEntity.return_data;
import com.example.software_service_system.Entity.ClientEntity.return_json;
import com.example.software_service_system.Entity.ClientEntity.show_software_List;
import com.example.software_service_system.mapper.ClientMapper.user_show_software_mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class user_show_software {
    @Autowired
    user_show_software_mapper user_show_software_mapper;
    @Autowired
    private com.example.software_service_system.mapper.ClientMapper.user_search_service_mapper user_search_service_mapper;

    public return_json _user_show_software(String userName){
        return_json myreturn= new return_json();
        return_data<show_software_List> myData = new return_data<show_software_List>();
        List<show_software_List> mylist = new ArrayList();   //这里注意，不然会报null错误
        List<find_service_List> list2 = new ArrayList<>();
        mylist=user_show_software_mapper.user_show_software(userName);
        list2=user_search_service_mapper._user_search_service(userName);
        String send_messgae="";
        for(int i=0;i<list2.size();i++){
            send_messgae=send_messgae+list2.get(i).getSoftwareName()+"#";
        }
        myData.setMessage(send_messgae);
        myData.setList(mylist);
        myreturn.setCode(500);
        myreturn.setData(myData);
        return myreturn;
    }
}
