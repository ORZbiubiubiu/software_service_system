package com.example.software_service_system.service.ClientService;

import com.example.software_service_system.Entity.ClientEntity.return_data;
import com.example.software_service_system.Entity.ClientEntity.return_json;
import com.example.software_service_system.Entity.ClientEntity.update_List;
import com.example.software_service_system.mapper.ClientMapper.update_info_mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class show_update_info {
    @Autowired
    private com.example.software_service_system.mapper.ClientMapper.update_info_mapper update_info_mapper;

    public return_json _show_update_info(String softwareName){
        return_json myreturn= new return_json();
        return_data<update_List> myData = new return_data<update_List>();
        List<update_List> mylist = new ArrayList();   //这里注意，不然会报null错误
        mylist=update_info_mapper._update_info_mapper(softwareName);
        myData.setMessage("success");
        myData.setList(mylist);
        myreturn.setCode(200);
        myreturn.setData(myData);
        return myreturn;
    }
}
