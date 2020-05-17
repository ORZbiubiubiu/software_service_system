package com.example.software_service_system.service.ServerService;

import com.example.software_service_system.Entity.ServerEntity.get_message_List;
import com.example.software_service_system.Entity.ServerEntity.return_data;
import com.example.software_service_system.Entity.ServerEntity.return_json;
import com.example.software_service_system.mapper.ServerMapper.server_send_message_mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class send_server_message {

    @Autowired
    private com.example.software_service_system.mapper.ServerMapper.server_send_message_mapper server_send_message_mapper;

    public return_json _send_server_message(String getName,String sendName,String justMessage,String messageDate){
        return_json myreturn= new return_json();
        return_data<get_message_List> myData = new return_data<get_message_List>();
        List<get_message_List> mylist = new ArrayList();   //这里注意，不然会报null错误
        int flag =server_send_message_mapper._server_send_message_mapper(getName,sendName,justMessage,messageDate);
        System.out.println(mylist.toString());
        myData.setMessage("success");
        if(flag==0){
            myData.setMessage("false");
        }
        myData.setList(mylist);
        myreturn.setCode(200);
        myreturn.setData(myData);
        return myreturn;

    }

}
